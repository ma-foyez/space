import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LaunchRocketFilter from './LaunchRocketFilter';
import { getLaunchesData } from './_redux/Action/LaunchRocketAction';
import Pagination from '@mui/material/Pagination';

const LaunchRocket = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [showPerPage, setShowPerPage] = useState(8);

    const dispatch = useDispatch();
    const { launchesData, isLoading, message } = useSelector((state) => state.LunchReducer);

    useEffect(() => {
        dispatch(getLaunchesData("", "", "", currentPage, showPerPage))
    }, [currentPage, showPerPage, dispatch])

    //get current launches data
    const indexOfLastRockets = currentPage * showPerPage;
    const indexOfFirstRockets = indexOfLastRockets - showPerPage;
    const currentRocketsData = launchesData.slice(indexOfFirstRockets, indexOfLastRockets);

    const count = launchesData.length >= showPerPage ? launchesData.length / 8 : 1;

    return (
        <div className="container section-padding text-center">
            <LaunchRocketFilter />
            <div className="row">
                {
                    currentRocketsData && currentRocketsData.length > 0 && currentRocketsData.map((item, index) => (
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="launching-rocket-card">
                                <img src={item.links.mission_patch} alt={item.mission_name} className="img-fluid" />
                                <div className='text-center'>
                                    <h2 className="mission-name">{item.mission_name}</h2>
                                    <h4 className="rocket-name"> Rocket Name : {item.rocket.rocket_name}</h4>
                                    <h4 className="launch-year">Launch Year : {item.launch_year}</h4>
                                    <h4 className="upcoming">Upcoming : {item.upcoming === true ? "true" : "false"}</h4>
                                    <p>{item.flight_number}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Pagination
                count={count}
                color="primary"
                variant="outline"
                defaultPage={currentPage}
                showFirstButton
                showLastButton
                onChange={(event, value) => setCurrentPage(value)}
            />
        </div>
    );
};

export default LaunchRocket;