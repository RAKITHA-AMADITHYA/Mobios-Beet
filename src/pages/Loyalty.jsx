import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import LOYALTY from '../assets/beet/LOYALTY.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Footer from '../components/footer/Footer'



const Loyalty = () => {
    return (<>
        <Grid container p={2}>
            <Grid item xs={12} md={7} p={2}>
                <Typography variant="h2">
                    BEET <span style={{ color: '#b5334a' }}> Loyalty</span>
                </Typography>
                <Typography mt={2} variant="h6">
                The significance of Beet’s loyalty program featuring multiple gratifications such as awarding points, gift vouchers, discount coupons, and utility top-ups enables your business to create a dynamic and personalized customer experience.
                Loyalty programs not only attract new customers but also retain existing ones, as individuals are more likely to choose a brand that acknowledges and appreciates their continued patronage. By offering a variety of rewards including your own rewards points’ scheme, your businesses cater to diverse customer preferences, enhancing the appeal of their loyalty initiatives. 
                </Typography>

                <Typography mt={2} variant="h6">
                Points’ accrual provides a tangible sense of progress and achievement, while gift vouchers and discount coupons offer immediate benefits, encouraging repeat transactions. Utility top-ups add practical value to customers' lives. Beet’s multi-faceted approach not only deepens customer engagement but also builds a sense of reciprocity, as individuals feel genuinely appreciated for their loyalty. In turn, businesses enjoy increased customer retention, positive brand perception, and a competitive edge in the market, showcasing the strategic importance of a well-rounded loyalty program.</Typography>

                <Button variant='contained' style={{ marginTop: '50px' }}>Visit</Button>
            </Grid>
            <Grid item xs={12} md={5} display={'flex'} justifyContent={'end'} alignItems={'center'}>
                <img src={LOYALTY} width={'70%'} alt="" />
            </Grid>

        </Grid>


        <Footer />

    </>
    )
}

export default Loyalty