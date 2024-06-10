import { Card, Typography } from '@mui/material';
import React from 'react';

const CategoryCard = ({ image, title }) => {
  return (
    <>
      <Card  sx={{background:'#F2F2F2', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', padding: 2 }}>
        <img src={image} style={{minWidth:'150px',maxWidth:'150px',minHeight:'150px',maxHeight:'150px'}} alt={title} />
        <Typography variant='h5'>{title}</Typography>
      </Card>
    </>
  );
}

export default CategoryCard;
