import React from 'react';
import './NotFound.css'
import notFoundImg from '../../images/notFound.png'
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="not-found-container">
            <img src={notFoundImg} alt="" />
            <div>
            <Link to="/home"><button className="back-to-home-btn">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;