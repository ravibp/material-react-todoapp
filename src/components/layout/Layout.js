import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Workspaces from "../workspaces/Workspaces";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Routes from "../routes/Routes";
import Header from "../header/Header";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minWidth: "1024px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Layout() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = (flag) => {
    setOpen(flag);
  };

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => handleDrawerOpen(true)}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
        style={{ position: "absolute", top: "5px", left: "15px" }}
      >
        <MenuIcon />
      </IconButton>

      <Workspaces
        style={{ position: "absolute" }}
        handleDrawerClose={() => handleDrawerOpen(false)}
        open={open}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
        style={{ padding: "30px" }}
      >
        {/* header and dashboard component */}
        <Header />
        <Routes />
      </main>
    </div>
  );
}
