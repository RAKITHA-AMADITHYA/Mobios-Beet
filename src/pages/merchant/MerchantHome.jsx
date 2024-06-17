import { Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import merchant from '../../assets/beet/shop.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Footer from '../../components/footer/Footer'
import ProductDescriptioon from '../../components/product description card/ProductDescription'
import pos from "../../assets/beet/pos4.png"
import loyalty from "../../assets/beet/loyalty3.png"
import messege from "../../assets/beet/messeege2.png"
import delivary from "../../assets/beet/delevary1.png"




const MerchantHome = () => {


    const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return (<>
        {isMediumUp && (
            <div>   <Grid container p={2}>
                <Grid item xs={12} md={7} p={2}>
                    <Typography variant="h2">
                        Let’s Beet it
                    </Typography>
                    <Typography mt={2} variant="h5">
                        Beet serves as a comprehensive platform designed to oversee both your product and customer lifecycle. Starting from onboarding suppliers, we offer multiple modules to facilitate supply chain management, stock and inventory control, a comprehensive POS system for sales management and a comprehensive module for financial reconciliations.
                    </Typography>

                    <Typography mt={2} variant="h5">
                        Additionally, the customer management modules contain features such as sales history,
                        loyalty programs, rewards, a booking system and a delivery module to be used when required
                        . Moreover, our unified analytics dashboard is included to provide a comprehensive overview
                        of your business operations. All of these services can be obtained with a single sing in and
                        selecting only the modules that you require to run your business.
                    </Typography>

                </Grid>
                <Grid item xs={12} md={5} display={'flex'} justifyContent={'center'} alignItems={'start'}>
                    <img src={merchant} width={'100%'} alt="" />
                </Grid>

            </Grid>

                <div style={{display:'flex',justifyContent:'center'}}>
                 <h1>Product description</h1>
                </div>

                <Grid container p={2} spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <ProductDescriptioon image={pos} title={"Beet POS"} content={"Beet’s Point of Sale (PoS) system brings together your inventory management, finance management, supply chain management, and sales registry, providing seamless and efficient operation for your businesses"} parth={'/beet-pos'} btnMt={'22px'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ProductDescriptioon image={loyalty} title={"Beet Loyalty"} content={"The significance of Beet’s loyalty program featuring multiple gratifications such as awarding points, gift vouchers, discount coupons, and utility top-ups enables your business to create a dynamic and personalized customer experience."} parth={'/beet-loyalty'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ProductDescriptioon image={messege} title={"Beet messaging gateway"} content={"With Beet's user-friendly web-based Engagement Communication Gateway, businesses can seamlessly harness the power of SMS and Voice services to enhance personalized customer interactions."} parth={'/beet-communication'} btnMt={'22px'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ProductDescriptioon image={delivary} title={"Beet Delivery"} content={"Beet Delivery Tracking System is a powerful tool for businesses reliant on home delivery services."} parth={'/beet-tracking'} btnMt={'120px'}/>
                    </Grid>
                </Grid>

            </div>

        )}

        {isMediumDown && (
            <Grid container p={2}>
                <Grid item xs={12} md={5} display={'flex'} justifyContent={'end'} alignItems={'center'}>
                    <img src={merchant} width={'100%'} alt="" />
                </Grid>
                <Grid item xs={12} md={7} p={2}>
                    <Typography variant="h2">
                        Let’s Beet it
                    </Typography>
                    <Typography mt={2} variant="subtitle2">
                        Beet serves as a comprehensive platform designed to oversee both your product and customer lifecycle. Starting from onboarding suppliers, we offer multiple modules to facilitate supply chain management, stock and inventory control, a comprehensive POS system for sales management and a comprehensive module for financial reconciliations.
                    </Typography>

                    <Typography mt={2} variant="subtitle2">
                        Additionally, the customer management modules contain features such as sales history, loyalty programs, rewards, a booking system and a delivery module to be used when required.
                        Moreover, our unified analytics dashboard is included to provide a comprehensive overview
                        of your business operations. All of these services can be obtained with a single sing in and
                        selecting only the modules that you require to run your business.</Typography>


                </Grid>

                <div style={{display:'flex',justifyContent:'center'}}>
                 <h1>Product description</h1>
                </div>

                <Grid container p={2} spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <ProductDescriptioon image={pos} title={"Beet POS"} content={"Beet’s Point of Sale (PoS) system brings together your inventory management, finance management, supply chain management, and sales registry, providing seamless and efficient operation for your businesses"} parth={'/beet-pos'} btnMt={'22px'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ProductDescriptioon image={loyalty} title={"Beet Loyalty"} content={"The significance of Beet’s loyalty program featuring multiple gratifications such as awarding points, gift vouchers, discount coupons, and utility top-ups enables your business to create a dynamic and personalized customer experience."} parth={'/beet-loyalty'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ProductDescriptioon image={messege} title={"Beet messaging gateway"} content={"With Beet's user-friendly web-based Engagement Communication Gateway, businesses can seamlessly harness the power of SMS and Voice services to enhance personalized customer interactions."} parth={'/beet-communication'} btnMt={'22px'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ProductDescriptioon image={delivary} title={"Beet Delivery"} content={"Beet Delivery Tracking System is a powerful tool for businesses reliant on home delivery services."} parth={'/beet-tracking'} btnMt={'120px'}/>
                    </Grid>
                </Grid>


            </Grid>)}




        <Footer />

    </>
    )
}

export default MerchantHome