import { Box, Button, ButtonBase, Card, Drawer, Fab, Grid, IconButton, List, ListItem, ListItemText, Modal, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/beet/Logo1.png';
import CloseIcon from '@mui/icons-material/Close';
import Cart from '../assets/beet/cart.png';
import merchant from '../assets/beet/merchant.png'
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'HOME', to: '/' },
    { text: 'ABOUT', to: '/aboutus' },
    { text: 'BEET FOR', to: '/director-board' },
    { text: 'MERCHANT LIST', to: '/donate' },
    { text: 'MT LOYALTY', to: '/contact-us' }
  ];
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
  };

  const handlecustomerSignup = () => {
    navigate("/customer-signup")
    handleClose(); 
  };

  const handleMerchantSignup = () => {
    navigate("/merchant-signup")
    handleClose(); 
  };
  const handleLogin = () => {
    navigate("/sign-in")
    handleClose(); 
  };

  return (
    <>
     {isMediumUp && (<div style={{ display: 'flex', padding: 10, alignItems: 'center', background: '#3B7A57', height: '12%', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <Grid container>
          <Grid item md={3}>
            <img src={logo} width={'10%'} alt="" />
          </Grid>
          <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'end', gap: 3, height: '100%', justifyContent: 'center', textAlign: 'center' }}>
            {menuItems.map((item) => (
              <Link to={item.to} key={item.text} style={{ textDecoration: 'none' }}>
                <Typography
                  variant='subtitle1'
                  sx={{
                    color: '#FFFF',
                    fontWeight: 600,
                    textDecoration: 'none',
                    mt: '10px',
                    '&:hover': {
                      textDecoration: 'underline',
                      textDecorationColor: '#ffff',
                      textDecorationThickness: '5px',
                      cursor: 'pointer',

                    }
                  }}
                >
                  {item.text}
                </Typography>
              </Link>
            ))}
          </Grid>
          <Grid item md={3} display={'flex'} justifyContent={'end'} gap={2}>
            <Link to='/sign-in'>
              <Button variant='outlined' sx={{
                color: '#FFFF',
                borderColor: '#FFFF',
                '&:hover': {
                  borderColor: '#FFFF',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }} >Login</Button></Link>
            <Link to=''>
              <Button variant='contained' sx={{
                color: '#000',
                backgroundColor: '#FFFF',
                '&:hover': {
                  backgroundColor: '#9e2b3d',
                }
              }} onClick={handleOpen}>Signup</Button></Link>

          </Grid>


        </Grid>
        <Modal open={open} onClose={handleClose} >
          <Box sx={style} >

            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <CloseIcon onClick={handleClose} />
            </div>
            <Grid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
              <Typography variant='h3'>Sign Up</Typography>
              <Typography variant='subtitle1'>Select  Your Account Type</Typography>
              <Grid container mt={'10px'} spacing={2}>
                <Grid item md={6}>
                  {/* Customer */}
                  <Card 
                  onClick={handlecustomerSignup}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: '#f0d6db',
                    p: 2,
                    flexDirection: 'column',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
                    '&:hover': {
                      bgcolor: '#e69aab',
                      '& img': {
                        transform: 'scale(1.1)',
                      },

                    },
                  }}
                  
                  >
                    <img src={Cart} width={'100%'} alt="" />
                    <Typography variant='subtitle1'>Customer</Typography>

                  </Card>
                </Grid>
                <Grid item md={6}>

                  <Card
                  onClick={handleMerchantSignup}
                  
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: '#f0d6db',
                    p: 2,
                    flexDirection: 'column',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
                    '&:hover': {
                      bgcolor: '#e69aab',
                      //   transform: 'scale(1.05)',
                      '& img': {
                        transform: 'scale(1.1)',
                      },

                    },
                  }}>
                    <img src={merchant} width={'100%'} alt="" />
                    <Typography variant='subtitle1'>Merchant</Typography>

                  </Card>
                </Grid>
              </Grid>
            </Grid>

          </Box>
        </Modal>
      </div>)}

      {isMediumDown && (<div style={{ display: 'flex', padding: 10, alignItems: 'center', height: '12%', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <Grid container>
          <Grid item xs={11}>
            <img src={logo} width={'10%'} alt="" />
          </Grid>
          <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'end', gap: 3, height: '100%', justifyContent: 'center', textAlign: 'center' }}>
            {menuItems.map((item) => (
              <Link to={item.to} key={item.text} style={{ textDecoration: 'none' }}>
                <Typography
                  variant='subtitle1'
                  sx={{
                    color: '#FFFF',
                    fontWeight: 600,
                    textDecoration: 'none',
                    mt: '10px',
                    '&:hover': {
                      textDecoration: 'underline',
                      textDecorationColor: '#ffff',
                      textDecorationThickness: '5px',
                      cursor: 'pointer',

                    }
                  }}
                >
                  {item.text}
                </Typography>
              </Link>
            ))}
          </Grid>
          {/* <Grid item md={3} display={'flex'} justifyContent={'end'} gap={2}>
            <Link to='/sign-in'>
              <Button variant='outlined' sx={{
                color: '#FFFF',
                borderColor: '#FFFF',
                '&:hover': {
                  borderColor: '#FFFF',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }} >Login</Button></Link>
            <Link to=''>
              <Button variant='contained' sx={{
                color: '#000',
                backgroundColor: '#FFFF',
                '&:hover': {
                  backgroundColor: '#9e2b3d',
                }
              }} onClick={handleOpen}>Signup</Button></Link>

          </Grid> */}

{isMediumDown && (
        <>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} style={{display:'flex',justifyContent:'end'}}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} >
            <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
            <img src={logo} width={'20%'} alt="" /></div>
            <List>
              {menuItems.map((item) => (
                <ListItem button key={item.text} component={Link} to={item.to} onClick={toggleDrawer(false)}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
            <div style={{padding:'10px'}}>
            <Button variant="outlined" onClick={handleLogin} fullWidth>Login</Button>
            </div>
            <div style={{padding:'10px'}}>
            <Button variant="contained" fullWidth onClick={handleOpen}>Signup</Button>
            </div>
          </Drawer>
        </>
      )}


        </Grid>
        <Modal open={open} onClose={handleClose} >
          <Box sx={style} >

            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <CloseIcon onClick={handleClose} />
            </div>
            <Grid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
              <Typography variant='h3'>Sign Up</Typography>
              <Typography variant='subtitle1'>Select  Your Account Type</Typography>
              <Grid container mt={'10px'} spacing={2}>
                <Grid item md={6}>
                  {/* Customer */}

                  <Grid container p={10} spacing={2}>
                    <Grid item xs={12}  >
                        <Card 
                  onClick={handlecustomerSignup}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: '#f0d6db',
                    p: 2,
                    flexDirection: 'column',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
                    '&:hover': {
                      bgcolor: '#e69aab',
                      '& img': {
                        transform: 'scale(1.1)',
                      },

                    },
                  }}
                  
                  >
                    <img src={Cart} width={'100%'} alt="" />
                    <Typography variant='subtitle1'>Customer</Typography>

                  </Card>
                    </Grid>

                    <Grid item xs={12} sx={6}>
                    <Card
                  onClick={handleMerchantSignup}
                  
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: '#f0d6db',
                    p: 2,
                    flexDirection: 'column',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
                    '&:hover': {
                      bgcolor: '#e69aab',
                      //   transform: 'scale(1.05)',
                      '& img': {
                        transform: 'scale(1.1)',
                      },

                    },
                  }}>
                    <img src={merchant} width={'100%'} alt="" />
                    <Typography variant='subtitle1'>Merchant</Typography>

                  </Card>
                    </Grid>
                  </Grid>
                
                </Grid>
               
              </Grid>
            </Grid>

          </Box>
        </Modal>
      </div>)}
    </>
  );
}

export default Header;





