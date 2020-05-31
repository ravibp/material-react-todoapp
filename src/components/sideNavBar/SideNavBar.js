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
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
// import { ReactComponent as DownloadIcon } from "../../assets/svg/downloads.svg";
import GetAppIcon from "@material-ui/icons/GetApp";
import HelpIcon from "@material-ui/icons/Help";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./SideNavBar.scss";

const useStyles = makeStyles((theme) => ({
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

export default function SideNavBar() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className="sideNav-container">
      <Grid item container justify="flex-start" xs={12}>
        <div className="sideNav-icons">
          <HomeIcon />
          <NotificationsNoneIcon />
          <GetAppIcon />
        </div>
      </Grid>
      <Grid item container alignItems="flex-end" xs={12}>
        <div className="sideNav-icons">
          <PlaylistAddCheckIcon />
          <PersonAddIcon />
          <SearchIcon />
          <HelpIcon className="help-icon" />
          <AccountCircleIcon style={{ fontSize: "3rem" }} />
        </div>
      </Grid>
    </div>
  );
}
