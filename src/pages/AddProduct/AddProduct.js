import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProduct.css';
import { Grid } from '@mui/material';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)


        axios.post('https://infinite-spire-31198.herokuapp.com/products', data)
            .then(res => {
                if (res.data.inserted) {
                    alert('added successfully')
                    reset();
                }
            })
    }
    return (
        <div className="add-product">
            <h2>Add your product</h2>
            <Grid item xs={4} sm={4} md={4} sx={{ mt: 5 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea {...register("description",)} placeholder="description" />
                    <input type="number" {...register("price",)} placeholder="price" />
                    <input {...register("img",)} placeholder="image" />
                    <input type="submit" />
                </form>
            </Grid>
        </div>
    );
};

export default AddProduct;