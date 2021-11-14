import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



const Product = (props) => {
    const { _id, img, description, price, Name } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4} sx={{ mt: 5 }}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                        Price: ${price}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {Name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Link to={`/purchase/${_id}`}>
                    <Button sx={{ mb: 3, }} style={{ textDecoration: 'none', backgroundColor: '#200942' }} variant="contained" size="small">Purchase</Button>
                </Link>



            </Card>
        </Grid>
    );
};

export default Product;