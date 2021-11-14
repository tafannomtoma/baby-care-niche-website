import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageAllOrders = () => {
    // const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('https://infinite-spire-31198.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);


    const handleDelete = id => {
        const url = `https://infinite-spire-31198.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = myOrders.filter(order => order._id !== id);
                    setMyOrders(remaining);
                }
            })
    }
    return (
        <div>
            <h3>Your orders</h3>
            <TableContainer component={Paper}>
                <Table style={{ backgroundColor: "#ede2a6" }} sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Adress</TableCell>
                            <TableCell align="right">Number</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell align="right">{row.Adress}</TableCell>
                                <TableCell align="right">{row.Number}</TableCell>
                                <TableCell align="right"><button onClick={() => handleDelete(row._id)}>Delete</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;