import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import catlogue from '../../assets/beet/catlogue.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import ProductCard from '../../components/product card/ProductCard'

const CustomerCatlogue = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (<>
        <Grid container>
            <Grid item xs={12} md={6} p={5}>
                <Typography variant="h2">
                    BEET <span style={{ color: '#b5334a' }}>PARTNERS</span>
                </Typography>
                <Typography mt={2} variant="h6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam.r incididunt
                    ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam.r incididunt
                    ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam.
                </Typography>

                <TextField sx={{ marginTop: '50px', width: '100%' }} placeholder='Search shop'></TextField>
            </Grid>
            <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img src={catlogue} alt="" />
            </Grid>
        </Grid>


        <Grid item xs={12} md={6} p={5}>
            <Typography variant="h4">
                GROCERIES
            </Typography>
        </Grid>
    <Grid item xs={12} display={'flex'} p={5} gap={'50px'}>
<ProductCard/>
<ProductCard/>

<ProductCard/>
<ProductCard/>
<ProductCard/>


    </Grid>

    </>
    )
}

export default CustomerCatlogue