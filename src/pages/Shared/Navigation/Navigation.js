import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: 'white', height: '90px' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 30, fontWeight: 'bold', m: 1, letterSpacing: 6, }} style={{ color: '#110c3d' }} >
                        KIDS STATIONARY
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/explore"><Button sx={{ backgroundColor: '#200942' }} color="inherit">Explore</Button></Link>

                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button sx={{ backgroundColor: '#200942' }} color="inherit">Dashboard</Button>
                                </NavLink>

                                <Button onClick={logOut} sx={{ backgroundColor: '#200942' }} color="inherit">LogOut</Button>
                            </Box>

                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button sx={{ backgroundColor: '#200942' }} color="inherit">Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;