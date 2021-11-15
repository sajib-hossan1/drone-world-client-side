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
import useAuth from '../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navigation = () => {
    const linkStyle = {
        textDecoration : 'none',
        color : 'white',
        marginRight : '20px'
    }

    const theme = useTheme();

    const useStyle = makeStyles({
        navItem : {
            [theme.breakpoints.down('md')]: {
                display : 'none'
              }
        }
    })

    const {navItem,navLogo} = useStyle();

    // get user info from firebase
    const {user, logOut} = useAuth();


    // responsive drawer state
    const [state, setState] = React.useState(false);

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className="navBar" position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setState(true)}
                        sx ={{display : {md : 'none'}}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={navLogo} variant="h4" component="div" sx={{ flexGrow: 1, fontWeight :500 }}>
                        Drone <span className="secondary-color">World</span>
                    </Typography>
                    <Box className={navItem}>
                        <Link style={linkStyle} to='/'>Home</Link>
                        <Link style={linkStyle} to='/explore'>Explore</Link>
                        <Link style={linkStyle} to='/aboutUs'>About Us</Link>
                    </Box>
                        {
                            user?.email && <Link className={navItem} style={linkStyle} to='/dashboard'>DashBoard</Link>
                        }
                    <Box>
                        {
                            user?.email ? <Button className="logout-btn" onClick={logOut}>Log Out</Button> :
                             <Link style={linkStyle} to='/login'><Button className="login-btn">Login</Button></Link>
                        }
                    </Box>
                    <Typography className={navItem} sx={{ml :2}} variant="p" component="div">
                        {user?.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        <div>
            <React.Fragment>
            <Drawer
                open={state}
                onClose={()=> setState(false)}
            >
                <Box
                    className="drawer-container"
                    sx={{ width: 250 }}
                    role="presentation"
                    >
                    <List>
                        <ListItem button>
                            <ListItemText><Link style={linkStyle} to='/'>Home</Link></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><Link style={linkStyle} to='/explore'>Explore</Link></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><Link style={linkStyle} to='/aboutUs'>About Us</Link></ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                        {
                            user?.email && <Link style={linkStyle} to='/dashboard'>DashBoard</Link>
                        }
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Typography style={{color : 'white'}} sx={{ml :2}} variant="p" component="div">
                            {user?.displayName}
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            {
                                user?.email ? <Button className="login-btn" onClick={logOut}>Log Out</Button> :
                                <Link style={linkStyle} to='/login'><Button className="login-btn">Login</Button></Link>
                            }
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            </React.Fragment>
        </div>
        </>
    );
};

export default Navigation;