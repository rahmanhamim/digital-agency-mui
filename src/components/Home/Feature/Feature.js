import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import featureImg from "../../../images/feature-img.png";

const Feature = () => {
 const theme = useTheme();
 const useStyle = makeStyles({
  featureImgContainer: {
   position: "relative",
  },
  vidImage: {
   width: "100%",
   marginTop: "2.5em",
  },
  playBtn: {
   position: "absolute",
   height: "120px",
   width: "120px",
   backgroundColor: "#5454D4",
   borderRadius: "50%",
   top: "50%",
   left: "50%",
   cursor: "pointer",
   transform: "translateX(-50%) translateY(-50%)",
   [theme.breakpoints.down("sm")]: {
    height: "80px",
    width: "80px",
   },
   "&::before": {
    content: "''",
    position: "absolute",
    height: "30px",
    width: "40px",
    top: "30px",
    left: "45px",
    borderTop: "30px solid transparent",
    borderBottom: "30px solid transparent",
    borderLeft: "40px solid #fff",
    [theme.breakpoints.down("sm")]: {
     borderTop: "20px solid transparent",
     borderBottom: "20px solid transparent",
     borderLeft: "30px solid #fff",
     top: "20px",
     left: "30px",
    },
   },
  },
 });

 const { vidImage, featureImgContainer, playBtn } = useStyle();

 return (
  <Container sx={{ my: "4em" }}>
   <Grid container spacing={2}>
    <Grid item xs={12} md={7}>
     <Typography
      variant="h3"
      sx={{ fontWeight: "bold", letterSpacing: "1.5px" }}
     >
      Why Enver Is The <br /> Best Choice
     </Typography>
    </Grid>
    <Grid item xs={12} md={5}>
     <Typography sx={{ fontSize: "1.2rem", color: "#c9c9c9" }}>
      Watch this one minute video so you understand why you should use our
      services!
     </Typography>
    </Grid>
   </Grid>
   <Box className={featureImgContainer}>
    <img src={featureImg} alt="" className={vidImage} />{" "}
    <Box className={playBtn}>{/* play button */}</Box>
   </Box>
  </Container>
 );
};

export default Feature;
