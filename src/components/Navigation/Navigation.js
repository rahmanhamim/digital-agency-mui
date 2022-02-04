import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import { Container, useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../images/Logo Icon 1.png";
import SegmentRoundedIcon from "@mui/icons-material/SegmentRounded";

export default function Navigation() {
 const theme = useTheme();
 const useStyle = makeStyles({
  navItem: {
   color: "#fff",
   textDecoration: "none",
   margin: "0 1em",
   transition: "all 0.3s",
   "&:first-child": {
    color: "#5454D4",
   },
   "&:hover": {
    color: "#5454D4",
   },
  },
  navIcon: {
   [theme.breakpoints.up("sm")]: {
    display: "none !important",
   },
  },
  navItemContainer: {
   [theme.breakpoints.down("sm")]: {
    display: "none",
   },
  },
  appBarBgColor: {
   backgroundColor: "#1B1A1C !important",
  },
 });

 const { navItem, navIcon, navItemContainer, appBarBgColor } = useStyle();
 const [state, setState] = React.useState(false);

 const list = (
  <Box sx={{ width: 250 }} role="presentation">
   <List>
    <ListItem button>
     <ListItemText>Home</ListItemText>
    </ListItem>
    <ListItem button>
     <ListItemText>SERVICES</ListItemText>
    </ListItem>
    <ListItem button>
     <ListItemText>OUR PROJECTS</ListItemText>
    </ListItem>
    <ListItem button>
     <ListItemText>ABOUT US</ListItemText>
    </ListItem>
   </List>
   <Divider />
  </Box>
 );

 return (
  <>
   <Box sx={{ flexGrow: 1 }}>
    <AppBar elevation={0} className={appBarBgColor} position="static">
     <Container>
      <Toolbar sx={{ padding: "0 !important" }}>
       <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 1 }}
        className={navIcon}
        onClick={() => setState(true)}
       >
        <SegmentRoundedIcon />
       </IconButton>
       <Typography
        variant="h6"
        component="div"
        sx={{
         flexGrow: 1,
         display: "flex",
         justify: "center",
         alignItems: "center",
         marginRight: "1em",
        }}
       >
        <img
         src={logo}
         alt=""
         style={{ maxWidth: "35px", marginRight: "0.5em" }}
        />
        ENVER
       </Typography>
       <Box sx={{ width: 1, textAlign: "center" }} className={navItemContainer}>
        <a className={navItem} href="#home">
         HOME
        </a>
        <a className={navItem} href="#services">
         SERVICES
        </a>
        <a className={navItem} href="#projects">
         OUR PROJECTS
        </a>
        <a className={navItem} href="#aboutus">
         ABOUT US
        </a>
       </Box>
       <Button
        variant="outlined"
        sx={{
         color: "#fff",
         width: "12em",
         border: "1px solid #fff",
         "&:hover": {
          bgcolor: "#5454D4",
          border: "1px solid #5454D4",
         },
        }}
       >
        CONTACT US
       </Button>
      </Toolbar>
     </Container>
    </AppBar>
   </Box>

   <div>
    <React.Fragment>
     <Drawer open={state} onClose={() => setState(false)}>
      {list}
     </Drawer>
    </React.Fragment>
   </div>
  </>
 );
}
