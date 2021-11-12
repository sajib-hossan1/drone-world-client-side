import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Box className="banner-text">
                <Typography sx={{fontWeight : 'bold'}} variant="h2">The Future <span className="secondary-color">Drone</span></Typography>
                <br />
                <Typography sx={{mt:-3}} variant="h2">Is <span className="secondary-color">Here</span></Typography>
            </Box>
        </div>
    );
};

export default Banner;