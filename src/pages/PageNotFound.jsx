import React from 'react';
import MainLayout from '../layouts/MainLayout';

const PageNotFound = () => {
    return (
        <MainLayout title="404">
            <div className="container text-center section-padding">
                <h1 className="display-title">404</h1>
                <h1 className="display-content">Content Coming Soon...</h1>
            </div>
        </MainLayout>
    );
};

export default PageNotFound;