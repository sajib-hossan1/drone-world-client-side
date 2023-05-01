import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    
    const onSubmit = data => {
        axios.post('https://drone-world-server.onrender.com/products', data)
        .then(res => {
            if(res.data.insertedId){
                alert('A New Product Added successfully')
                reset();
            }
        })
    };


    return (
        <div className="add-product">
            <h2>Add A Product Here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Product Name" />
                <input {...register("details")} placeholder="Product Details" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("image")} placeholder="Product Image Url" />
                <input className="add-p-btn" value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;