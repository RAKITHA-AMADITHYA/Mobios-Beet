import { Grid, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import catlogue from '../../assets/beet/catlogue.png'
import SearchIcon from '@mui/icons-material/Search';
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import ProductCard from '../../components/product card/ProductCard'
import keels from '../../assets/beet/keels.png'
import Cargeels from '../../assets/beet/Cargeels.png'
import Arpico from '../../assets/beet/Arpico.png'
import carnage from '../../assets/beet/carnage.png'
import nolimit from '../../assets/beet/nolimit.png'
import fao from '../../assets/beet/fao.png'
import moose from '../../assets/beet/moose.png'
import cameralk from '../../assets/beet/cameralk.png'
import ideals from '../../assets/beet/ideals.png'
import appleAsia from '../../assets/beet/appleAsia.png'
import tecRoot from '../../assets/beet/tecRoot.png'
import Footer from '../../components/footer/Footer'
import BeetSearchFeild from '../../components/beet search txtFeild/BeetSearchFeild';
import Slider from 'react-slick';


const CustomerCatlogue = () => {


    const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));


    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // 3 seconds
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (<>
        {isMediumUp && (
            <div>
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

                        <BeetSearchFeild />
                    </Grid>
                    <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <img src={catlogue} width={'90%'} alt="" />
                    </Grid>
                </Grid>

                {/* Groceries */}
                <Grid item xs={12} md={6} p={5}>
                    <Typography variant="h4">
                        GROCERIES
                    </Typography>

                    <div style={{ marginTop: '20px' }}>
                        <Slider {...sliderSettings} >
                            <ProductCard name="Keels" image={keels} />
                            <ProductCard name="Cargills" image={Cargeels} />
                            <ProductCard name="Arpico" image={Arpico} />  <ProductCard name="Keels" image={keels} />
                            <ProductCard name="Cargills" image={Cargeels} />


                        </Slider></div>



                </Grid>

                {/* FASHION */}
                <Grid item xs={12} md={6} p={5}>
                    <Typography variant="h4">
                        FASHION
                    </Typography>

                     <div style={{ marginTop: '20px' }}>
                        <Slider {...sliderSettings} >
                        <ProductCard name="Carnage" image={carnage} />
                        <ProductCard name="Nolimit" image={nolimit} />
                        <ProductCard name="F.A.O" image={fao} />
                        <ProductCard name="Moose" image={moose} />
                        <ProductCard name="Carnage" image={nolimit} />

                        </Slider></div>



                </Grid>

                {/* ELECTRIC APPLIANCES */}
                <Grid item xs={12} md={6} p={5}>
                    <Typography variant="h4">
                        ELECTRIC APPLIANCES
                    </Typography>


<div style={{ marginTop: '20px' }}>
                        <Slider {...sliderSettings} >
                        <ProductCard name="Camera.LK" image={cameralk} />
                        <ProductCard name="iDealz" image={ideals} />
                        <ProductCard name="Apple Asia" image={appleAsia} />
                        <ProductCard name="Tecroot" image={tecRoot} />
                        <ProductCard name="Camera.LK" image={ideals} />


                        </Slider></div>



                </Grid>

            </div>)}

        {isMediumDown && (
            <div>
                <Grid container>
                    <Grid item xs={12} p={2}>
                        <Typography variant="h2">
                            BEET <span style={{ color: '#b5334a' }}>PARTNERS</span>
                        </Typography></Grid>
                    <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <img src={catlogue} width={'100%'} alt="" />
                    </Grid>
                    <Grid item xs={12} p={2} textAlign={'center'}>

                        <Typography mt={2} variant="subtitle2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam.r incididunt
                            ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam.r incididunt
                            ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam.
                        </Typography>

                        <BeetSearchFeild />
                    </Grid>

                </Grid>

                {/* Groceries */}
                <Grid item xs={12} md={6} p={2}>
                    <Typography variant="h4">
                        GROCERIES
                    </Typography>

                    <Grid container sx={{
                        display: 'flex', overflowX: 'scroll', flexWrap: 'nowrap', scrollbarWidth: 'none', // For Firefox
                        '&::-webkit-scrollbar': {
                            display: 'none', // For Chrome, Safari, and Opera
                        },
                    }} spacing={2}>
                        <Grid item xs={6} display={'flex'} mt={5} gap={'50px'}>
                            <ProductCard name="Keels" image={keels} />
                        </Grid>
                        <Grid item xs={6} display={'flex'} mt={5} gap={'50px'}>
                            <ProductCard name="Cargills" image={Cargeels} />
                        </Grid>

                        <Grid item xs={6} display={'flex'} mt={5} gap={'50px'}>
                            <ProductCard name="Arpico" image={Arpico} />
                        </Grid>

                        <Grid item xs={6} display={'flex'} mt={5} gap={'50px'}>
                            <ProductCard name="Cargills" image={keels} />
                        </Grid>


                    </Grid>



                </Grid>

                {/* FASHION */}
                <Grid item xs={12} md={6} p={2}>
                    <Typography variant="h4">
                        FASHION
                    </Typography>

                    <Grid container sx={{
                        display: 'flex', overflowX: 'scroll', flexWrap: 'nowrap', scrollbarWidth: 'none', // For Firefox
                        '&::-webkit-scrollbar': {
                            display: 'none', // For Chrome, Safari, and Opera
                        },
                    }} spacing={2}>
                        <Grid item xs={6} display={'flex'} mt={5} gap={'50px'}>
                            <ProductCard name="Keels" image={carnage} />
                        </Grid>
                        <Grid item xs={6} display={'flex'} mt={5} gap={'50px'}>
                            <ProductCard name="Cargills" image={nolimit} />
                        </Grid>

                        <Grid item xs={6} display={'flex'} mt={5} gap={'50px'}>
                            <ProductCard name="Arpico" image={fao} />
                        </Grid>

                        <Grid item xs={6} display={'flex'} mt={5} gap={'50px'}>
                            <ProductCard name="Cargills" image={moose} />
                        </Grid>


                    </Grid>


                </Grid>

                {/* ELECTRIC APPLIANCES */}
                <Grid item xs={12} md={6} p={2}>

                    <Typography variant="h4">
                        ELECTRIC APPLIANCES
                    </Typography>


                    <Grid container sx={{
                        display: 'flex', overflowX: 'scroll', flexWrap: 'nowrap', scrollbarWidth: 'none', // For Firefox
                        '&::-webkit-scrollbar': {
                            display: 'none', // For Chrome, Safari, and Opera
                        },
                    }} spacing={2}>
                        <Grid item xs={6} display={'flex'} mt={5} gap={'50px'}>
                            <ProductCard name="Keels" image={cameralk} />
                        </Grid>
                        <Grid item xs={6} display={'flex'} mt={5} gap={'50px'}>
                            <ProductCard name="Cargills" image={appleAsia} />
                        </Grid>

                        <Grid item xs={6} display={'flex'} mt={5} gap={'50px'}>
                            <ProductCard name="Arpico" image={tecRoot} />
                        </Grid>




                    </Grid>

                </Grid>

            </div>)}
        <Footer />

    </>
    )
}

export default CustomerCatlogue