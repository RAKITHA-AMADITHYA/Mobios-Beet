import { Button, Card, Grid, Typography } from '@mui/material'
import Rating from '@mui/material/Rating';
import { useState } from 'react';
const LoyaltyCard = ({image,name}) => {
    const[value,setValue]=useState(4);
  return (
    <>
    <Card >
        <img src={image} style={{minWidth:'255px',maxWidth:'255px',minHeight:'290px',maxHeight:'290px'}} alt="" />
        <Grid p={2}>
          
           <div style={{display:'flex', justifyContent:'center'}}>
             
             <Button variant='contained'  fullWidth>Visit</Button>
           </div>
        </Grid>
       
    </Card>
    </>
  )
}

export default LoyaltyCard