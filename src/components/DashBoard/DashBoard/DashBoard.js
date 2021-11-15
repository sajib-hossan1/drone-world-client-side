import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import MyOrders from '../../MyOrders/MyOrders';
import Pay from '../../Pay/Pay';
import GiveReview from '../../GiveReview/GiveReview';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../AdminRoute/AdminRoute';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 240;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  let { path, url } = useRouteMatch();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const linkStyle = {
      textDecoration : 'none',
      color : 'black',
      fontSize : '17px',
      fontWeigth : 'bold',
      width : '100%',
      heigth  : '100%'
  }


  // firebase authentication
  const {logOut, admin} = useAuth();


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button>
            <Link style={linkStyle} to='/home'>Home</Link>
        </ListItem>
        <Divider />
        <ListItem button>
            <Link style={linkStyle} to={`${url}`}>DashBoard</Link>
        </ListItem>
        <Divider />
        
        {admin && 
        <Box>
            <ListItem button>
                <Link style={linkStyle} to={`${url}/manageAllOrders`}>Manage All Orders</Link>
            </ListItem>
            <Divider />

            <ListItem button>
                <Link style={linkStyle} to={`${url}/manageProducts`}>Manage Products</Link>
            </ListItem>
            <Divider />

            <ListItem button>
                <Link style={linkStyle} to={`${url}/addProduct`}>Add Product</Link>
            </ListItem>
            <Divider />

            <ListItem button>
                <Link style={linkStyle} to={`${url}/makeAdmin`}>Make Admin</Link>
            </ListItem>
            <Divider />
        </Box>
            }

        {
            !admin && 
            <Box>
                <ListItem button>
                    <Link style={linkStyle} to={`${url}/myOrders`}>My Orders</Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Link style={linkStyle} to={`${url}/payment`}>Payment</Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Link style={linkStyle} to={`${url}/giveReview`}>Review</Link>
                </ListItem>
                <Divider />
            </Box>
        }
        
      </List>
      <List>
      <Button sx={{ml : 2}} className="logout-btn" onClick={logOut}>Log Out</Button>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
            <Route exact path={path}>
            <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}/myOrders`}>
                <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/payment`}>
                <Pay></Pay>
            </Route>
            <Route path={`${path}/giveReview`}>
                <GiveReview></GiveReview>
            </Route>

            {/* admin routes */}

            <AdminRoute path={`${path}/manageAllOrders`}>
               <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
               <ManageProducts></ManageProducts>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
            </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
