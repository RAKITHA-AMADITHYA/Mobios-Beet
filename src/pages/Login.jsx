import { Button, Checkbox, Grid, TextField, Typography } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import React from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import LoginImg from '../assets/beet/login.png'
import { useNavigate } from 'react-router-dom'



const Login = () => {

    const navigate =useNavigate();

    const handleCustomerDashboard = () => {
        navigate("/customer-catlogue")
        handleClose(); 
      };
    



    return (<>
        <Grid container >

            <Grid item xs={12} md={6} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                <img src={LoginImg} width={'100%'} alt="" />
            </Grid>
            <Grid item xs={12} md={6} p={10} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Typography variant="h2">
                    Sign In
                </Typography>

                <div style={{ marginTop: '10px' }}>
                    <h4>Email</h4>
                    <TextField type='text' fullWidth></TextField>
                </div>

                <div style={{ marginTop: '10px' }}>
                    <h4>Password</h4>
                    <TextField type='password' fullWidth></TextField>
                </div>
                <Grid container>
                    <Grid item md={6} display={'flex'} justifyContent={'start'} alignItem={'center'}>
                        <FormControlLabel required control={<Checkbox />} label="Rember Me" />                    </Grid>
                    <Grid item md={6} display={'flex'} justifyContent={'end'} alignItems={'center'}>
                        <Typography variant='subtitle1'>Forget Password ?</Typography>

                    </Grid>
                </Grid>
                <div>
                    <Button variant='contained' onClick={handleCustomerDashboard} style={{
                        marginTop: '50px', backgroundColor: '#3B7A57',
                        color: 'white',
                        marginTop: '50px',
                        '&:hover': {
                            backgroundColor: '#2F5C44',
                        },
                    }} fullWidth>Log In</Button></div>
            </Grid>
        </Grid>




    </>
    )
}

export default Login