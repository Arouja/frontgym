import React from "react";
import "./metrics.css";
import Sidebar from "../sidebar/Sidebar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Switch } from "react-router-dom";

import { Home } from "../home/Home";
import Profile from "../profile/profile";
import Classes from "../classes/Classes";

function Metrics() {
  return (
    <Router>
      <Sidebar />
      <Routes>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/Classes" exact component={Classes} />        
      </Switch>
      </Routes>
    </Router>
  );
}

export default Metrics;