import React from 'react';
import {Box, Container, Grid, Typography, Button} from '@mui/material';
import treatment from '../../../images/treatment.png'
const ExceptionalCare = () => {
    return (
        <Box sx={{ flexGrow: 1, my:5 }}>
        <Container>
        <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
            <img src={treatment} style={{width:'100%'}} alt="treatment"/>
        </Grid>
        <Grid item xs={12} md={6} style={{textAlign:'left'}}>
        <Typography sx={{color: 'success.main' , fontWeight: 500, mt:5}} variant="h5" component="div">
        Exceptional Dental 
        <br/>
        care on Your Term
        </Typography>
        <Typography variant="h6" component="div" sx={{my:4, fontSize:14, fontWeight:300, color:'gray'}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dolores animi sequi obcaecati! Autem, reprehenderit! Reprehenderit voluptates mollitia recusandae debitis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dolores animi sequi obcaecati! Autem, reprehenderit! Reprehenderit voluptates mollitia recusandae debitis. 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dolores animi sequi obcaecati! Autem, reprehenderit! Reprehenderit voluptates mollitia recusandae debitis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dolores animi sequi obcaecati! Autem, reprehenderit! Reprehenderit voluptates mollitia recusandae debitis. 
         </Typography>
         <Button  variant="contained" sx={{mt:5}} style={{ backgroundColor: '#5CE7ED'}}>Learn More</Button>
        </Grid>
        
        </Grid>
        </Container>
        </Box>
    );
};

export default ExceptionalCare;