import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Box className="banner-text">
                <Typography variant="h2">The Future Drone</Typography>
                <br />
                <Typography sx={{mt:-3}} variant="h2">Is Here</Typography>
            </Box>
        </div>
    );
};

export default Banner;