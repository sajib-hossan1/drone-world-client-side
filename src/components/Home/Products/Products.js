import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircularProgress, Container } from '@mui/material';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch('https://drone-world-server.onrender.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data.slice(0,6));
            setIsLoading(false)
        })
    },[])

    console.log(products);

    return (
        <div>
            <h1 className="section-title">Latest Drones</h1>
            {
                isLoading ? 
                <div style={{textAlign : "center"}}>
                    <CircularProgress />
                </div>
                :
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
            }
        </div>
    );
};

export default Products;