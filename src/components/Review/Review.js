import { Grid, Rating } from '@mui/material';
import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {customerName, photoUrl, description, rating} = review;
    
    return (
        <Grid item xs={12} sm={6} md={4}>
            <div className="review-card">
                <div className="review-img">
                    <img src={photoUrl} alt="Customer avatar" />
                </div>
                <div className="review-details">
                    <p className="review-description">{description}</p>
                    <Rating name="read-only" value={parseInt(rating)} readOnly />
                    <h3>@ {customerName}</h3>
                </div>
            </div>
        </Grid>
    );
};

export default Review;