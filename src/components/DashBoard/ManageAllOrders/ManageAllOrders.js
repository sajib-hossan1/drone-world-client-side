import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    // get all orders from database
    useEffect(() => {
        fetch('https://drone-world-server.vercel.app/allOrders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])


    // handle status update
    const handleStatusUpdate = id => {
        const proceed = window.confirm('Are you sure you want to shipped this product?')
        if(proceed){
            const url = `https://drone-world-server.vercel.app/orders/${id}`
            fetch(url, {
                method: 'PUT',
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Shipped This Item Successfully')
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)
                }
            })
        }

    }


    // handle delete an order from all orders
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            const url = `https://drone-world-server.vercel.app/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }

    return (
        <Container sx={{mt :5}}>
            <Typography className="section-title" variant="h4">
                Here Are Total Orders : {orders.length}
            </Typography>
            <TableContainer style={{boxShadow : '0px 0px 20px rgba(0,0,0,0.20)'}} sx={{mt:5}} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">Product Image</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row.order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row?.email}
                                </TableCell>
                                <TableCell align="right">{row?.order.name}</TableCell>
                                <TableCell align="right"><img style={{ width: "90px", height: "60px" }} src={row?.order.image} alt="" /></TableCell>
                                <TableCell align="right">${row?.order.price}</TableCell>
                                <TableCell align="right">{row?.status} <button className="action-btn" onClick={() => handleStatusUpdate(row._id)}>Shipping</button></TableCell>
                                <TableCell align="right"><button onClick={() => handleDelete(row._id)}  className="action-btn">delete</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageAllOrders;