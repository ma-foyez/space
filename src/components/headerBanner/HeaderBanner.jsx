import React from 'react';
import internetShape from "../../assets/images/internet.svg";
import robotImg from "../../assets/images/Asset 1@8x-8 1@3x.png"

const HeaderBanner = () => {
    return (
        <section id="header-banner" className='header-banner'>
            <div className="container section-padding">
                <div className="header-content-inner p-4">
                    <div className="header-content-details">
                        <button className="welcome-box-btn">
                            <img src={internetShape} alt="WWelcome to Stella" />
                            <span>Welcome to Stella</span>
                        </button>
                        <h1 className="header-content-title">SPACE FOR  <br /> EVERYONE</h1>
                        <p className="header-content-description">
                            At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.
                        </p>
                        <div className="header-content-btn">Get Start</div>
                    </div>
                    <div className="header-content-banner">
                        <img src={robotImg} alt="header banner img" className='img-fluid' />
                    </div>
                </div>
            </div>


        </section>
    );
};

export default HeaderBanner;