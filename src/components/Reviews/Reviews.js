import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState();

    // get all reviews from database
    useState(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div style={{marginBottom : '60px'}}>
            <h1 style={{marginTop : '50px'}} className="section-title">Testimonials</h1>
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
        </div>
    );
};

export default Reviews;