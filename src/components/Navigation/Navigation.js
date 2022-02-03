import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Container, useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Navigation() {
 const theme = useTheme();
 const useStyle = makeStyles({
  navItem: {
   color: "#fff",
   textDecoration: "none",
   margin: "0 1em",
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
      <Toolbar>
       <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        className={navIcon}
        onClick={() => setState(true)}
       >
        <MenuIcon />
       </IconButton>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
       <Button variant="contained" sx={{ color: "#fff", bgcolor: "#red" }}>
        Login
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
