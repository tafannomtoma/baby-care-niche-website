import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


const Footer = () => {
    return (

        <Container sx={{ mt: 20 }}>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={4} sm={4} md={4} sx={{ mt: 5 }}>
                    <Typography variant="h5" component="div">
                        kidStationary Is A Premium ECommerce Theme With Advanced Admin Module.
                    </Typography>

                    <Typography sx={{ mt: 3 }} variant="body2" color="text.secondary">
                        Telephone: +84 988 992 085
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Email: Lamhvdesigner@Gmail.Com
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        8:00 - 19:00, Monday - Saturday, Sunday - Closed,
                    </Typography>



                </Grid>

                <Grid item xs={4} sm={4} md={4} sx={{ mt: 5 }}>
                    <Typography sx={{ color: '#200942' }} variant="h5" component="div">
                        Information
                    </Typography>


                    <Typography sx={{ mt: 3 }} variant="body2" color="text.secondary">
                        About Us
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Shipping & Return
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Privacy Notice
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Conditions Of Use
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        RSS
                    </Typography>


                </Grid>


                <Grid item xs={4} sm={4} md={4} sx={{ mt: 5 }}>
                    <Typography sx={{ color: '#200942' }} variant="h5" component="div">
                        Service

                    </Typography>


                    <Typography sx={{ mt: 3 }} variant="body2" color="text.secondary">
                        Online Support
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Help & FAQs
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Call Center
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Contas Us
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Custom Link
                    </Typography>



                </Grid>

            </Grid>
            <br />
            <hr />
            <Typography sx={{ color: '#200942' }} variant="h5" component="div">
                Copyright © 2021 By ShopiLaunch. All Right Reserved

            </Typography>
        </Container>
    );
};

export default Footer;