import { Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import logo from '../../assets/beet/Logo1.png';
import copyRight from '../../assets/beet/allRightsReserved.png';
import apps from '../../assets/beet/apps.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';


const Footer = () => {
  const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <section style={{ background: '#B5334A' }}>
      {isMediumUp && (<Grid container p={2}>
        <Grid item md={4}  >
          <img src={logo} width={'10%'} alt="" />
          <Typography variant='p' mt={'10px'} color={'#FFFF'}>
          Beet, developed by Mobios (Pvt) Ltd., integrates the Supply Chain Management (SCM), Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), and Loyalty features for merchants. This enables customers to have comprehensive insight into their purchases while being rewarded for their loyalty.
          </Typography>
          <img src={apps} width={'60%'} alt="" style={{ marginTop: '10px' }} />

        </Grid>

        <Grid item md={5} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'colunm'} textAlign={'start'}>
          <Typography variant='subtitle2' mt={'2px'} color={'#FFFF'}>
            ABOUT<br />
            TERMS & CONDITIONS<br />
            PRIVACY STATEMENT<br />
            BEET FOR MERCHANTS<br />
            Beet FOR CUSTOMERS<br />
            MERCHANTS LIST<br />
            MY LOYALTY


          </Typography>
        </Grid>

        <Grid item md={3}   >

          {/* Location */}
          <div style={{ display: 'flex', gap: '10px',color:'#fff' ,marginTop:'40px'}}>
          <LocationOnIcon sx={{ fontSize: { xs: '30px', md: '12px', lg: '30px' } }} />
          <Typography variant='subtitle2'>Mobios (Pvt) Ltd 12
              Ridgeway Place<br/>
              Colombo 4
              Sri Lanka.</Typography>
          </div>

          {/* Phone */}
          <div style={{ display: 'flex', gap: '10px',color:'#fff',marginTop:'10px' }}>
          <LocalPhoneIcon sx={{ fontSize: {  lg: '30px' } }} />
          <Typography variant='subtitle2'>+94 115 968 000</Typography>
          </div>

           {/* Mail */}
          <div style={{ display: 'flex', gap: '10px',color:'#fff',marginTop:'10px' }}>
          <MailIcon sx={{ fontSize: {  lg: '30px' } }} />
          <Typography variant='subtitle2'>info@mobios.lk</Typography>
          </div>
        </Grid>


      </Grid>)}





      <Divider sx={{ my: 1 }} />
      {isMediumUp && (<div style={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
        <img src={copyRight} width={'15%'} alt="" />

      </div>)}
      {isMediumDown && (<div style={{ padding: '1px', display: 'flex', justifyContent: 'center' }}>
        <img src={copyRight} width={'50%'} alt="" />

      </div>)}

    </section>
  )
}

export default Footer
