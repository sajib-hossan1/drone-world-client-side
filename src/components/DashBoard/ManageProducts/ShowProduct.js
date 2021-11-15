import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './ShowProduct.css'

const ShowProduct = (props) => {
    const {_id ,name, image, details, price} = props.product;



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
                    <Button onClick={() => props.handleDelete(_id)} className="dlt-product-btn">Delete Product</Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ShowProduct;