import { Button, Card, Grid, Typography, useMediaQuery } from '@mui/material'
import Rating from '@mui/material/Rating';
import { useState } from 'react';
const LoyaltyCard = ({image,name}) => {
    const[value,setValue]=useState(4);
    const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <>
   {isMediumUp &&( <Card style={{margin:10}} >
    <div style={{display:'flex',justifyContent:'center'}}>
        <img src={image} style={{minHeight:'290px',maxHeight:'290px',width:'100%'}} alt="" /></div>
        <Grid p={2}>
          
           <div style={{display:'flex', justifyContent:'center'}}>
             
             <Button variant='contained'  fullWidth>Visit</Button>
           </div>
        </Grid>
       
    </Card>)}

    {isMediumDown &&( <Card >
        <img src={image}  alt="" />
        <Grid p={2}>
          
           <div style={{display:'flex', justifyContent:'center'}}>
             
             <Button variant='contained'  fullWidth>Visit</Button>
           </div>
        </Grid>
       
    </Card>)}
    </>
  )
}

export default LoyaltyCard