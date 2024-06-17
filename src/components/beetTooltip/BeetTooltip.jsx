import { Tooltip } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BeetTooltip = ({ placement, top, left, width, height,path,title ,description,color,title2 }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path); 
  };

  return (
    <>
      <Tooltip
      
        title={
          <div style={{ fontSize: '15px', color: '#000' }}>

       
            <span style={{ color: '#b53355' }}>     {title}</span> {title2}
            <div style={{ marginTop: '10px', fontSize: '14px', color: '#929292' }}>
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. */}
       {description}
            </div>
          </div>
        }
        placement={placement}  //Top, Right, Bottom, Left
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor:color, // Set the background color of the tooltip
              fontSize: '14px', // Set the font size inside the tooltip
              '& .MuiTooltip-tooltip': {
                fontSize: '50px', // Set the font size of the tooltip content
              },
            },
          },
        }}
      >
        <div 
          style={{ position: 'absolute', top: top, left: left, width: width, height: height, cursor: 'pointer' }}
          onClick={handleClick}
        />
      </Tooltip>
    </>
  )
}

export default BeetTooltip
