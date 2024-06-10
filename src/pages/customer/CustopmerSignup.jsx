import { Button, Checkbox, Grid, TextField, Typography } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import React from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import SignupImg from '../../assets/beet/signup.png'
import { useNavigate } from 'react-router-dom'



const CustomerSignup = () => {


    const navigate =useNavigate();

    const handlelogin = () => {
        navigate("/sign-in")
        handleClose(); 
      };
    


    return (<>
        <Grid container >

            <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <img src={SignupImg} width={'80%'} alt="" />

            </Grid>
            <Grid item xs={12} md={6} p={10} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Typography variant="h2">
                    Welcome To <span style={{ color: '#b5334a' }}> BEET</span>                </Typography>
                <Typography variant="h6" mt={1}>Sign Up for Customers</Typography>
                <div style={{ marginTop: '30px' }}>
                    <h4>Enter your Email</h4>
                    <TextField type='text' fullWidth></TextField>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <h4>Enter your Name</h4>
                    <TextField type='text' fullWidth></TextField>
                </div>


                <Grid container spacing={2}>
                    <Grid item md={6} >
                        <div style={{ marginTop: '30px' }}>
                            <h4>Enter Number</h4>
                            <TextField type='number' fullWidth></TextField>
                        </div>

                    </Grid>

                    <Grid item md={6} >
                        <div style={{ marginTop: '30px' }}>
                            <h4>Enter Password</h4>
                            <TextField type='password' fullWidth></TextField>
                        </div>

                    </Grid>
                </Grid>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop:'10px'}}>
                    <FormControlLabel required control={<Checkbox />} label="I agree to Terms & Conditions " /></div>
                    <Button onClick={handlelogin} variant='contained' style={{ marginTop: '10px' }} fullWidth>Sign Up</Button>
            </Grid>
        </Grid>




    </>
    )
}

export default CustomerSignup