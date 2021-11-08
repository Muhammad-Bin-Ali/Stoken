import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./ui/components/Header";
import Login from "./ui/pages/Login";
import NotFound from "./ui/pages/NotFound";
import Test from "./ui/pages/Test";
import Home from "./ui/pages/Home";
import Signup from "./ui/pages/Signup";
import axios from "axios";
import { useGlobalState } from "./index";

const Routes: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useGlobalState("isLoggedIn");

  useEffect(() => {
    const run = async () => {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/getTokens`, { withCredentials: true });

      if (response.status !== 401) {
        setIsLoggedIn(true);
        return;
      }

      setIsLoggedIn(false);
    };

    run();
  });

  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Test} path="/create-token" />
        <Route component={Login} path="/login" />
        <Route component={Signup} path="/signup" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
