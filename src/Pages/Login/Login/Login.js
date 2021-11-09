import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { user, logInUser, isLoading, authError, signInWithGoogle } = useAuth()

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        logInUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography style={{ color: '#1664C0', fontWeight: '800' }} variant="subtitle1" gutterBottom component="div">
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant='contained'>Login</Button>

                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button style={{ color: 'red' }} variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>

                    {isLoading && <CircularProgress />}

                    {user?.email && <Alert severity="success">Logged In Successfully</Alert>}

                    {authError && <Alert severity="error">{authError}</Alert>}

                    <p>---------------------------Or,----------------------------</p>

                    <Button
                        onClick={handleGoogleSignIn}
                        variant="contained">
                        <i style={{ marginRight: '10px', color: 'red' }} class="fab fa-google"></i>Sign In Using Google</Button>

                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;