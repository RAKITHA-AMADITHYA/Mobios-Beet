import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

const BeetSearchFeild = () => {
  return (
   <>
     <TextField
      placeholder="Search shop"
      type="text"
      fullWidth
      sx={{
        marginTop: '30px',
        '& .MuiInputBase-root': {
          height: '40px', // Adjust the height as needed
        },
        '& .MuiInputBase-input': {
          padding: '8px', // Adjust the padding to reduce the height
          fontSize: '14px', // Adjust the font size as needed
        }
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
   </>
  )
}

export default BeetSearchFeild