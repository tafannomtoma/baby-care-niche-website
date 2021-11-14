import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';

const verticalCenter = {
    display: 'flex',
    height: '450px',
    alignItems: 'center'

}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1, my: 5 }} style={{ backgroundColor: '#d3ecf0', height: '500px' }}>
            <Grid container spacing={2}>
                <Grid style={verticalCenter} item xs={12} md={7}>
                    <Box>
                        <Typography variant="h4" color="#c4541b" sx={{ my: 3, fontSize: 50, fontWeight: 'bold', m: 1, letterSpacing: 5, }}>
                            Kids stationary
                        </Typography>
                        <Typography variant="h3" color="#200942" sx={{ fontSize: 35, fontWeight: 'bold', m: 1, letterSpacing: 6, }}>
                            Stationary Adventure
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 300, color: 'gray', my: 3 }}>
                            Cut down on the mess (and stress) of mealtime with these smartly designed baby utensils and dishes.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#110c3d' }}>Shop Now</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} style={verticalCenter}>
                    <img
                        style={{ width: '400px', height: '250px' }}
                        src="https://cdn.shopify.com/s/files/1/0024/7712/9777/files/newsletter-popup.jpg?v=1558890852" alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;