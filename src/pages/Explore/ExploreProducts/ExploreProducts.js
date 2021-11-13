import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, Container, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const ExploreProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>
                <Typography>
                    <Box sx={{ fontSize: 30, fontWeight: 'bold', m: 1, letterSpacing: 6, }}> OUR PRODUCTS</Box>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Grid item xs={4} sm={4} md={4} sx={{ mt: 5 }}
                        >
                            <Card sx={{ minWidth: 275 }}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={product.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                        Price: {product.price}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {product.Name}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <Link to={`/purchase/${product._id}`}>
                                    <Button variant="contained" size="small">Purchase</Button>
                                </Link>



                            </Card>
                        </Grid>)

                    }

                </Grid>
            </Container>
        </Box>
    );
};



export default ExploreProducts;