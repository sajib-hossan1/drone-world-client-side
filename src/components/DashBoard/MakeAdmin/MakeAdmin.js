import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin',{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                alert('Made Admin Successfully')
            }
        } )

        e.preventDefault();
    }
    return (
        <div>
            <h2 style={{textAlign : 'center', marginBottom : '50px'}}>Give a valid email address to Make Admin</h2>
            <form onSubmit={handleAdminSubmit} style={{width : '60%', margin : "0 auto"}}>
                <TextField
                    sx={{width:'100%', mb:2}}
                    id="outlined-helperText"
                    label="Email"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                />
                <Button type="submit" className="admin-submit-btn">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;