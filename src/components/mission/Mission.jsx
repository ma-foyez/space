import React from 'react';
import { data } from '../../assets/data/Data';

const Mission = () => {
    return (
        <section id="mission">
            <div className="container section-padding">
                <h1 className="content-title">Discover Universe</h1>
                <div className="row mt-5">
                    {
                        data.map((item, index) => (
                            <div className="col-md-4 col-sm-6 col-12" key={index + 1}>
                                <div className={`mission-card mission-card-id-${item.id}`}>
                                    <img src={item.picture} alt={item.title} className="img-fluid" />
                                    <h4 className="mission-card-tilte">{item.title}</h4>
                                    <p className="mission-details">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Mission;