import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Importing all of the components and pages to make them functional and connect to the backend 
import Header from "./ui/components/Header";
import Login from "./ui/pages/Login";
import NotFound from "./ui/pages/NotFound";
import Test from "./ui/pages/Test";
import Dashboard from "./ui/pages/Dashboard";
import Signup from "./ui/pages/Signup";
import axios from "axios";
import { useGlobalState, Token } from "./index";
import Landing from "./ui/pages/Landing";

//This function is checking for authentication with credentials for the dashboard etc, and then allowing the user to access pages
const Routes: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useGlobalState("isLoggedIn");
  const [tokens, setTokens] = useGlobalState("tokens");

  //Catching errors and checking for authentication for page redirection  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/getTokens`, { withCredentials: true })
      .then((res) => {
        const data: any = res.data;
        const newTokens: Token[] = data.tokens;

        setTokens(newTokens);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          setIsLoggedIn(false);
        }
      });
  }, []);
//Setting up the routes so that the user can view different pages.
//Allows the user to move between different parts of an application when they enters a URL or clicks an element 
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
