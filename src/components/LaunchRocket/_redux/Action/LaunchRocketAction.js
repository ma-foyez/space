import Axios from "axios";
import * as Types from "../types/Types";

const base_URL = "https://api.spacexdata.com/v3/launches";


/**
 * get lunches data
 * @param {string} upcoming eg: yes, no
 * @param {string} lunchYear eg:  ( less than 1990, 1991 - 1995, 1996 - 2000, 2001 - 2005, 2006 - 2010, 2011 - 2015, 2016 - 2020, greater than 2020)
 * @param {string} searchText eg: search by rocket name, launch year, status
 * @param {int} pageNumber eg: page number like 1,2,3,4.....15
 * @param {int} perPageData eg: how many data load in per page
 * @returns responseData;
 */
export const getLaunchesData = () => async (dispatch) => {
    const responseData = {
        isLoading: true,
        status: false,
        data: []
    }
    dispatch({ type: Types.GET_LUNCHES_DATA, payload: responseData });

    await Axios.get(base_URL)
        .then((res) => {
            if (res.status === 200) {
                responseData.data = res.data;
                responseData.status = true;
                responseData.isLoading = false;
                dispatch({ type: Types.GET_LUNCHES_DATA, payload: responseData });

            }
        })
        .catch((err) => {
            responseData.isLoading = false;
            dispatch({ type: Types.GET_LUNCHES_DATA, payload: responseData });

        })
}