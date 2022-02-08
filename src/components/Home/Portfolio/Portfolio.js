import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import protfolioimg1 from "../../../images/portfolio1.png";
import protfolioimg2 from "../../../images/portfolio2.png";
import protfolioimg3 from "../../../images/portfolio3.png";

const Portfolio = () => {
 const useStyle = makeStyles({
  navigationBtn: {
   backgroundColor: "#5454D4",
   border: "none",
   width: "5px",
   height: "5px",
   borderRadius: "3px",
   cursor: "pointer",
  },
  navigationBtn2: {
   backgroundColor: "#121213",
   border: "none",
   width: "2px",
   height: "5px",
   marginLeft: "5px",
   borderRadius: "3px",
   cursor: "pointer",
  },
 });
 const { navigationBtn, navigationBtn2 } = useStyle();

 return (
  <Container sx={{ mt: "10rem", mb: "5rem" }}>
   <Box sx={{ position: "relative" }}>
    <Box
     sx={{
      background: "#fff",
      height: "38px",
      position: "absolute",
      width: "3px",
      top: "-100px",
      left: { xs: "30px", md: "-50px" },
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
    <Box
     sx={{
      width: "45px",
      height: "45px",
      border: "3px solid #fff",
      borderRadius: "50% ",
      position: "absolute",
      fontWeight: "bold",
      right: "60px",
      top: "60px",
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
      position: "absolute",
      zIndex: "-10",
      width: { xs: "350px", md: "450px" },
      height: "250px",
      right: "30px",
      top: "10px",
      background:
       "linear-gradient(180deg, rgba(84, 84, 212, 0.27) 0%, rgba(84, 84, 212, 0.1134) 100%)",
      filter: "blur(100px)",
      borderRadius: "50px",
      transform: "rotate(-45deg)",
     }}
    >
     {/* gradient */}
    </Box>
    <Typography variant="h3" sx={{ fontWeight: "bold" }}>
     Our Awesome Portfolio
    </Typography>
   </Box>
   <Grid container spacing={2} sx={{ mt: "8em" }}>
    <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center" }}>
     <img src={protfolioimg1} alt="" />
    </Grid>
    <Grid item xs={12} md={6} lg={4} sx={{ mt: "2em", textAlign: "center" }}>
     <img src={protfolioimg2} alt="" />
    </Grid>
    <Grid item xs={12} md={6} lg={4} sx={{ mt: "4em", textAlign: "center" }}>
     <img src={protfolioimg3} alt="" />
    </Grid>
   </Grid>
   <Box sx={{ mt: "4rem", textAlign: "center", position: "relative" }}>
    <Box
     sx={{
      position: "absolute",
      left: { xs: "42px", md: "0px" },
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
    <button className={navigationBtn}></button>
    <button className={navigationBtn2}></button>
    <button className={navigationBtn2}></button>
   </Box>
  </Container>
 );
};

export default Portfolio;
