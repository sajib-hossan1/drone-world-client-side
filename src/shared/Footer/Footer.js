import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    const footerCenter ={
        width : '85%',
        margin : '0 auto'
    }
    return (
        <div className="footer">
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid style={{margin : '0 auto'}} container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <div style={footerCenter}>
                                <h2>Drone <span className="secondary-color">World</span></h2>
                                <p>Drone World will give you extra-ordinary drones will make your day awesome.Drone shots are very popular in this is day.So, we give you best price with good quality Drones.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div style={footerCenter}>
                                <h2>Contact Us</h2>
                                <p><i className="fas fa-map-marker-alt"></i> Address : 23 street, California, America</p>
                                <p><i className="fas fa-envelope"></i> E-mail us : drone.world@gmail.com</p>
                                <p><i className="fas fa-phone-alt"></i> Phone : +1 0123456789</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div style={footerCenter}>
                                <h2>Follow Us</h2>
                                <Link to="" className="footer-link"><p><i className="fab fa-facebook-square"></i> Facebook</p></Link>
                                <Link to="" className="footer-link"><p><i className="fab fa-twitter-square"></i> Twitter</p></Link>
                                <Link to="" className="footer-link"><p><i className="fab fa-youtube-square"></i> YouTube</p></Link>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <p className="copyright-text">All Rights Reserved by Md. Sajib Hossan 	&copy; 2021</p>
            </Container>
        </div>
    );
};

export default Footer;