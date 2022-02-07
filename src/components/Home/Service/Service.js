import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import LayersIcon from "@mui/icons-material/Layers";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MovieIcon from "@mui/icons-material/Movie";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";

const Service = () => {
 const useStyle = makeStyles({
  serviceTitle: {
   textAlign: "center",
   fontWeight: "bolder",
  },
  serviceContainer: {
   marginTop: "9em",
  },
  serviceTitleContainer: {
   position: "relative",
  },
 });
 const { serviceTitle, serviceContainer, serviceTitleContainer } = useStyle();

 return (
  <Container sx={{ mb: 5 }} className={serviceContainer}>
   <Box className={serviceTitleContainer}>
    <Box
     sx={{
      position: "absolute",
      zIndex: "-10",
      width: { xs: "350px", md: "550px" },
      height: "300px",
      left: "-150px",
      top: "10px",
      background:
       "linear-gradient(180deg, rgba(84, 84, 212, 0.27) 0%, rgba(84, 84, 212, 0.1134) 100%)",
      filter: "blur(180px)",
      borderRadius: "50px",
      transform: "rotate(45deg)",
      "&::before": {},
     }}
    >
     {/* gradient */}
    </Box>
    <Box
     sx={{
      position: "absolute",
      bottom: { xs: "195px", md: "105px" },
      left: { xs: "13px", md: "78px" },
      width: "3px",
      height: "52.5px",
      bgcolor: "#fff",
      borderRadius: "5px",
      "&:: after": {
       position: "absolute",
       content: "''",
       top: "7.7777px",
       left: "-16.3px",
       height: "37px",
       width: "37px",
       borderTop: "3px solid #fff",
       borderRight: "3px solid #fff",
       transform: "rotate(45deg)",
      },
     }}
    >
     {/* triangle icon 1*/}
    </Box>
    <Box
     sx={{
      position: "absolute",
      bottom: { xs: "180px", md: "90px" },
      left: { xs: "20px", md: "85px" },
      width: "1px",
      height: "51px",
      bgcolor: "#fff",
      "&:: after": {
       position: "absolute",
       content: "''",
       top: "7px",
       left: "-18px",
       height: "37px",
       width: "37px",
       borderTop: "1px solid #fff",
       borderRight: "1px solid #fff",
       transform: "rotate(45deg)",
      },
     }}
    >
     {/* triangle icon 2*/}
    </Box>
    <Box
     sx={{
      background: "#fff",
      height: "38px",
      position: "absolute",
      width: "3px",
      bottom: "0px",
      right: { xs: "30px", md: "50px" },
      borderRadius: "2px",
      transform: "rotate(45deg)",
      "&::before": {
       background: "#fff",
       content: '""',
       height: "3px",
       left: "-17px",
       position: "absolute",
       top: "16px",
       width: "39px",
       borderRadius: "2px",
      },
     }}
    >
     {/* Cross Icon */}
    </Box>
    <Typography variant="h3" className={serviceTitle}>
     The Service We Provide <br /> For You
    </Typography>
   </Box>
   <Grid container spacing={2} sx={{ my: 4 }}>
    <Grid item xs={12} md={4} sx={{ my: 5 }}>
     <Box sx={{ textAlign: "center" }}>
      <Typography
       sx={{
        background: "rgba(84, 84, 212, 0.1)",
        borderRadius: "50%",
        padding: "20px",
        display: "inline-block",
        fontSize: "0px",
       }}
      >
       <IntegrationInstructionsIcon
        sx={{
         color: "#5454D4",
         fontSize: "3rem",
        }}
       />
      </Typography>
      <Typography variant="h5" sx={{ my: 2 }}>
       Development
      </Typography>
      <Typography sx={{ color: "#a9a9a9" }}>
       Create a platform with the best and coolest <br /> quality from us.
      </Typography>
     </Box>
    </Grid>
    <Grid item xs={12} md={4} sx={{ my: 5 }}>
     <Box sx={{ textAlign: "center" }}>
      <Typography
       sx={{
        borderRadius: "50%",
        padding: "20px",
        background: "rgba(84, 84, 212, 0.1)",
        display: "inline-block",
        fontSize: "0px",
       }}
      >
       <LayersIcon
        sx={{
         color: "#F04037",
         fontSize: "3rem",
        }}
       />
      </Typography>
      <Typography variant="h5" sx={{ my: 2 }}>
       UI/UX Designer
      </Typography>
      <Typography>
       We provide UI/UX Design services, <br /> and of course with the best
       quality
      </Typography>
     </Box>
    </Grid>
    <Grid item xs={12} md={4} sx={{ my: 5 }}>
     <Box sx={{ textAlign: "center" }}>
      <Typography
       sx={{
        background: "rgba(254,220,90,0.1)",
        borderRadius: "50%",
        padding: "20px",
        display: "inline-block",
        fontSize: "0px",
       }}
      >
       <BusinessCenterIcon
        sx={{
         color: "#FEDC5A",
         fontSize: "3rem",
        }}
       />
      </Typography>
      <Typography variant="h5" sx={{ my: 2 }}>
       Graphik Designer
      </Typography>
      <Typography>
       Create a platform with the best and coolest <br /> quality from us.
      </Typography>
     </Box>
    </Grid>
    <Grid item xs={12} md={4} sx={{ my: 5 }}>
     <Box sx={{ textAlign: "center" }}>
      <Typography
       sx={{
        background: "rgba(254,220,90,0.1)",
        borderRadius: "50%",
        padding: "20px",
        display: "inline-block",
        fontSize: "0px",
       }}
      >
       <ViewAgendaIcon
        sx={{
         color: "#FEDC5A",
         fontSize: "3rem",
        }}
       />
      </Typography>
      <Typography variant="h5" sx={{ my: 2 }}>
       Motion Graphik
      </Typography>
      <Typography>
       Create a platform with the best and coolest <br /> quality from us.
      </Typography>
     </Box>
    </Grid>
    <Grid item xs={12} md={4} sx={{ my: 5 }}>
     <Box sx={{ textAlign: "center" }}>
      <Typography
       sx={{
        background: "rgba(84, 84, 212, 0.1)",
        borderRadius: "50%",
        padding: "20px",
        display: "inline-block",
        fontSize: "0px",
       }}
      >
       <CameraAltIcon
        sx={{
         color: "#5454D4",
         fontSize: "3rem",
        }}
       />
      </Typography>
      <Typography variant="h5" sx={{ my: 2 }}>
       Photography
      </Typography>
      <Typography>
       Create a platform with the best and coolest <br /> quality from us.
      </Typography>
     </Box>
    </Grid>
    <Grid item xs={12} md={4} sx={{ my: 5 }}>
     <Box sx={{ textAlign: "center" }}>
      <Typography
       sx={{
        borderRadius: "50%",
        padding: "20px",
        background: "rgba(84, 84, 212, 0.1)",
        display: "inline-block",
        fontSize: "0px",
       }}
      >
       <MovieIcon
        sx={{
         color: "#F04037",
         fontSize: "3rem",
        }}
       />
      </Typography>
      <Typography variant="h5" sx={{ my: 2 }}>
       Videography
      </Typography>
      <Typography>
       Create a platform with the best and coolest <br /> quality from us.
      </Typography>
     </Box>
    </Grid>
   </Grid>
  </Container>
 );
};

export default Service;
