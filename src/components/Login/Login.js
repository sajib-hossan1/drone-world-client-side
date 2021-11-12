import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom'
import gIcon from '../../images/g-icon.png'
import useAuth from '../../hooks/useAuth'
import {useLocation, useHistory} from 'react-router-dom'


const Login = () => {
    // user value data state
    const [loginData, setLoginData] = useState({});

    // firebase authentication
    const {signInUsingGoogle, processLogin, error } = useAuth();

    // getting value of an user
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;

        setLoginData(newLoginData)
        e.preventDefault();
    }

    console.log(loginData);

    // redirect history for returning from log in page to where user came
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    // user login
    const handleLogin = e => {
        e.preventDefault();
    }

    // user login with goole
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
        
    }

    return (
        <div>
            <h1 className="section-title">Please Log In Here</h1>
            <form onSubmit={handleLogin} style={{width : '60%', margin : "0 auto"}}>
                <TextField
                    sx={{width:'100%', mb:2}}
                    id="outlined-helperText"
                    label="Email"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                />
                <TextField
                    sx={{width:'100%', mb:2}}
                    id="outlined-helperText"
                    label="Password"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                />
                <Button type="submit" className="login-btn">Log In</Button>
            </form>
            <div className="regi-g-area">
                <span>Haven't registered?</span> <Link className="register" to="/register">Register Here</Link>
                <p>or</p>
                <Button onClick={handleGoogleSignIn} className="login-btn-g"><img style={{width : '20px'}} src={gIcon} alt="" />oogle Sign In</Button>
            </div>
        </div>
    );
};

export default Login;