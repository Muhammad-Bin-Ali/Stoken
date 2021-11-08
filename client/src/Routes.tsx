import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./ui/components/Header";
import Login from "./ui/pages/Login";
import NotFound from "./ui/pages/NotFound";
import Test from "./ui/pages/Test";
import Dashboard from "./ui/pages/Dashboard";
import Signup from "./ui/pages/Signup";
import axios from "axios";
import { useGlobalState, Token } from "./index";
import Landing from "./ui/pages/Landing";

const Routes: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useGlobalState("isLoggedIn");
  const [tokens, setTokens] = useGlobalState("tokens");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/getTokens`, { withCredentials: true })
      .then((res) => {
        const data: any = res.data;
        const newTokens: Token[] = data.tokens;

        console.log(newTokens);
        setTokens(newTokens);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          console.log("401 :)");
          setIsLoggedIn(false);
        }
      });
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Login} path="/login" />
        <Route component={Signup} path="/signup" />
        <Route component={Test} path="/test" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
