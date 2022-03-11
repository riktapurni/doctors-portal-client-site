import React from 'react';
import {Container, Grid, Typography} from '@mui/material';
const Testimonial = () => {
    return (
        <div>
         <Container sx={{textAlign:'left'}}>
         <Typography variant="h6" sx={{color: 'success.main'}}>
         Testimonial
         </Typography>
         <Typography variant="h6">
         What's our patients says
         </Typography>
         <Grid>
         <Grid item xs={12} sm={6} md={4}>
         <Typography variant="h6" component="div" sx={{my:4, fontSize:14, fontWeight:300, color:'gray'}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dolores animi sequi obcaecati! Autem, reprehenderit! Reprehenderit voluptates mollitia recusandae debitis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dolores animi sequi obcaecati! Autem, reprehenderit! Reprehenderit voluptates mollitia recusandae debitis.  
         </Typography>
         </Grid>
         </Grid>
         </Container>   
        </div>
    );
};

export default Testimonial;