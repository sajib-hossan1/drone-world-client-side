import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="about-container">
            <div style={{width: '50%', textAlign : 'center'}}>
                <h1>Drone <span className="secondary-color">World</span></h1>
                <h3>Drone World will give you extra-ordinary drones will make your day awesome.Drone shots are very popular in this is day.So, we give you best price with good quality Drones.</h3>
                <Link to="/home"><button className="back-to-home-btn">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default AboutUs;