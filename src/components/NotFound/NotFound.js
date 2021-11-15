import React from 'react';
import './NotFound.css'
import notFoundImg from '../../images/notFound.png'
import { Link } from 'react-router-dom';
import Navigation from '../../shared/Navigation/Navigation';
import Footer from '../../shared/Footer/Footer';


const NotFound = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="not-found-container">
                <img src={notFoundImg} alt="" />
                <div>
                <Link to="/home"><button className="back-to-home-btn">Back To Home</button></Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default NotFound;