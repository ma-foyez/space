import React, {useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo@3x.png"
const HeaderNavbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navigation-bar nav-sticky">
            <div className="container">
                {/* medium to large devices navbar  */}
                <div className="d-none d-md-block">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="brand-logo">
                            <Link to="/">
                                <img src={logo} alt="Space brand logo" />
                            </Link>
                        </div>
                        <div className="navbar-menu">
                            <ul className='d-flex justify-content-between'>
                                <li> <NavLink to="/">Home</NavLink> </li>
                                <li> <NavLink to="/about">About US</NavLink> </li>
                                <li> <NavLink to="/story">Story</NavLink> </li>
                                <li> <NavLink to="/Blog">Blog</NavLink> </li>
                                <li> <NavLink to="/contact" className="custom-btn" >Contact US</NavLink> </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Small device navbar */}
                <div className="d-block d-md-none">
                    <div className="brand-logo">
                        <Link to="/">
                            <img src={logo} alt="Space brand logo" />
                        </Link>
                        {
                            toggleMenu ?
                                <svg onClick={() => setToggleMenu(!toggleMenu)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg> :
                                <svg onClick={() => setToggleMenu(!toggleMenu)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                        }
                    </div>
                    <div className={`navbar-menu responsive ${toggleMenu === true && "show"}`}>
                        <ul>
                            <li> <NavLink to="/home">Home</NavLink> </li>
                            <li> <NavLink to="/about">About US</NavLink> </li>
                            <li> <NavLink to="/story">Story</NavLink> </li>
                            <li> <NavLink to="/Blog">Blog</NavLink> </li>
                            <li> <NavLink to="/contact">Contact US</NavLink> </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default HeaderNavbar;