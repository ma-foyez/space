import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { getLaunchesData } from './_redux/Action/LaunchRocketAction';
import { useForm } from "react-hook-form";


const LaunchRocketFilter = ({ upcoming, setUpcoming, launchYear, setLaunchYear, search, setSearch }) => {

    const dispatch = useDispatch();

    const IsUpcoming = [
        { value: true, label: 'Yes' },
        { value: false, label: 'No' },
    ];
    const launchingYear = [
        { value: '1800 - 1990', label: '1990' },
        { value: '1991 - 1995', label: '1991 - 1995' },
        { value: '1996 - 2000', label: '1996 - 2000' },
        { value: '2001 - 2005', label: '2001 - 2005' },
        { value: '2006 - 2010', label: '2006 - 2010' },
        { value: '2011 - 2015', label: '2011 - 2015' },
        { value: `2020 - ${new Date().getFullYear()}`, label: `2020 - ${new Date().getFullYear()}` },
    ]

    const styles = {
        option: (provided, state) => ({
            ...provided,
            color: "white",
            backgroundColor: "#1e1b3a",
            border: "1px solid white",
            cursor: "pointer",
            fontSize: "0.8rem"
        }),
        singleValue: (provided, state) => ({
            ...provided,
            backgroundColor: "transparent",
            color: "white",
            cursor: "pointer",
            fontSize: "0.8rem"
        })
    };

    const searchByRocketName = () => {
        dispatch(getLaunchesData(upcoming, launchYear, search));
    };


    return (
        <Row className='align-items-center rocket-filter-area'>
            <Col xl={4} md={4} xs={10} className="d-flex align-items-center filtered-option">
                <label htmlFor="">Is upcoming?</label>
                <Select
                    className="basic-single ml-3"
                    styles={styles}
                    defaultValue={IsUpcoming[0]}
                    isDisabled={false}
                    isLoading={false}
                    isRtl={false}
                    isSearchable={true}
                    name="color"
                    options={IsUpcoming}
                    onChange={(option) => {
                        setUpcoming(option.value);
                        dispatch(getLaunchesData(upcoming, launchYear, search));
                    }}
                />
            </Col>

            <Col xl={4} md={4} xs={10} className="d-flex align-items-center filtered-option">
                <label htmlFor="">Launch year?</label>
                <Select
                    className="basic-single ml-3"
                    styles={styles}
                    defaultValue={launchingYear[0]}
                    isSearchable={true}
                    name="color"
                    options={launchingYear}
                    onChange={(option) => {
                        setLaunchYear(option.value);
                        dispatch(getLaunchesData(upcoming, launchYear, search));
                    }}
                />
            </Col>

            <Col xl={4} md={4} xs={10}>
                <div className="rocket-searching-box">
                    <input
                        type="text"
                        placeholder='Search for rocket'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={() => searchByRocketName()}>Search</button>
                </div>
            </Col>


        </Row>
    );
};

export default LaunchRocketFilter;