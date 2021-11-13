import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddReview.css'

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)


        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.inserted) {
                    alert('added successfully')
                    reset();
                }
            })
    }

    return (
        <div className="add-review" style={{ backgroundColor: 'lightblue' }}>
            <h3>Please add some Review!!</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description",)} placeholder="description" />
                <input type="number" max="5" {...register("Rating", { required: true })} placeholder="Rating" />
                <input {...register("img",)} placeholder="image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;