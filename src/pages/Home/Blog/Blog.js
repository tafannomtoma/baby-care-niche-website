import React from 'react';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Box } from '@mui/system';


const Blog = () => {
    return (

        <Container>
            <Typography>
                <Box sx={{ fontSize: 30, fontWeight: 'bold', m: 5, letterSpacing: 6, }}> OUR BLOGS</Box>
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={4} sm={4} md={6} sx={{ mt: 1, mb: 5 }}>
                    <CardMedia
                        component="img"
                        image="https://cdn.shopify.com/s/files/1/0024/7712/9777/articles/Layer-14_1024x1024.jpg?v=1558407345"
                        alt="green iguana"
                    />
                    <Typography variant="h5" component="div">
                        OUR KID
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        It's Our kids play with so many things together..And all stufs are superb cute.It's Our kids play with so many things together..And all stufs are superb cute.It's Our kids play with so many things together..And all stufs are superb cute.
                    </Typography>
                </Grid>

                <Grid item xs={4} sm={4} md={6} sx={{ mt: 1, mb: 5 }}>
                    <CardMedia
                        component="img"
                        image="https://cdn.shopify.com/s/files/1/0024/7712/9777/articles/Layer-16_1024x1024.jpg?v=1558407304"
                        alt="green iguana"
                    />
                    <Typography variant="h5" component="div">
                        OUR KID
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        It's Our kids play with so many things together..And all stufs are superb cute.It's Our kids play with so many things together..And all stufs are superb cute.It's Our kids play with so many things together..And all stufs are superb cute.
                    </Typography>
                </Grid>

            </Grid>
        </Container>

    );
};

export default Blog;