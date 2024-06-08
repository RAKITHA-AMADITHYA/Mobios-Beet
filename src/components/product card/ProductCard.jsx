import { Button, Card, Grid, Typography } from '@mui/material'
import keels from '../../assets/beet/keels.png'
import Rating from '@mui/material/Rating';
import { useState } from 'react';
const ProductCard = () => {
    const[value,setValue]=useState(4);
  return (
    <>
    <Card >
        <img src={keels} alt="" />
        <Grid p={2}>
           <Typography variant='h5' fontWeight={600}>KEELS</Typography>
           <div style={{display:'flex', justifyContent:'space-between'}}>
             <Rating name='read-only' value={value}/>
             <Button></Button>
           </div>
        </Grid>
       
    </Card>
    </>
  )
}

export default ProductCard