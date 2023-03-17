import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Home/Product/Product';
import Navigation from '../../shared/Navigation/Navigation';
import Footer from '../../shared/Footer/Footer';

const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://drone-world-server.vercel.app/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div>
            <Navigation></Navigation>
            <h1 className="section-title">Latest Drones</h1>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        {
                            products.map(product => <Product 
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </Grid>
                </Box>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Explore;