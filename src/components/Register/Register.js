import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom'
import gIcon from '../../images/g-icon.png'


const Register = () => {
    const [registerData, setRegisterData] =useState({})

    const handleOnBlur = e => {
        const field = e.target.name ;
        const value = e.target.name;
        const newRegisterData = {...registerData}
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
        e.preventDefault();
    }

    const handleRegister = e => {
        e.preventDefault();
    }

    
    const handleGoogleSignIn = () => {

    }


    return (
        <div>
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
                <Button type="submit" className="login-btn">Log In</Button>
            </form>
            <div className="regi-g-area">
                <span>Already registered?</span> <Link style={{textDecoration : 'none',color : 'blue'}} to="/login">Log In Here</Link>
                <p>or</p>
                <Button onClick={handleGoogleSignIn} className="login-btn-g"><img style={{width : '20px'}} src={gIcon} alt="" />oogle Sign In</Button>
            </div>
        </div>
    );
};

export default Register;