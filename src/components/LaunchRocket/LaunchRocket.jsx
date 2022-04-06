import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LaunchRocketFilter from './LaunchRocketFilter';
import { getLaunchesData } from './_redux/Action/LaunchRocketAction';
import Pagination from '@mui/material/Pagination';
import { Spinner } from 'react-bootstrap';

const LaunchRocket = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [showPerPage, setShowPerPage] = useState(8);
    const [upcoming, setUpcoming] = useState(false);
    const [launchYear, setLaunchYear] = useState("")
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();
    const { launchesData, isLoading, message } = useSelector((state) => state.LunchReducer);

    useEffect(() => {
        dispatch(getLaunchesData(upcoming, launchYear, search))
    }, [upcoming, launchYear, search, dispatch])

    //get current launches data
    const indexOfLastRockets = currentPage * showPerPage;
    const indexOfFirstRockets = indexOfLastRockets - showPerPage;
    const currentRocketsData = launchesData.slice(indexOfFirstRockets, indexOfLastRockets);

    const count = launchesData.length >= showPerPage ? launchesData.length / 8 : 1;

    return (
        <div className="container section-padding text-center">
            {/* filtered rockets different way */}
            <LaunchRocketFilter
                upcoming={upcoming}
                setUpcoming={setUpcoming}
                launchYear={launchYear}
                setLaunchYear={setLaunchYear}
                search={search}
                setSearch={setSearch}
            />
            <div className="row">
                {
                    currentRocketsData && currentRocketsData.length > 0 && currentRocketsData.map((item, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index + 1}>
                            <div className="launching-rocket-card">
                                <img src={item.links.mission_patch} alt={item.mission_name} className="img-fluid" />
                                <div className='text-center'>
                                    <h2 className="mission-name">{item.mission_name}</h2>
                                    <h4 className="rocket-name"> Rocket Name : {item.rocket.rocket_name}</h4>
                                    <h4 className="launch-year">Launch Year : {item.launch_year}</h4>
                                    <h4 className="upcoming">Upcoming : {item.upcoming === true ? "true" : "false"}</h4>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* if loading data */}
            {
                isLoading &&
                <div className="d-flex justify-content-center loading-spinner mt-5">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <p className='mr-3'>Loading Data...</p>
                </div>
            }

            {/* if lose internet connection or data not find */}
            {launchesData.length === 0 && message !== "" && (
                <div className="alert custom-alert">{message}</div>
            )}

            {/* if find any data then show pagination */}
            {launchesData && launchesData.length > 0 && (
                <div className="pagination-section d-flex justify-content-center mt-5">
                    <Pagination
                        count={parseInt(count)}
                        color="primary"
                        variant="outline"
                        defaultPage={currentPage}
                        onChange={(event, value) => setCurrentPage(value)}
                        showFirstButton
                        showLastButton
                    />
                </div>
            )}

        </div>
    );
};

export default LaunchRocket;