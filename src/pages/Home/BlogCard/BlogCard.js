import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const BlogCard = () => {
    return (
        <Container>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={4} sm={4} md={8} sx={{ mt: 5, mb: 5 }}>
                    <CardMedia
                        component="img"
                        image="https://cdn.shopify.com/s/files/1/0024/7712/9777/files/banner1-v1.jpg?v=1555405052"
                        alt="green iguana"
                    />
                </Grid>

                <Grid item xs={4} sm={4} md={4} sx={{ mt: 5, mb: 5 }}>
                    <CardMedia
                        component="img"
                        image="https://cdn.shopify.com/s/files/1/0024/7712/9777/files/banner2-v2.jpg?v=1555405066"
                        alt="green iguana"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogCard;