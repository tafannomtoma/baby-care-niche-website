import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';







// const productsNew = products.slice(0, 6);

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const productsNew = products.slice(0, 6);
    return (

        <Box sx={{ flexGrow: 1 }}>

            <Container>
                <Typography>
                    <Box sx={{ fontSize: 30, fontWeight: 'bold', m: 1, letterSpacing: 6, }}> OUR PRODUCTS</Box>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        productsNew.map(product => <Product
                            key={Product._id}
                            product={product}
                        ></Product>)

                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default Products;