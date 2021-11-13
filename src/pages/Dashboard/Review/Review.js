import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, Container, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container>
            <Typography>
                <Box sx={{ fontSize: 30, fontWeight: 'bold', m: 1, letterSpacing: 6, }}> REVIEWS</Box>
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    reviews.map(review => <Grid item xs={4} sm={4} md={4} sx={{ mt: 5 }}
                        key={review._id}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={review.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                    Rating: {review.Rating}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    Name:{review.Name}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    {review.description}
                                </Typography>
                            </CardContent>




                        </Card>
                    </Grid>)

                }

            </Grid>
        </Container>
    );
};

export default Review;