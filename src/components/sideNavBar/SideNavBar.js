import React from "react";
import Grid from "@material-ui/core/Grid";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import GetAppIcon from "@material-ui/icons/GetApp";
import HelpIcon from "@material-ui/icons/Help";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./SideNavBar.scss";

export default function SideNavBar() {
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
