import React from 'react';
import Footer from '../components/footer/Footer';
import HeaderNavbar from '../components/headerNavbar/HeaderNavbar';

/**
 * Page Layout
 * @param {string} title ex: Page title 
 * @param {jsx} children  
 * @returns MainLayout
 */

const MainLayout = ({ children, title }) => {

    document.title = (title !== null && title !== undefined) ? `${title} || Space` : `Space`;

    return (
        <React.Fragment>
            <HeaderNavbar />
            {
                children
            }
            <Footer />
        </React.Fragment>
    );
};

export default MainLayout;