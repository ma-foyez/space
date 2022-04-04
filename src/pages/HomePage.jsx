import React from 'react';
import HeaderBanner from '../components/headerBanner/HeaderBanner';
import LaunchRocket from '../components/LaunchRocket/LaunchRocket';
import Mission from '../components/mission/Mission';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
    return (
        <MainLayout title="Home">
            <HeaderBanner />
            <Mission />
            <LaunchRocket />
        </MainLayout>
    );
};

export default HomePage;