import { Box, Button, Card, Drawer, Grid, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Modal, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/beet/Logo1.png';
import CloseIcon from '@mui/icons-material/Close';
import Cart from '../assets/beet/cus1.png';
import merchant from '../assets/beet/mer1`.png';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path) => {
    setAnchorEl(null);
    if (path) {
      navigate(path);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'HOME', to: '/' },
    { text: 'ABOUT', to: '/aboutus' },
    { text: 'BEET FOR', to: '#' },
    { text: 'MERCHANT LIST', to: '/donate' },
    { text: 'MT LOYALTY', to: '/contact-us' },
    { text: 'CONTACT US', to: '/contact-us' }

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
    navigate("/customer-signup");
    handleClose();
  };

  const handleMerchantSignup = () => {
    navigate("/merchant-signup");
    handleClose();
  };

  const handleLogin = () => {
    navigate("/sign-in");
    handleClose();
  };

  return (
    <>
      {isMediumUp && (
        <div style={{ display: 'flex', padding: 10, alignItems: 'center', background: '#1A8148', height: '12%', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <Grid container>
            <Grid item md={3}>
              <img src={logo} width={'10%'} alt="" />
            </Grid>
            <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'CENTER', gap: 3, height: '100%', justifyContent: 'center', textAlign: 'center' }}>
              {menuItems.map((item) =>
                item.text === 'BEET FOR' ? (
                  <div key={item.text} style={{ position: 'relative' }}>
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
                       , fontSize: {
                          md: '12px',  // Medium screens
                          lg: '18px',  // Large screens
                          xl: '20px',  // Extra-large screens
                        },
                      }}
                      
                      aria-controls="beet-for-menu"
                      aria-haspopup="true"
                      onClick={handleMenuOpen}
                    >
                      {item.text}
                    </Typography>
                    <Menu
                      id="beet-for-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={() => handleMenuClose()}
                    >
                      <MenuItem onClick={() => handleMenuClose('/customer-home')}>Customers</MenuItem>
                      <MenuItem onClick={() => handleMenuClose('/merchant-home')}>Merchants</MenuItem>
                    </Menu>
                  </div>
                ) : (
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
                        },
                        fontSize: {
                          md: '12px',  // Medium screens
                          lg: '18px',  // Large screens
                          xl: '20px',  // Extra-large screens
                        },
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Link>
                )
              )}
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
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <div style={{ display: 'flex', justifyContent: 'end' }}>
                <CloseIcon onClick={handleClose} />
              </div>
              <Grid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
                <Typography variant='h3'>Sign Up</Typography>
                <Typography variant='subtitle1'>Select Your Account Type</Typography>
                <Grid container mt={'10px'} spacing={2}>
                  <Grid item md={6}>
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
                          '& img': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                    >
                      <img src={merchant} width={'100%'} alt="" />
                      <Typography variant='subtitle1'>Merchant</Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </div>
      )}

      {isMediumDown && (
        <div style={{ display: 'flex', padding: 10, alignItems: 'center', height: '12%', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <Grid container>
            <Grid item xs={11}>
              <img src={logo} width={'6%'} alt="" />
            </Grid>
            <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'end', gap: 3, height: '100%', justifyContent: 'center', textAlign: 'center' }}>
              {menuItems.map((item) =>
                item.text === 'BEET FOR' ? (
                  <div key={item.text} style={{ position: 'relative' }}>
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
                      aria-controls="beet-for-menu"
                      aria-haspopup="true"
                      onClick={handleMenuOpen}
                    >
                      {item.text}
                    </Typography>
                    <Menu
                      id="beet-for-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={() => handleMenuClose()}
                    >
                      <MenuItem onClick={() => handleMenuClose('/customer-home')}>Customers</MenuItem>
                      <MenuItem onClick={() => handleMenuClose('/merchant-home')}>Merchants</MenuItem>
                    </Menu>
                  </div>
                ) : (
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
                )
              )}
            </Grid>
            <Grid item xs={1} display={'flex'} justifyContent={'end'}>
              <IconButton color='primary' onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor={'right'} open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }}>
                  <List>
                    <ListItem>
                      <IconButton color="inherit" onClick={toggleDrawer(false)}>
                        <CloseIcon />
                      </IconButton>
                    </ListItem>
                    {menuItems.map((item) =>
                      item.text === 'BEET FOR' ? (
                        <div key={item.text}>
                          <ListItem button aria-controls="beet-for-menu" aria-haspopup="true" onClick={handleMenuOpen}>
                            <ListItemText primary={item.text} />
                          </ListItem>
                          <Menu
                            id="beet-for-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => handleMenuClose()}
                          >
                            <MenuItem onClick={() => handleMenuClose('/customer-home')}>Customers</MenuItem>
                            <MenuItem onClick={() => handleMenuClose('/merchant-home')}>Merchants</MenuItem>
                          </Menu>
                        </div>
                      ) : (
                        <ListItem button key={item.text} component={Link} to={item.to}>
                          <ListItemText primary={item.text} />
                        </ListItem>
                      )
                    )}
                  </List>
                </Box>
              </Drawer>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

export default Header;
