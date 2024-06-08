import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import catlogue from '../../assets/beet/catlogue.png'
import Slider from 'react-slick'
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

        {/* Groceries */}
        <Grid item xs={12} md={6} p={5}>
            <Typography variant="h4">
                GROCERIES
            </Typography>

            <Grid item xs={12} display={'flex'} mt={5} gap={'50px'}>
                <ProductCard name="Keels" image={keels} />
                <ProductCard name="Cargills" image={Cargeels} />
                <ProductCard name="Arpico" image={Arpico} />  <ProductCard name="Keels" image={keels} />
                <ProductCard name="Cargills" image={Cargeels} />
                
            </Grid>



        </Grid>

         {/* FASHION */}
         <Grid item xs={12} md={6} p={5}>
            <Typography variant="h4">
                FASHION
            </Typography>

            <Grid item xs={12} display={'flex'} mt={5} gap={'50px'}>
                <ProductCard name="Carnage" image={carnage} />
                <ProductCard name="Nolimit" image={nolimit} />
                <ProductCard name="F.A.O" image={fao} /> 
                <ProductCard name="Moose" image={moose} />
                <ProductCard name="Carnage" image={carnage} />
               
            </Grid>



        </Grid>
           
 {/* ELECTRIC APPLIANCES */}
 <Grid item xs={12} md={6} p={5}>
            <Typography variant="h4">
                ELECTRIC APPLIANCES
            </Typography>

            <Grid item xs={12} display={'flex'} mt={5} gap={'50px'}>
                <ProductCard name="Camera.LK" image={cameralk} />
                <ProductCard name="iDealz" image={ideals} />
                <ProductCard name="Apple Asia" image={appleAsia} /> 
                <ProductCard name="Tecroot" image={tecRoot} />
                <ProductCard name="Camera.LK" image={cameralk} />
               
            </Grid>



        </Grid>
<Footer/>

    </>
    )
}

export default CustomerCatlogue