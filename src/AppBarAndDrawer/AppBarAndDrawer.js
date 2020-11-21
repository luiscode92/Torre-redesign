import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import PalettePicker from "../Theme/PalettePicker";
export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: '#383B40',
  },
  logo: {
    color: "rgb(205, 220, 57)",
    textDecoration: "none",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: '#383B40',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#383B40',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  active: {
    backgroundColor: theme.palette.action.selected,
  },
  icon: {
    
    color: 'rgb(205, 220, 57)'
},
  listItem: {
    
    color: 'white'
},
}));

function ResponsiveDrawer(props) {
  const { container, setCurrentTheme, currentTheme } = props;
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();
  const isHome = false; // pathname === "/";
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div className="root">
      <div className={classes.toolbar} />
      <Divider />
        <List>
          {[
            { text: "Search", icon: "search" },
            { text: "Profile", icon: "person" },
            { text: "Jobs", icon: "work" },
            { text: "Messages", icon: "messages" },
            
          ].map(({ text, icon }, index) => (
            <ListItem
              component={RouterLink}
              selected={pathname === `/${text}`}
              to={`/${text}`}
              button
              key={text}
            >
              <ListItemIcon >
                <Icon className={classes.icon}>{icon}</Icon>
              </ListItemIcon>
              <ListItemText className={classes.listItem}  primary={text.toUpperCase()} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="sticky" className={isHome ? "" : classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            to={"/"}
            component={RouterLink}
            className={classes.logo}>
            Torre
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <Avatar src="/img/driver.png" />
          </IconButton>

        </Toolbar>
      </AppBar>
      {isHome && !mobileOpen ? (
        <div />
      ) : (
        <nav aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>

          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open={isHome}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      )}
    </div>
  );
}


export default ResponsiveDrawer;
