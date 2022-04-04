import React from 'react';
import HeaderBanner from '../components/headerBanner/HeaderBanner';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
    return (
        <MainLayout title="Home">
            <HeaderBanner />
        </MainLayout>
    );
};

export default HomePage;