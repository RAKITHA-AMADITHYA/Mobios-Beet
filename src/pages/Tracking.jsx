import { Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import tracking from '../assets/beet/van1.png'
import tracking2 from '../assets/beet/van2.png'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Footer from '../components/footer/Footer'



const Tracking = () => {


    const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return (<>
        {isMediumUp && (
            <Grid container p={2}>
                <Grid item xs={12} md={7} p={2}>
                    <Typography variant="h2">
                        BEET <span style={{ color: '#b5334a' }}> DELIVARY</span>
                    </Typography>
                    <Typography mt={2} variant="h6">
                        Beet Delivery Tracking System is a powerful tool for businesses reliant on home delivery services.
                        This system facilitates the seamless booking of delivery services, allowing businesses to schedule pick-up and delivery times, input precise delivery locations, and monitor real-time delivery status. Not only does it empower businesses to efficiently manage their delivery operations, but it also provides customers with a user-friendly interface to edit delivery details according to their convenience and track the delivery progress in real time on their devices.
                    </Typography>

                    <Typography mt={2} variant="h6">
                        With Beet's Delivery Tracking System, businesses can optimize their delivery processes, enhance customer satisfaction, and ensure a transparent and reliable delivery experience for both the business and its customers.</Typography>

                    <Button variant='contained' style={{ marginTop: '50px' }}>Visit</Button>
                </Grid>
                <Grid item xs={12} md={5} display={'flex'} justifyContent={'end'} alignItems={'center'}>
                    <img src={tracking} width={'100%'} alt="" />
                </Grid>

            </Grid>)}

        {isMediumDown && (
            <Grid container p={2}>
                <Grid item xs={12} md={5} display={'flex'} justifyContent={'end'} alignItems={'center'}>
                    <img src={tracking2} width={'100%'} alt="" />
                </Grid>
                <Grid item xs={12} md={7} p={2}>
                    <Typography variant="h2">
                        BEET <span style={{ color: '#b5334a' }}> DELIVARY</span>
                    </Typography>
                    <Typography mt={2} variant="subtitle2">
                        Beet Delivery Tracking System is a powerful tool for businesses reliant on home delivery services.
                        This system facilitates the seamless booking of delivery services, allowing businesses to schedule pick-up and delivery times, input precise delivery locations, and monitor real-time delivery status. Not only does it empower businesses to efficiently manage their delivery operations, but it also provides customers with a user-friendly interface to edit delivery details according to their convenience and track the delivery progress in real time on their devices.
                    </Typography>

                    <Typography mt={2} variant="subtitle2">
                        With Beet's Delivery Tracking System, businesses can optimize their delivery processes, enhance customer satisfaction, and ensure a transparent and reliable delivery experience for both the business and its customers.</Typography>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='contained' style={{ marginTop: '50px' }}>Visit</Button></div>
                </Grid>


            </Grid>)}


        <Footer />

    </>
    )
}

export default Tracking