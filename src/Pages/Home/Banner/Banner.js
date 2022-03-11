import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';
const bannerBg = {
    background : `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    
}
const verticalCenter = {
    display : 'flex',
    alignItems : 'center',
    height : 450
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{...verticalCenter, textAlign:'left'}} item xs={12} md={6}>
         <Box>
             <Typography variant='h2'>
            Your New smile start here
         </Typography>
         <Typography variant="h6" sx={{my:4, fontSize:14, fontWeight:300, color:'gray'}}>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dolores animi sequi obcaecati! Autem, reprehenderit! Reprehenderit voluptates mollitia recusandae debitis.
         </Typography>
         <Button  variant="contained" style={{ backgroundColor: '#5CE7ED'}}>Get Appointment</Button>
         </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width:'350px'}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;