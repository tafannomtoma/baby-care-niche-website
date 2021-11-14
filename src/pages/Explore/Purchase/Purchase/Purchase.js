import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const Purchase = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('https://infinite-spire-31198.herokuapp.com/order', data)
            .then(res => {
                if (res.data.inserted) {
                    alert('added successfully')
                    reset();
                }
            })
    }



    const { productId } = useParams()
    const [produtcsDetails, setProductsDetails] = useState({});

    useEffect(() => {
        fetch(`https://infinite-spire-31198.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProductsDetails(data))
    }, [])
    return (
        <div>

            <h3>Purchase from here: {productId}</h3>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={4} sm={4} md={6} sx={{ mt: 5 }}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={produtcsDetails.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                Price: {produtcsDetails.price}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {produtcsDetails.Name}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                {produtcsDetails.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={6} sx={{ mt: 5 }}>
                    <form className="my-3" onSubmit={handleSubmit(onSubmit)}>
                        <input className="my-2" {...register("serviceId")} value={productId} />
                        <br />
                        <input className="my-2" {...register("email")} value={user?.email} />
                        <br />
                        <input className="my-2" type="number" {...register("price")} value={produtcsDetails.price} />
                        <br />
                        <input className="my-2" {...register("Adress")} placeholder="Adress" />
                        <br />
                        <input className="my-2" {...register("Number")} placeholder="Contact-number" />
                        <br />

                        <input className="my-2" type="number" {...register("product-quantity",)} placeholder="product" />
                        <br />

                        <input className="my-3" type="Submit" />
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default Purchase;