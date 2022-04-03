import React from 'react';
import Footer from '../components/footer/Footer';
import HeaderNavbar from '../components/headerNavbar/HeaderNavbar';

const MainLayout = ({ children, title, description }) => {
    document.title = (title !== null && title !== undefined) ? `${title} || Space` : `Space`
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