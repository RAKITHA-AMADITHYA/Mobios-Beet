import { Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import aboutus from '../assets/beet/aboutus.png'
import sittingman from '../assets/beet/sittingman.png'
import mobios from '../assets/beet/mobios.png'


import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Footer from '../components/footer/Footer'



const AboutUs = () => {
    const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return (<>
        {/* section 1 */}
        {isMediumUp && (
            <Grid container bgcolor={'#c4d7cd'}>
                <Grid item xs={12} md={7} p={10}>
                    <Typography variant="h2">
                        WE ARE BEET
                    </Typography>
                    <Typography mt={2} variant="h6">
                        Beet is a product of mobiOs Private Limited, an innovative and pioneering software Development Company based in Sri Lanka, has been at the forefront of delivering cutting-edge enterprise solutions for over a decade. Our flagship solutions, Mobile Marketing solution for telecommunications operators, MEDICA – the Clinical Record Management Solution, Engagement platform for TextWare Sri Lanka, stands as a testament to our commitment to innovation, excellence, and unwavering dedication to addressing the ever-evolving requirements of our valuable customers.
                    </Typography>

                    <Typography mt={2} variant="h6">
                        With Beet's Delivery Tracking System, businesses can optimize their delivery processes, enhance customer satisfaction, and ensure a transparent and reliable delivery experience for both the business and its customers.</Typography>

                    <Button variant='contained' style={{ marginTop: '50px' }}>Contact us</Button>
                </Grid>
                <Grid item xs={12} md={5} display={'flex'} justifyContent={'end'} alignItems={'end'}>
                    <img src={aboutus} width={'100%'} alt="" />
                </Grid>

            </Grid>)}

        {isMediumDown && (
            <Grid container bgcolor={'#c4d7cd'}>


                <Grid item xs={12} md={7} p={2}>
                    <Typography variant="h3">
                        WE ARE BEET
                    </Typography>
                    <Typography mt={2} variant="p">
                        Beet is a product of mobiOs Private Limited, an innovative and pioneering software Development Company based in Sri Lanka, has been at the forefront of delivering cutting-edge enterprise solutions for over a decade. Our flagship solutions, Mobile Marketing solution for telecommunications operators, MEDICA – the Clinical Record Management Solution, Engagement platform for TextWare Sri Lanka, stands as a testament to our commitment to innovation, excellence, and unwavering dedication to addressing the ever-evolving requirements of our valuable customers.
                    </Typography>

                    <Typography mt={2} variant="p">
                        With Beet's Delivery Tracking System, businesses can optimize their delivery processes, enhance customer satisfaction, and ensure a transparent and reliable delivery experience for both the business and its customers.</Typography>

                    {/*  */}
                </Grid>
                <Grid item xs={12} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <div></div>
                    <Button variant='contained' style={{ marginTop: '50px' }}>Contact us</Button>
                    <img src={aboutus} width={'50%'} alt="" />
                </Grid>

            </Grid>)}


        {/* Section 2 */}
        {isMediumUp && (
            <Grid container p={2} >

                <Grid item xs={12} md={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <img src={sittingman} width={'50%'} alt="" />
                </Grid>
                <Grid item xs={12} md={7} p={2}>
                    <img src={mobios} width={'20%'} alt="" />

                    <Typography variant="h4" mt={'10px'}>
                        About MobiOs                </Typography>
                    <Typography mt={2} variant="h6">
                        mobiOs Private Limited was founded in 2012 with a singular mission: to leverage the latest technologies in software development to create solutions that redefine industry standards and empower businesses to thrive in the digital age. With a focus on crafting innovative, high-quality software, we have established ourselves as a leading player in the field, delivering exceptional results to clients across diverse industries.
                    </Typography>

                    <Typography variant="h4" mt={'10px'}>
                        Our Global Reach              </Typography>
                    <Typography mt={2} variant="h6">
                        mobiOs has transcended geographical boundaries, and our solutions have left a mark in countries such as Japan, Bangladesh, Myanmar, Maldives, and Malaysia. Our enterprise solutions have been adopted by a wide array of industries, including healthcare, finance, education, and more. We take immense pride in the positive impact we've made in these regions, transforming the way businesses operate and enhancing their competitiveness on a global scale.
                    </Typography>



                </Grid>


            </Grid>)}

        {isMediumDown && (
            <Grid container p={2} >

                <Grid item xs={12} md={5} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <img src={sittingman} width={'50%'} alt="" />
                    <img src={mobios} width={'40%'} alt="" />
                </Grid>
                <Grid item xs={12} md={7} p={2}>


                    <Typography variant="h4" mt={'10px'}>
                        About MobiOs
                    </Typography>
                    <Typography mt={2} variant="subtitle2">
                        mobiOs Private Limited was founded in 2012 with a singular mission: to leverage the latest technologies in software development to create solutions that redefine industry standards and empower businesses to thrive in the digital age. With a focus on crafting innovative, high-quality software, we have established ourselves as a leading player in the field, delivering exceptional results to clients across diverse industries.
                    </Typography>

                    <Typography variant="h4" mt={'10px'}>
                        Our Global Reach              </Typography>
                    <Typography mt={2} variant="subtitle2">
                        mobiOs has transcended geographical boundaries, and our solutions have left a mark in countries such as Japan, Bangladesh, Myanmar, Maldives, and Malaysia. Our enterprise solutions have been adopted by a wide array of industries, including healthcare, finance, education, and more. We take immense pride in the positive impact we've made in these regions, transforming the way businesses operate and enhancing their competitiveness on a global scale.
                    </Typography>



                </Grid>


            </Grid>)}

        {isMediumUp && (
            <Grid item p={10}>
                <Typography variant='h4'>Our Global Reach</Typography>
                <Typography variant='h6' mt={2}>
                    At mobiOs, innovation is the cornerstone of our identity. We remain dedicated to staying at the forefront of technology trends and industry best practices. By consistently adapting to the latest advancements in the software development landscape, we equip our clients with solutions that are both future-proof and competitive.
                    As a testament to our commitment to quality, mobiOs is recognized for its exceptional standards of service and dedication to excellence in every project we undertake

                </Typography>
                <Typography variant='h6' mt={2}>
                    mobiOs Private Limited is not just a software development company; it's a catalyst for transformation, a champion of innovation, and a partner in success. With a track record of delivering exceptional solutions across multiple industries, we continue to set new benchmarks for excellence. We invite you to join us on our journey of reshaping industries, unlocking potential, and embracing the limitless possibilities of technology. Together, we can redefine the future.

                </Typography>

            </Grid>)}

            {isMediumDown && (
            <Grid item p={3}>
                <Typography variant='h4'>Our Commitment to Innovation</Typography>
                <Typography variant='subtitle2' mt={2}>
                    At mobiOs, innovation is the cornerstone of our identity. We remain dedicated to staying at the forefront of technology trends and industry best practices. By consistently adapting to the latest advancements in the software development landscape, we equip our clients with solutions that are both future-proof and competitive.
                    As a testament to our commitment to quality, mobiOs is recognized for its exceptional standards of service and dedication to excellence in every project we undertake

                </Typography>
                <Typography variant='subtitle2' mt={2}>
                    mobiOs Private Limited is not just a software development company; it's a catalyst for transformation, a champion of innovation, and a partner in success. With a track record of delivering exceptional solutions across multiple industries, we continue to set new benchmarks for excellence. We invite you to join us on our journey of reshaping industries, unlocking potential, and embracing the limitless possibilities of technology. Together, we can redefine the future.

                </Typography>

            </Grid>)}


        <Footer />

    </>
    )
}

export default AboutUs