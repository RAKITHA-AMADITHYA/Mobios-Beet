import { Button, Card, Grid, Typography, useMediaQuery } from '@mui/material'
import Rating from '@mui/material/Rating';
import { useState } from 'react';
const ProductCard = ({image,name}) => {
    const[value,setValue]=useState(4);

    const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (


    <>
   {isMediumUp &&( <Card style={{background:'#EFEFEF',margin:10}} >
    <div style={{display:'flex',justifyContent:'center'}}>
        <img src={image} style={{minWidth:'100%',maxWidth:'100%',minHeight:'290px',maxHeight:'290px'}} alt="" /></div>
        <Grid p={2}>
           <Typography variant='h5' fontWeight={600}>{name}</Typography>
           <div style={{display:'flex', justifyContent:'space-between'}}>
             <Rating name='read-only' value={value}/>
             <Button variant='contained'>ADD</Button>
           </div>
        </Grid>
       
    </Card>)}

    {isMediumDown &&( <Card >
        <img src={image}  alt="" />
        <Grid p={1}>
           <Typography variant='subtitle1' fontWeight={600}>{name}</Typography>
           <div style={{display:'flex', justifyContent:'space-between'}}>
             <Rating name='read-only' value={value}/>
             
           </div>
           <div style={{marginTop:'15px'}}>
           <Button variant='contained'fullWidth >ADD</Button></div>
        </Grid>
       
    </Card>)}
    </>
  )
}

export default ProductCard