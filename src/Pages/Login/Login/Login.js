import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const { user, signInUsingGoogle, loginUser, isLoading, authError} = useAuth();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        // alert('submit');
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault()
    }
    // const handleLoginGoogle = () => {
    //         signInUsingGoogle()
    //         .then(result => {
    //         console.log(result.user);
    //         history.push(redirect_uri)
    //     })
    // }
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, navigate);
    }
    return (
        <Container>
            <Grid container spacing={2}>
            <Grid item sx={{mt:8}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Login</Typography>
                { !isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField 
                    sx={{width:'75%', m:1}}
                    id="standard-basic" 
                    label="Your Email"
                    name="email" 
                    type="email"
                    onBlur={handleOnChange}
                    variant="standard" />
                    <TextField 
                    sx={{width:'75%', m:1}}
                    id="standard-basic" 
                    label="Your Password"
                    name = "password"
                    onBlur={handleOnChange}
                    type="password" 
                    variant="standard" />
                    <NavLink
                    style={{ textDecoration: 'none' }} 
                    to="/register"
>
                        <Button variant="text"  >New User? Please Register</Button>
                    </NavLink>
                    <Button variant="contained" type="submit" sx={{width:'75%', m:1}}>Login</Button>
                </form>}
                { isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">Congrates, User login successfully !</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                <Button onClick={handleGoogleSignIn} variant="contained">Google Sign in</Button>
                {user?.email && <Alert severity="success">Congrates, User login successfully !</Alert>}
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src={login} alt="" />
            </Grid>

            </Grid>

        </Container>
    );
};

export default Login;