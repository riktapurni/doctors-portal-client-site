import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography, Container } from "@mui/material";
const appointmentBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74, 0.9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 175,
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <img
            style={{ width: "400px", marginTop: "-110px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={4}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Container>
            <Typography variant="h6" style={{ color: "5ECD91" }}>
              Appoinment
            </Typography>
            <Typography variant="h6">Appoinment</Typography>
            <Typography
              variant="h6"
              style={{ color: "white", fontSize: "14px", fontWeight: 400 }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim eos
              deserunt quasi, quisquam velit aspernatur est optio voluptate!
              Incidunt, natus?
            </Typography>
            <Button variant="contained">Load More</Button>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
