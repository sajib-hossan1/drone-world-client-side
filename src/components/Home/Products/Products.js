import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,6)))
    },[])


    return (
        <div>
            <h1 className="section-title">Latest Drones</h1>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        {
                            products?.map(product => <Product 
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

export default Products;