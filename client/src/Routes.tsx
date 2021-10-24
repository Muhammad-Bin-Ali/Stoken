import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./ui/components/Header";
import Home from "./ui/pages/Home";
import NotFound from "./ui/pages/NotFound";

const Routes: React.FC = () => {
  return (
    <Router>
      <Header title="School Wallet" />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
