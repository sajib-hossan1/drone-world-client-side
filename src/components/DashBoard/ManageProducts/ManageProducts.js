import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import ShowProduct from './ShowProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://limitless-chamber-53235.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // handle delete an order from all orders
    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            const url = `https://limitless-chamber-53235.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = products.filter(order => order._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <h1>Manage All Products Here : {products.length}</h1>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        {
                            products.map(product => <ShowProduct
                                key={product._id}
                                product={product}
                                handleDelete={handleDelete}
                            >

                            </ShowProduct>)
                        }
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default ManageProducts;