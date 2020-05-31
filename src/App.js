import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
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
