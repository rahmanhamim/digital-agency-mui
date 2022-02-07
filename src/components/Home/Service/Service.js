import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

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
  </Container>
 );
};

export default Service;
