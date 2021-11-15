import React from 'react';
import useAuth from '../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import { Redirect , Route } from 'react-router-dom';

const AdminRoute = ({ children, ...rest }) => {
    const {user, admin, isLoading} = useAuth();

    if(isLoading){
       return <CircularProgress />
    }
    return (
        <Route
        {...rest}
        render = { ({location}) => user.email && admin ? children : 
        <Redirect
        to={{
            pathname: "/",
            state: { from: location }
          }}
        >

        </Redirect>
        }
        >

        </Route>
    );
};

export default AdminRoute;