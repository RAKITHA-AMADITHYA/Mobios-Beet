import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProductDescriptioon = ({image,title,content,parth,btnMt}) => {


  const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(parth)
    handleClose();
};

  return (<>
   {isMediumUp &&( <Box
      sx={{
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Adjust the shadow as needed
        backgroundColor: '#F0F0F0', // Optional: set a background color
        padding:'10px'
        ,minHeight:'550px',
        maxHeight:'550px'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', background: '#ecccd2', padding: '20px', borderRadius: '30px',minHeight:'170px',maxHeight:'170px' }}>
        <img src={image} width={'35%'} alt="" /></div>
      <Grid item p={4}>
        <Grid item display={'flex'} justifyContent={'center'}>
        <Typography variant='h5'fontWeight={800} textAlign={'center'}>{title}</Typography>
        </Grid>
        <Typography variant='subtitle1' textAlign={'center'} mt={2}>{content}</Typography>
      </Grid>
      <div style={{display:'flex',justifyContent:'center',padding:'10px',marginTop:btnMt}}>
        <Button variant='contained' onClick={handleNavigate}>Learn More</Button>
      </div>
    </Box>)}
    {isMediumDown &&( <Box
      sx={{
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Adjust the shadow as needed
        backgroundColor: '#F0F0F0', // Optional: set a background color
        padding:'10px'
       
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', background: '#ecccd2', padding: '20px', borderRadius: '30px',minHeight:'170px',maxHeight:'170px' }}>
        <img src={image} width={'35%'} alt="" /></div>
      <Grid item p={4}>
        <Grid item display={'flex'} justifyContent={'center'}>
        <Typography variant='h5'fontWeight={800} textAlign={'center'}>{title}</Typography>
        </Grid>
        <Typography variant='subtitle1' textAlign={'center'} mt={2}>{content}</Typography>
      </Grid>
      <div style={{display:'flex',justifyContent:'center',padding:'10px'}}>
        <Button variant='contained' onClick={handleNavigate}>Learn More</Button>
      </div>
    </Box>)}  
    </>
  )
}

export default ProductDescriptioon