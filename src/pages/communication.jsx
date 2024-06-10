import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import CommunicationImg from '../assets/beet/communication.png'
import Footer from '../components/footer/Footer'



const Communication = () => {
    return (<>
        <Grid container p={2}>
              <Grid item xs={12} md={6} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                <img src={CommunicationImg} width={'70%'} alt="" />
            </Grid>


            <Grid item xs={12} md={6} p={2}>
                <Typography variant="h2">
                Beet Communication Gateway
                </Typography>
                <Typography mt={2} variant="h6">
                With Beet's user-friendly web-based Engagement Communication Gateway, businesses can seamlessly harness the power of SMS and Voice services to enhance personalized customer interactions.
                Our platform offers a range of features, including bulk messaging for promotions and notifications, reminders, voting and 2-way communication, ensuring a versatile toolkit for effective engagement. Keep your customers informed on promotions, special offers. You can expedite paper less, low cost communication through electronic invoices and receipts. 
                </Typography>

                <Typography mt={2} variant="h6">
                Enhance customer service by sending timely reminders for schedules and revisit appointments. Beet provides a comprehensive solution to streamline communication, allowing businesses to foster stronger connections with their target audience through personalized and timely messaging.</Typography>

                <Button variant='contained' style={{ marginTop: '50px' }}>Visit</Button>
            </Grid>
          

        </Grid>


        <Footer />

    </>
    )
}

export default Communication