import { Button, Grid, Typography, Modal, Box, Card, useMediaQuery, Tooltip } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import land from '../assets/beet/lpageImg.png';
import Footer from '../components/footer/Footer';
import CloseIcon from '@mui/icons-material/Close';
import Cart from '../assets/beet/cart.png';
import merchant from '../assets/beet/merchant.png';
import Map from '../assets/beet/map';
import BeetTooltip from '../components/beetTooltip/BeetTooltip';

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

const LandingPg = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {isMediumUp && (
        <div style={{ position: 'relative' }}>
          <Grid item p={5}>
            <Typography variant='h3' fontWeight={800} fontSize={'50px'} sx={{
              fontSize: {
                md: '16px',  // Medium screens
                lg: '30px',  // Large screens
                xl: '20px',  // Extra-large screens
              },
            }}>
              Manage your<span style={{ color: '#b5334a' }}> Suppliers, Inventory, Stocks, Sales,<br /> Customer Loyalty, Finance reports</span> <br />and <span style={{ color: '#b5334a' }}>Delivery</span> on <br />one platform.
            </Typography>
          </Grid>
          <Grid item p={2} display={'flex'} justifyContent={'center'} mt={-18}>
            <img src={land} alt="" width={'800px'} useMap="#workmap" style={{ position: 'relative' }} />
            <map name="workmap">

              {/* Warerhouse */}
              <BeetTooltip placement="top" top="290px" left="380px" width="153px" height="160px"  title="Beet" title2={'For'}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."}
              color={"#EDE6E6"}
              />
              {/* Shop */}
              <BeetTooltip placement="top" top="200px" left="624px" width="120px" height="145px" title="Beet" title2={'For'}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."}
              color={"#EDE6E6"}/>

              {/* delivary */}
              <BeetTooltip placement="left" top="370px" left="700px" width="152px" height="180px" title="Beet" title2={'For'}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."}
              color={"#EDE6E6"} />

              {/* Customer */}
              <BeetTooltip placement="right" top="270px" left="900px" width="152px" height="180px" title="Beet" title2={'For'}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."}
              color={"#EDE6E6"} />

              {/* Contact us */}
              <BeetTooltip placement="right" top="530px" left="1010px" width="152px" height="40px" path={"/contact-us"}
              color={"transparent"} p/>

              
            </map>
          </Grid>
        </div>
      )}
      {isMediumDown && (
        <Grid container>
          <Grid item xs={12} md={6} p={2}>
            <Typography variant="h3" data-aos-anchor-placement="top-bottom">
              WELCOME TO <span style={{ color: '#b5334a' }}>BEET</span>
            </Typography>
            <Typography mt={2} variant="subtitle1" fontWeight={400} data-aos-anchor-placement="top-bottom">
              The Beet platform empowers customers to discover their preferred brands and merchants, while simultaneously granting businesses the ability to oversee all aspects of their operations. The Business would benefit by using the multiple modules the Beet platform offers starting from supplier and inventory management to sales, customer loyalty, and delivery management.
            </Typography>
            <Typography mt={2} variant="subtitle1" fontWeight={400} data-aos-anchor-placement="top-bottom">
              The customer would benefit by getting information on their favorite brands, offers, loyalty schemes and nearest stores. This platform establishes a mutually beneficial scenario for both customers and merchants, fostering improved visibility of needs and the ability for both parties to engage with each other digitally in an effective manner.
            </Typography>
            <div style={{ marginTop: '20px' }}>
              <Button variant='contained' fullWidth onClick={handleOpen}>Contact Us</Button>
            </div>
          </Grid>
          <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'end'}>
            <img src={land} width={'100%'} alt="" />
          </Grid>
        </Grid>
      )}
      <Footer />

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
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: '#f0d6db',
                    p: 2,
                    flexDirection: 'column',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, backgroundColor 0.3s ease-in-out',
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
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: '#f0d6db',
                    p: 2,
                    flexDirection: 'column',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, backgroundColor 0.3s ease-in-out',
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
    </>
  );
};

export default LandingPg;
