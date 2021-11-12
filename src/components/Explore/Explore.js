import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Home/Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div>
            <h1 className="section-title">Latest Drones</h1>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        {
                            products.map(product => <Product 
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Explore;