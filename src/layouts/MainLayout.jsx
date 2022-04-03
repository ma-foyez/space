import React from 'react';
import Footer from '../components/header/Footer';
import HeaderNavbar from '../components/headerNavbar/HeaderNavbar';

const MainLayout = ({ children, title, description }) => {
    document.title = (title !== null && title !== undefined) ? `Space || ${title}` : `Space`
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