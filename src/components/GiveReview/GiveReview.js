import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './GiveReview.css'

const GiveReview = () => {
    const { user } = useAuth();

    // initial info
    const initialInfo = { customerName: user.displayName, photoUrl: '', description: '', rating: '' }

    // review state
    const [review, setReview] = useState(initialInfo)


    // reset input form
    const { reset } = useForm();

    // using history to redirect
    const history = useHistory();

    
    // get customer review values
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...review };
        newInfo[field] = value;
        setReview(newInfo);
    }

    // customer review handle submit
    const handleSubmit = e => {
        const customerReview = {
            ...review
        }
        fetch('https://drone-world-server.onrender.com/customerReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customerReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Give Review Successful')
                    history.push('/home');
                    reset();
                }
            });
        e.preventDefault();
    }

    return (

        <Container>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 , textAlign : 'center', mt:4}}>
                Please Rating About Our Services
            </Typography>
            <Grid item xs={12} md={12} sx={{ my: 5 }}>
                <form onSubmit={handleSubmit} style={{width : '60%', margin : "0 auto"}} >
                    <TextField
                        disabled
                        sx={{ width: '100%', mb: 2 }}
                        id="outlined-size-small"
                        name="customerName"
                        defaultValue={user.displayName}
                        size="small"
                        onBlur={handleOnBlur}
                    />
                    <TextField

                        sx={{ width: '100%', mb: 2 }}
                        id="outlined-size-small"
                        label="Your Photo Url"
                        name="photoUrl"
                        size="small"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{ width: '100%', mb: 2 }}
                        id="outlined-size-small"
                        label="Please Short Describe About Our Service"
                        name="description"
                        size="small"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{ width: '100%', mb: 2 }}
                        id="outlined-size-small"
                        label=" Please Review Our Products Out Of 5"
                        name="rating"
                        type="number"
                        size="small"
                        onBlur={handleOnBlur}
                    />

                    <Button type="submit" className="review-submit-btn" variant="contained">Submit</Button>
                </form>
            </Grid>
        </Container>


    );
};

export default GiveReview;