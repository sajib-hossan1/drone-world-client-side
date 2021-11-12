import { Button, Container, TextField } from '@mui/material';
import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
            <div className="newsletter-container">
                <Container>
                        <h1>News letter</h1>
                        <p>Get The Latest Drones Information From Us</p>
                        <form style={{width : '60%', margin : "0 auto"}}>
                            <TextField
                                sx={{width:'100%', mb:2}}
                                id="outlined-helperText"
                                label="Email"
                                type="email"
                                name="email"
                            />
                            <Button type="submit" className="login-btn">Submit</Button>
                        </form>  
                </Container>
            </div>
    );
};

export default NewsLetter;