import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';



const BannerCard = () => {
    return (
        <Container>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={4} sm={4} md={4} sx={{ mt: 1, mb: 5 }}>
                    <CardMedia
                        component="img"
                        image="https://cdn.shopify.com/s/files/1/0024/7712/9777/files/banner1.jpg?v=1555408893"
                        alt="green iguana"
                    />
                </Grid>

                <Grid item xs={4} sm={4} md={4} sx={{ mt: 1, mb: 5 }}>
                    <CardMedia
                        component="img"
                        image="https://cdn.shopify.com/s/files/1/0024/7712/9777/files/banner2l.jpg?v=1555408963"
                        alt="green iguana"
                    />
                </Grid>


                <Grid item xs={4} sm={4} md={4} sx={{ mt: 1 }}>
                    <CardMedia
                        component="img"
                        image="https://cdn.shopify.com/s/files/1/0024/7712/9777/files/banner3.jpg?v=1555408998"
                        alt="green iguana"
                    />
                </Grid>
            </Grid>
        </Container>

    );
};

export default BannerCard;