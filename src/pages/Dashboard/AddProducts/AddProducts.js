import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProducts.css';
import { Grid } from '@mui/material';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)


        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.inserted) {
                    alert('added successfully')
                    reset();
                }
            })
    }
    return (
        <div className="add-product" style={{ backgroundColor: 'lightblue' }}>
            <h2>Add your product</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description",)} placeholder="description" />
                <input type="number" {...register("price",)} placeholder="price" />
                <input {...register("img",)} placeholder="image" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProducts;