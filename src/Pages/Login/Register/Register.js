import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {

    const [loginData, setLoginData] = useState({})
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleRegister = e => {
        if (loginData.password !== loginData.password2) {
            alert('Passwords Not Matching')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography style={{ color: '#1664C0', fontWeight: '800' }} variant="subtitle1" gutterBottom component="div">
                        Register
                    </Typography>
                    {!isLoading &&
                        <form onSubmit={handleRegister}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Name"
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Confirm Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant='contained'>Register</Button>

                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Button style={{ color: 'red' }} variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}

                    {isLoading && <CircularProgress />}

                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}

                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;