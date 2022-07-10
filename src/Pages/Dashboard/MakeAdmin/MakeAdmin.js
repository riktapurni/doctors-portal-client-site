import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email} ;
        fetch('https://gentle-falls-83113.herokuapp.com/users/admin', {
             method: "PUT",
          headers : {
              'authorization' : `Bearer ${token}`,
            'content-type' : 'application/json'
          },
          body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
           
           if(data.modifiedCount){
            console.log(data);
            setEmail('');
            setSuccess(true)
           }
        })
        e.preventDefault();
    }
    return (
        <div>
            <Typography variant="h3">Make Admin</Typography>
            {success && <Alert severity="success">Congrates, Made Admin successfully !</Alert>}
            <form onSubmit={handleAdminSubmit}>
            <TextField
                sx={{width: '50%'}}
                    label="Your Email"
                    name="email" 
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                    <Button variant="contained" type="submit">Make Admnin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;