import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Team from "./pages/Team";
import { Home } from "../home/Home";
import Profile from "../profile/profile";
import Classes from "../classes/Classes";

function Metrics() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/Classes" exact component={Classes} />
        
      </Switch>
    </Router>
  );
}

export default Metrics;