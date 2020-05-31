import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes/Routes";
import SideNavBar from "./components/sideNavBar/SideNavBar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
