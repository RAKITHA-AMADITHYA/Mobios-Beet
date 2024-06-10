import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Arpico from '../../assets/beet/Arpico.png'
import Cargeels from '../../assets/beet/Cargeels.png'
import appleAsia from '../../assets/beet/appleAsia.png'
import carnage from '../../assets/beet/carnage.png'
import customerHome from '../../assets/beet/customerHome.png'
import keels from '../../assets/beet/keels.png'
import category from '../../assets/beet/category.png'
import Groceries from '../../assets/beet/Groceries.png'
import ElectricAppliances from '../../assets/beet/ElectricAppliances.png'
import HealthBeauty from '../../assets/beet/HealthBeauty.png'
import Dining from '../../assets/beet/Dining.png'
import Mother from '../../assets/beet/Mother.png'
import Fashion from '../../assets/beet/Fashion.png'






import Footer from '../../components/footer/Footer'
import LoyaltyCard from '../../components/loyalty card/LoyaltyCard'
import CategoryCard from '../../components/category card/CategoryCard'


const CustomerHome = () => {


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
        <Grid container mt={'50px'}>


            <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img src={customerHome} width={'50%'} alt="" />
            </Grid>
            <Grid item xs={12} md={6} p={5}>
                <Typography variant="h2">
                    No more carrots !
                </Typography>
                <Typography mt={2} variant="h6">
                    Welcome to Beet, where the world of shopping meets the convenience of loyalty.
                    Beet is not just a platform; it's an immersive experience that brings together
                    a diverse array of merchants, placing their loyalty programs right at your
                    fingertips. In this digital realm, finding and supporting your favorite stores
                    has never been easier.
                </Typography>

                <Button variant='contained' style={{ marginTop: '50px' }}>Contact us</Button>
            </Grid>
        </Grid>

        {/* Groceries */}
        <Grid item xs={12} md={6} p={5}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
                <Typography variant="h3" fontWeight={400}> My Loyalty</Typography>
                <Typography variant="h6"> See your Loyalty</Typography>

            </div>

            <Grid item xs={12} display={'flex'} mt={5} gap={'50px'}>

                <LoyaltyCard image={keels} />
                <LoyaltyCard image={Cargeels} />
                <LoyaltyCard image={carnage} />
                <LoyaltyCard image={appleAsia} />
                <LoyaltyCard image={Arpico} />

            </Grid>



        </Grid>
        <div style={{ width: '100%' }}>
            <img src={category} width={'100%'} alt="" />
        </div>
        <Grid container xs={12} display={'flex'} mt={5} gap={'50px'} justifyContent={'center'}>
            <Grid item xs={12} sm={6} md={3}>
                <CategoryCard image={Groceries} title={'Groceries'} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <CategoryCard image={ElectricAppliances} title={'Electric Appliances'} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <CategoryCard image={HealthBeauty} title={'Health & Beauty'} />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <CategoryCard image={Dining} title={'Dining'} />
            </Grid>


            <Grid item xs={12} sm={6} md={3}>
                <CategoryCard image={Mother} title={'Mother & Baby care'} />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <CategoryCard image={Fashion} title={'Fashion'} />
            </Grid>









        </Grid>
        <div style={{marginTop:'50px'}}>
            <Footer />
        </div>
    </>
    )
}

export default CustomerHome