import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './Product.css'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
    const {name, image, details, price} = product;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className="product-card" style={{margin : '0 auto'}} sx={{ maxWidth: 345, boxShadow:0 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="drone"
                    sx={{p:2}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {details.slice(0,100)}...
                    </Typography>
                    <h3 className="price">Price : ${price}</h3>
                    <Link className="buy-btn-link"><Button className="buy-btn">Buy Now</Button></Link>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Product;