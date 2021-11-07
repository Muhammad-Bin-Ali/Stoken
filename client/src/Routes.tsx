import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./ui/components/Header";
import Login from "./ui/pages/Login";
import NotFound from "./ui/pages/NotFound";
import Test from "./ui/pages/Test";
import Home from "./ui/pages/Home";

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Home} path="/" />
        <Route component={Test} path="/create-token" />
        <Route component={Login} exact path="/login" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
