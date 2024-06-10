import { Card, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

const CategoryCard = ({ image, title }) => {

  const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <>
    {isMediumUp &&(  <Card  sx={{background:'#F2F2F2', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', padding: 2 }}>
        <img src={image} style={{minWidth:'150px',maxWidth:'150px',minHeight:'150px',maxHeight:'150px'}} alt={title} />
        <Typography variant='h5'>{title}</Typography>
      </Card>)}

      {isMediumDown &&(    <Card 
      sx={{
        background: '#F2F2F2',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '130px',
        padding: 2
      }}
    >
        <img src={image} width={'40%'}  alt={title} />
        <Typography variant='p'>{title}</Typography>
      </Card>)}
    </>
  );
}

export default CategoryCard;
