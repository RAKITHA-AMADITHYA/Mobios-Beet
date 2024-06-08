import { Button, Typography, Modal, Box, Card, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../components/footer/Footer';
import CloseIcon from '@mui/icons-material/Close';
import Cart from '../../assets/beet/cart.png';
import Merchant from '../../assets/beet/merchant.png';
import customerVector from '../../assets/beet/customer.png'; // Correct import path for the Girl image
import BeetTxtFeild from '../../components/beetTxtFeild/BeetTxtFeild';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
};

const CustomerSignup = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Grid container>
                <Grid item xs={12} md={6} p={5}>
                    <Typography variant="h2" data-aos-anchor-placement="top-bottom">
                        WELCOME TO <span style={{ color: '#349951' }}>BEET</span>
                    </Typography>
                    <BeetTxtFeild label="Name" name="name"  />
                    
                    <div style={{ marginTop: '30px' }}>
                        <Button variant='contained' onClick={handleOpen}>Register</Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <img src={customerVector} width={'70%'} alt="Girl" />
                </Grid>
            </Grid>
            <Footer />

           
        </>
    );
};

export default CustomerSignup;
