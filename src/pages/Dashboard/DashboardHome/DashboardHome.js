import React from 'react';
import { Grid } from '@mui/material';
import MyOrder from '../MyOrder/MyOrder';


const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <img src="https://media.istockphoto.com/vectors/happy-family-and-protection-shield-insurancehealthcare-concept-banner-vector-id1227047549?s=170667a" alt="" />
            </Grid>
            <Grid item xs={7}>
                <MyOrder></MyOrder>
            </Grid>

        </Grid>
    );
};

export default DashboardHome;