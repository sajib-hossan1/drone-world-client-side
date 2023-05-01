import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState();
    const [isLoading, setIsLoading] = useState(false);

    // get all reviews from database
    useState(() => {
        setIsLoading(true)
        fetch('https://drone-world-server.onrender.com/reviews')
        .then(res => res.json())
        .then(data => {
                setReviews(data);
                setIsLoading(false);
            })
    },[])

    return (
        <div style={{marginBottom : '60px'}}>
            <h1 style={{marginTop : '50px'}} className="section-title">Testimonials</h1>
            { 
                isLoading ?
                <div style={{textAlign : "center"}}>
                    <CircularProgress />
                </div>
                :
                <Container>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={4}>
                            {
                                reviews?.map(review => <Review
                                    key={review._id}
                                    review={review}
                                >
                                </Review> )
                            }
                        </Grid>
                    </Box>
                </Container>
            }
        </div>
    );
};

export default Reviews;