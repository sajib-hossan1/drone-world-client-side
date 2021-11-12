import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    const linkStyle = {
        textDecoration : 'none',
        color : 'white'
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className="navBar" position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Box>
                        <Link style={linkStyle} to='/'><Button color="inherit">Home</Button></Link>
                        <Link style={linkStyle} to='/login'><Button color="inherit">Login</Button></Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;