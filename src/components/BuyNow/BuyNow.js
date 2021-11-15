import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './BuyNow.css'
import { Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import Navigation from '../../shared/Navigation/Navigation';
import Footer from '../../shared/Footer/Footer';

const BuyNow = () => {
    const {id} = useParams();

    // product details state
    const [productDetails, setProductDetails] = useState();

    // firebase authentication user
    const { user } = useAuth();
    const { email } = user;

    // some hooks from react hook form
    const { register, handleSubmit, reset } = useForm();


    // using history to redirect
    const history = useHistory();


    // order submit
    const onSubmit = data => {
        const order = productDetails;
        data.order = order;

        const userEmail = email;
        data.email = userEmail;

        const status = 'Pending'
        data.status = status;

        fetch('https://limitless-chamber-53235.herokuapp.com/order', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(data => data.json())
        .then(result => {
            if(result.insertedId){
                alert('Your Order Placed Successfully.')
                reset();
                history.push('/home');
            }
        })
    };


    // get item/order item details from database
    useEffect(() => {
        fetch(`https://limitless-chamber-53235.herokuapp.com/buyNow/${id}`)
        .then(res => res.json())
        .then(data => setProductDetails(data))
    } ,[])


    return (
        <div>
            <Navigation></Navigation>
            <h1 className="section-title">Please give necessary information to buy {productDetails?.name} </h1>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                        <div>
                            <img style={{width : '100%'}} src={productDetails?.image} alt="" />
                            <h2>Drone Name : {productDetails?.name}</h2>
                            <h3>Price : {productDetails?.price}</h3>
                            <div>
                                <p>{productDetails?.details}</p>
                            </div>
                        </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                        <div className="booking">
                            <h2>Give More Information For Buy</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.displayName} {...register("name")} />
                                <input defaultValue={user.email} {...register("email")} />
                                <input {...register("address")} placeholder="Your Address" />
                                <input {...register("city")} placeholder="City" />
                                <input type="number" {...register("number")} placeholder="Your phone number" />
                                <input className="order-btn" value="Place Order" type="submit"  />
                            </form>
                        </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default BuyNow;