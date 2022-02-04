import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bannerImg from "../../../images/young-guy.png";
import { Rotate90DegreesCcw } from "@mui/icons-material";

const Banner = () => {
 return (
  <Container>
   <Grid
    container
    spacing={2}
    sx={{
     minHeight: "60vh",
     display: "flex",
     alignItems: "center",
    }}
   >
    <Grid item xs={12} md={8}>
     <Typography
      sx={{
       fontWeight: "bold",
       fontSize: "4rem",
       lineHeight: "1.2",
      }}
     >
      Build Your <br /> Awesome <br /> Platform
     </Typography>
     <Typography
      sx={{
       fontSize: "1.2rem",
       margin: "1.2em 0",
      }}
     >
      Enver studio is a digital studio that offers several services <br /> such
      as UI/UX Design to developers, we will provide the best <br /> service for
      those of you who use our services.
     </Typography>
     <Button
      variant="contained"
      sx={{
       backgroundColor: "#5454D4",
       padding: ".6em 1em",
       border: "1px solid transparent",
       "&:hover": {
        backgroundColor: "#000 !important",
        border: "1px solid #fff",
       },
      }}
     >
      Our Services
      <ArrowForwardIcon
       sx={{ transform: "rotate(-35deg)", margin: "0px 3px" }}
      />
     </Button>
    </Grid>
    <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" } }}>
     <Box
      sx={{
       minHeight: "500px",
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
      }}
     >
      <Box sx={{ position: "relative", zIndex: "33" }}>
       <Box></Box>
       <Box
        sx={{
         position: "absolute",
         zIndex: "0",
         height: "260px",
         width: "260px",
         bottom: "78px",
         right: "46px",
         border: "2px solid #fff",
         borderRadius: "5px",
         transform: "rotate(24deg)",
         "&:: after": {
          content: '""',
          position: "absolute",
          zIndex: "-10",
          height: "260px",
          width: "260px",
          bottom: "-23px",
          right: "-49px",
          bgcolor: "#5454D4",
          border: "2px solid #fff",
          borderRadius: "5px",
         },
        }}
       >
        {/* image bg box and bg border */}
       </Box>
       <img
        src={bannerImg}
        style={{
         maxWidth: "300px",
         clipPath:
          "polygon(71% -6%, 76% 3%, 98% -8%, 102% 55%, 82% 88%, 74% 101%, 32% 87%, 12% 80%, -3% 54%, 20% 9%)",
        }}
        alt=""
       />
      </Box>
     </Box>
    </Grid>
   </Grid>
  </Container>
 );
};

export default Banner;
