import { Button, Grid, Typography, Modal, Box, Card, useMediaQuery } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Girl from '../assets/beet/man1.png';
import AnimatedButton from '../components/Button/AnimatedButton ';
import Footer from '../components/footer/Footer';
import CloseIcon from '@mui/icons-material/Close';
import Cart from '../assets/beet/cart.png'
import merchant from '../assets/beet/merchant.png'


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

const LandingPg = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (
        <>

            {isMediumUp && (<Grid container>
                <Grid item xs={12} md={6} p={5}>
                    <Typography variant="h2" data-aos-anchor-placement="top-bottom">
                        WELCOME TO <span style={{ color: '#b5334a' }}>BEET</span>
                    </Typography>
                    <Typography mt={2} variant="h6" data-aos-anchor-placement="top-bottom">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam.r incididunt
                        ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam.r incididunt
                        ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam.
                    </Typography>
                    <div style={{ marginTop: '30px' }}>
                        {/* <AnimatedButton btnName="Register" onClick={handleOpen} /> */}
                        <Button variant='contained' onClick={handleOpen}>Register</Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <img src={Girl} width={'100%'} alt="" />
                </Grid>
            </Grid>
            )}
            {isMediumDown && (
                <Grid container>
                <Grid item xs={12} md={6} p={2}>
                    <Typography variant="h3" data-aos-anchor-placement="top-bottom">
                        WELCOME TO <span style={{ color: '#b5334a' }}>BEET</span>
                    </Typography>
                    <Typography mt={2} variant="subtitle1" data-aos-anchor-placement="top-bottom">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam.r incididunt
                        ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam.r incididunt
                        ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam.
                    </Typography>
                    <div style={{ marginTop: '30px' }}>
                        <Button variant='contained' fullWidth onClick={handleOpen}>Register</Button>
                    </div>
                </Grid>
                <Grid item xs={12}  display={'flex'} justifyContent={'center'} alignItems={'end'}>
                    <img src={Girl} width={'100%'} alt="" />
                </Grid>
            </Grid>
            )}
            <Footer />

            {/* <Modal open={open} onClose={handleClose} >
                <Box sx={style} >

                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <fab><CloseIcon onClick={handleClose} /></fab>
                    </div>
                    <Grid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
                        <Typography variant='h3'>Sign Up</Typography>
                        <Typography variant='subtitle1'>Select  Your Account Type</Typography>
                        <Grid container mt={'10px'} spacing={2}>
                            <Grid item md={6}>
                                <Card sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: '#f0d6db',
                    p: 2,
                    flexDirection: 'column',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
                    '&:hover': {
                      bgcolor: '#e69aab',
                      '& img': {
                        transform: 'scale(1.1)',
                      },
                     
                    },
                  }}>
                                    <img src={Cart} width={'100%'} alt="" />
                                    <Typography variant='subtitle1'>Customer</Typography>

                                </Card>
                            </Grid>
                            <Grid item md={6}>
                            <Card sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: '#f0d6db',
                    p: 2,
                    flexDirection: 'column',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
                    '&:hover': {
                      bgcolor: '#e69aab',
                    //   transform: 'scale(1.05)',
                      '& img': {
                        transform: 'scale(1.1)',
                      },
                      
                    },
                  }}>
                                    <img src={merchant} width={'100%'} alt="" />
                                    <Typography variant='subtitle1'>Merchant</Typography>

                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                   
                </Box>
            </Modal> */}
        </>
    );
};

export default LandingPg;
