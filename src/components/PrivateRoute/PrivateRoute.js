import React from 'react';
import useAuth from '../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();

    if(isLoading){
        <CircularProgress />
    }
    return (
        <Route
        {...rest}
        render = { ({location}) => user.email ? children : 
        <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        >

        </Redirect>
        }
        >

        </Route>
    );
};

export default PrivateRoute;