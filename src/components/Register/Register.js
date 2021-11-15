import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom'
import gIcon from '../../images/g-icon.png'
import {useLocation, useHistory} from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import Navigation from '../../shared/Navigation/Navigation';
import Footer from '../../shared/Footer/Footer';


const Register = () => {
    const [registerData, setRegisterData] =useState({})

    // firebase authentication
    const {signInUsingGoogle, createNewUser, error } = useAuth();

    // get user data
    const handleOnBlur = e => {
        const field = e.target.name ;
        const value = e.target.value;
        const newRegisterData = {...registerData}
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
        e.preventDefault();
    }


     // redirect history for returning from log in page to where user came
     const location = useLocation();
     const history = useHistory();
     const redirect_uri = location.state?.from || '/';
 

    // handle register
    const handleRegister = e => {
        createNewUser(registerData.name,registerData.email,registerData.password);
        history.push(redirect_uri);
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
            <Navigation></Navigation>
            <h1 className="section-title">Please Register Here</h1>
            <form onSubmit={handleRegister} style={{width : '60%', margin : "0 auto"}}>
                <TextField
                    sx={{width:'100%', mb:2}}
                    id="outlined-helperText"
                    label="Your name"
                    type="text"
                    name="name"
                    onBlur={handleOnBlur}
                />
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
                <p>{error}</p>
                <Button type="submit" className="login-btn">Register</Button>
            </form>
            <div className="regi-g-area">
                <span>Already registered?</span> <Link style={{textDecoration : 'none',color : 'blue'}} to="/login">Log In Here</Link>
                <p>or</p>
                <Button onClick={handleGoogleSignIn} className="login-btn-g"><img style={{width : '20px'}} src={gIcon} alt="" />oogle Sign In</Button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;