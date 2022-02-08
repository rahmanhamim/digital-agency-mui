import { Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../../images/Logo Icon 1.png";

const Footer = () => {
 return (
  <footer>
   <Container
    sx={{
     display: "flex",
     alignItems: { xs: "right", md: "center" },
     justifyContent: "space-between",
     flexDirection: { xs: "column", md: "row" },
     py: 5,
     bgcolor: "#19191B",
    }}
   >
    <Box
     sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: { xs: "start", md: "space-between" },
     }}
    >
     <img src={logo} alt="" />
     <Typography sx={{ ml: 1, fontSize: "1.5rem", fontWeight: "bold" }}>
      Enver
     </Typography>
    </Box>
    <Box>
     <Link sx={{ color: "#757575", textDecoration: "none", mr: 2 }} href="#">
      Link
     </Link>
     <Link sx={{ color: "#757575", textDecoration: "none", mr: 2 }} href="#">
      Link
     </Link>
     <Link sx={{ color: "#757575", textDecoration: "none" }} href="#">
      Link
     </Link>
    </Box>
    <Box>
     <Typography sx={{ color: "#757575" }}>
      &#169; 2020 Enver. All Rights Reserved
     </Typography>
    </Box>
   </Container>
  </footer>
 );
};

export default Footer;
