import React from 'react';
import HeaderBanner from '../components/headerBanner/HeaderBanner';
import Mission from '../components/mission/Mission';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
    return (
        <MainLayout title="Home">
            <HeaderBanner />
            <Mission />
        </MainLayout>
    );
};

export default HomePage;