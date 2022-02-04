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
       <Box
        sx={{
         width: "45px",
         height: "45px",
         border: "3px solid #fff",
         borderRadius: "50% ",
         position: "absolute",
         fontWeight: "bold",
         right: "-30px",
         top: "-30px",
         "&::before": {
          content: '""',
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          position: "absolute",
          top: "14px",
          left: "10px",
          border: "2px solid #fff",
          opacity: "0.5",
         },
        }}
       >
        {/* Circle icon */}
       </Box>
       <Box
        sx={{
         background: "#fff",
         height: "38px",
         position: "absolute",
         width: "3px",
         bottom: "-20px",
         right: "-20px",
         borderRadius: "2px",
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
        {/* Plus Icon */}
       </Box>
       <Box
        sx={{
         position: "absolute",
         bottom: { xs: "-20px", md: "18px" },
         left: { xs: "0px", md: "-70px" },
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
        {/* triangle icon */}
       </Box>
       <Box
        sx={{
         position: "absolute",
         bottom: { xs: "-40px", md: "0px" },
         left: { xs: "10px", md: "-60px" },
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
         position: "absolute",
         left: { xs: "-42px", md: "-170px" },
         top: { xs: "0px", md: "20px" },
         height: "23px",
         width: "30px",
         borderRight: "3px solid #fff",
         borderBottom: "3px solid #fff",
         transform: "rotate(49deg)",
         "&:: after": {
          position: "absolute",
          content: "''",
          right: "-27px",
          bottom: "19px",
          width: "27px",
          height: "28px",
          borderRight: "3px solid #fff",
          borderBottom: "3px solid #fff",
         },
         "&:: before": {
          position: "absolute",
          content: "''",
          right: "-51px",
          bottom: "46px",
          width: "27px",
          height: "3px",
          bgcolor: "#fff",
         },
        }}
       >
        {/* zigzag icon */}
       </Box>
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
