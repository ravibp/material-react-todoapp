import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TableChartIcon from "@material-ui/icons/TableChart";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import MenuIcon from "@material-ui/icons/Menu";
import { ReactComponent as PeopleIcon } from "../../assets/svg/PeopleIcon.svg";
import "./Header.scss";

export default function Header() {
  const { searchText, setSearchText } = useState("");
  return (
    <div className="header-container">
      <div
        className="header-primary"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Grid item container justify="flex-start" xs={4}>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="workspace-title"
          >
            <h2>
              Web Design
              <span className="star-icon">
                <StarIcon />
              </span>
            </h2>
            <p className="board-description" xs={12}>
              Add board description
            </p>
          </div>
        </Grid>
        <Grid
          item
          container
          justify="flex-end"
          xs={8}
          style={{ height: "35px" }}
          className="headerPrimary-icons"
        >
          <AccountCircleIcon />
          <div className="zoomCall-icon">
            <img alt="zoomcall-icon" src="https://www.vectorlogo.zone/logos/zoomus/zoomus-icon.svg" />
            Start Zoom Call
          </div>
          <div className="people-icon">
            <PeopleIcon />
            <span>{"/1"}</span>
            <span className="vertical-bisector"></span>
            <span>{"Activities/0"}</span>
          </div>
          <span>...</span>
        </Grid>
      </div>
      <div
        className="header-secondary"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Grid item container justify="flex-start" xs={4}>
          <div
            style={{ display: "-webkit-inline-box", flexDirection: "column" }}
          >
            <TableChartIcon />
            <h3 className="main-table mlr5 mtb0">Main Table</h3>
            <ExpandMoreIcon />
          </div>
        </Grid>
        <Grid item container justify="flex-end" xs={8}>
          <div className="new-item">
            <Button variant="outlined" size="small">
              New Item
              <ExpandMoreIcon />
            </Button>
          </div>
          <div className="search-board">
            <input
              placeholder="Search / Filter board"
              name="searchText"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <AccountCircleIcon />
          <VisibilityOffIcon />
          <MenuIcon />
        </Grid>
      </div>
      <hr className="mt20" />
    </div>
  );
}
