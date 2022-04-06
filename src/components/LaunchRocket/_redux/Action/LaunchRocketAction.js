import Axios from "axios";
import * as Types from "../types/Types";



/**
 * get lunches data
 * @param {string} upcoming eg: yes, no
 * @param {string} lunchYear eg:  ( less than 1990, 1991 - 1995, 1996 - 2000, 2001 - 2005, 2006 - 2010, 2011 - 2015, 2016 - 2020, greater than 2020)
 * @param {string} searchText eg: search by rocket name, launch year, status
 * @returns responseData;
 */
export const getLaunchesData = (upcoming, launchYear, searchText) => async (dispatch) => {
    const responseData = {
        isLoading: true,
        status: false,
        message: "",
        data: []
    }

    dispatch({ type: Types.GET_LUNCHES_DATA, payload: responseData });

    let url = "https://api.spacexdata.com/v3/launches";

    // filter by upcoming status
    if (upcoming == true) {
        url += `/upcoming`;
    } else {
        url = "https://api.spacexdata.com/v3/launches";
    }

    //filter by launch years between start & end
    if (launchYear !== null && launchYear !== "") {
        const separateYear = launchYear.split(' ');
        url = `https://api.spacexdata.com/v3/launches?start=${separateYear[0]}&end=${separateYear[2]}`;
    }

    //search by rocket name
    if (searchText !== null && searchText !== "undefined" && searchText !== "") {
        url = `https://api.spacexdata.com/v3/launches?rocket_name=${searchText}`;
    }

    await Axios.get(url)
        .then((res) => {
            if (res.status === 200) {
                responseData.data = res.data;
                responseData.status = true;
                responseData.isLoading = false;
                if (responseData.data.length === 0) {
                    responseData.message = "Data not found...!"
                }
                dispatch({ type: Types.GET_LUNCHES_DATA, payload: responseData });
            }
        })
        .catch((err) => {
            responseData.isLoading = false;
            responseData.message = "Something went wrong, please check your internet connection!"
            dispatch({ type: Types.GET_LUNCHES_DATA, payload: responseData });

        })
}
