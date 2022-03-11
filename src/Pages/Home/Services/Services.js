import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from "@mui/material/Typography";
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name : 'Fluoride Treatement',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        img : fluoride //relative url
    },
    {
        name : 'Cavity Filling',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        img : cavity
    },
    {
        name : 'Teeth whitening',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        img : whitening
    }
    
]

const Services = () => {
    return (
            <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{color: 'success.main',fontWeight: 500, m:5}} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{color: 'success.main',fontWeight: 500, m:2}} variant="h5" component="div">
                    Service We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                      services.map(service => <Service
                      key = {service.name}
                      service = {service}
                      >
                </Service>)  
                    }
                </Grid>
            </Container>
            </Box>

    );
};

export default Services;