

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Accordion from './Kitchen-Estimate';

const Home = () => {
    return (
        <div>
            <div class="breadcrump py-3">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                            <p className="">
                                <Link to="/" className="text-link fs-6">Home</Link>
                                <FontAwesomeIcon icon={faAngleRight} className="mx-1 fs-7 " />
                                <span className=''>Kitchen Cabinets</span> <FontAwesomeIcon icon={faAngleRight} className="mx-1 fs-7 " />
                                <span className='text-secondary'>Kitchen Estimate</span>
                            </p>
                            <h2>Kitchen Estimator</h2>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row d-flex">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                            <Accordion/>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
