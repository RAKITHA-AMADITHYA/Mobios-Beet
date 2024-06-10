import { Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import pos from '../assets/beet/pos.png'
import pos1 from '../assets/beet/pos1.png'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Footer from '../components/footer/Footer'



const PosTerminal = () => {


    const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));


    return (<>
       {isMediumUp&& (
       <Grid container p={2}>

            <Grid item xs={12} md={5} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                <img src={pos} width={'75%'} alt="" />
            </Grid>
            <Grid item xs={12} md={7} p={2}>
                <Typography variant="h2">
                    BEET <span style={{ color: '#b5334a' }}>POS</span>
                </Typography>
                <Typography mt={2} variant="h6">
                    Beet’s Point of Sale (PoS) system brings together your inventory
                    management, finance management, supply chain management, and sales
                    registry, providing seamless and efficient operation for your businesses.
                    Beet contains a comprehensive PoS system that is designed to serve as
                    the central nervous system of your operation, allowing you to monitor
                    and control your inventory levels in real-time, optimize financial transactions,
                    streamline supply chain processes, and maintain a detailed record of sales
                    transactions.
                </Typography>

                <Typography mt={2} variant="h6">
                    This integrated approach not only enhances overall operational efficiency
                    but also provides valuable insights for strategic decision-making. By having
                    a unified system that encompasses these critical elements, your business can
                    reduce errors, improve customer satisfaction through accurate and timely transactions,
                    and gain a holistic view of their operations to foster growth and sustainability in a
                    competitive market.</Typography>

                <Button variant='contained' style={{marginTop:'50px'}}>Visit</Button>
            </Grid>
        </Grid>)} 


        {isMediumDown&& (
       <Grid container p={2}>

            <Grid item xs={12} md={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img src={pos1} width={'80%'} alt="" />
            </Grid>
            <Grid item xs={12} md={7} p={2}>
                <Typography variant="h2">
                    BEET <span style={{ color: '#b5334a' }}>POS</span>
                </Typography>
                <Typography mt={2} variant="subtitle2">
                    Beet’s Point of Sale (PoS) system brings together your inventory
                    management, finance management, supply chain management, and sales
                    registry, providing seamless and efficient operation for your businesses.
                    Beet contains a comprehensive PoS system that is designed to serve as
                    the central nervous system of your operation, allowing you to monitor
                    and control your inventory levels in real-time, optimize financial transactions,
                    streamline supply chain processes, and maintain a detailed record of sales
                    transactions.
                </Typography>

                <Typography mt={2} variant="subtitle2">
                    This integrated approach not only enhances overall operational efficiency
                    but also provides valuable insights for strategic decision-making. By having
                    a unified system that encompasses these critical elements, your business can
                    reduce errors, improve customer satisfaction through accurate and timely transactions,
                    and gain a holistic view of their operations to foster growth and sustainability in a
                    competitive market.</Typography>
                    <div style={{display:'flex',justifyContent:'center'}}>
                <Button variant='contained' style={{marginTop:'50px'}}>Visit</Button></div>
            </Grid>
        </Grid>)} 


        <Footer />

    </>
    )
}

export default PosTerminal