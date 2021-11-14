import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    // console.log(loginData);
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your pass did not match');
            return
        }

        registerUser(loginData.email, loginData.password, loginData.name, history, location);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Please Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label="Your Name"
                            name="name"
                            type="name"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label=" Re-type Your Password"
                            type="password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button
                            sx={{ width: '75%', m: 1, mt: 5 }} style={{ backgroundColor: '#97ccc9' }} type="submit"
                            variant="contained">Register</Button>
                        <NavLink to="/login">
                            <Button
                                style={{ textDecoration: 'none' }}
                                sx={{ width: '75%', m: 1, mt: 5 }}
                                variant="text">Already registerd? please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Successfully added</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100 %' }} src="https://m.media-amazon.com/images/I/41AnVb1JypL._AC_SY780_.jpg" alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;