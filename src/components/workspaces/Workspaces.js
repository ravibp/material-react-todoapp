import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Routes from "../routes/Routes";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TreeItem from "@material-ui/lab/TreeItem";
import HomeIcon from "@material-ui/icons/Home";
import StyledTreeItem from "./StyledTreeItem";
import DeleteIcon from "@material-ui/icons/Delete";
import Label from "@material-ui/icons/Label";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import InfoIcon from "@material-ui/icons/Info";
import ForumIcon from "@material-ui/icons/Forum";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AppleIcon from "@material-ui/icons/Apple";
import SideNavBar from "../sideNavBar/SideNavBar";
import "./Workspaces.scss";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  tree: {
    color: theme.palette.text.secondary,
    "&:hover > $content": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:focus > $content, &$selected > $content": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: "var(--tree-view-color)",
    },
    "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label": {
      backgroundColor: "transparent",
    },
  },
}));

export default function Workspaces({ open, handleDrawerClose }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Drawer
        className={`${classes.drawer} drawer-container`}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <SideNavBar />
        <div className="workspace-container">
          <div
            className={classes.drawerHeader}
            style={{ fontSize: "10px", minHeight: "auto" }}
          >
            <h2 style={{ width: "100%", textAlign: "left" }}>Workspaces</h2>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <div style={{ display: "flex", padding: "5px" }}>
            <SearchIcon />
            <input className="search-field" placeholder="Filter Boards..." />
          </div>
          <Grid
            style={{ padding: "5px" }}
            item
            container
            justify="flex-start"
            xs={12}
          >
            <TreeView
              className={classes.tree}
              style={{ width: "100%" }}
              defaultExpanded={["1"]}
              defaultCollapseIcon={<ArrowDropDownIcon />}
              defaultExpandIcon={<ArrowRightIcon />}
              defaultEndIcon={<div style={{ width: 24 }} />}
            >
              <StyledTreeItem
                nodeId="1"
                labelText="Main"
                labelIcon={HomeIcon}
                buttonIcon={AddCircleOutlineIcon}
              >
                <StyledTreeItem
                  nodeId="2"
                  labelText="Web Design"
                  style={{ marginLeft: "20px" }}
                />
                <StyledTreeItem
                  nodeId="3"
                  labelText="Web Design 1"
                  style={{ marginLeft: "20px" }}
                />
              </StyledTreeItem>
            </TreeView>
          </Grid>
          <Grid item container alignItems="flex-end" xs={12}>
            <List style={{ width: "100%" }}>
              {["Dashboards", "Get the mobile app"].map((text, index) => (
                <ListItem
                  button
                  key={text}
                  className={index === 0 ? "dashboards-label" : "get-app-label"}
                >
                  <ListItemText primary={text} /> 
                  <ListItemIcon>
                    {index === 1 ? (
                      <>
                        <img
                          src="https://img.icons8.com/color/48/000000/google-play.png"
                          style={{ height: "25px" }}
                        />
                        <AppleIcon />
                      </>
                    ) : null}
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Divider />
        </div>
      </Drawer>
    </>
  );
}
