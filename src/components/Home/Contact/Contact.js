import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
 return (
  <Container sx={{ my: "8rem", py: "5rem" }}>
   <Box
    sx={{
     display: "flex",
     alignItems: "center",
     justifyContent: "space-between",
     position: "relative",
    }}
   >
    <Box
     sx={{
      background: "#fff",
      height: "38px",
      position: "absolute",
      width: "3px",
      top: "-70px",
      right: "30px",
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
      width: "45px",
      height: "45px",
      border: "3px solid #fff",
      borderRadius: "50% ",
      position: "absolute",
      fontWeight: "bold",
      left: "70px",
      bottom: "-80px",
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
    <Typography variant="h3" sx={{ fontWeight: "bold" }}>
     Contact us for the service <br /> you want to use
    </Typography>
    <Button
     variant="outlined"
     sx={{
      color: "#fff",
      width: "12em",
      border: "1px solid #5454D4",
      bgcolor: "#5454D4",
      "&:hover": {
       bgcolor: "#000",
       border: "1px solid #fff",
      },
     }}
    >
     CONTACT US
    </Button>
   </Box>
  </Container>
 );
};

export default Contact;
