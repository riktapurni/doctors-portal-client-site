import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Paper } from '@mui/material';
const Mui = () => {
    return (
         <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
        <Grid item xs={12} md={5} sx={{border:'1px solid red'}}>
          <Paper sx={{ height: 140, width: 100 }} />
        </Grid>
        <Grid item xs={12} md={7} style={{border:'1px solid green'}}>
           <Paper sx={{ height: 140, width: 100 }} />
        </Grid>
        
      </Grid>
    </Box>
        
    );
};

export default Mui;