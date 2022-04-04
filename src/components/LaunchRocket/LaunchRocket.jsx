import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLaunchesData } from './_redux/Action/LaunchRocketAction';

const LaunchRocket = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLaunchesData())
    }, [])
    return (
        <div className="container">
            <h2>Lunch Section</h2>
        </div>
    );
};

export default LaunchRocket;