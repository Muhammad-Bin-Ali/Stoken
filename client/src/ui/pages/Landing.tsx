import React, { useEffect, useState } from "react";
import { useGlobalState } from "../..";//Imports log-in state to determine 
import { useHistory } from "react-router-dom";

const Landing: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useGlobalState("isLoggedIn");
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/dashboard");//If the user is logged on, the page will go to the dashboard
    }
  }, [isLoggedIn]);

  return (//If not logged on, it will return a simple page that appears when the user is not logged in telling them to get started
    <div className=" 2xl:mx-96 2xl:mx-72 xl:mx-64 lg:mx-52 sm:mx-32 mt-20">
      <p className=" flex justify-center item-center mt-20 font-Gotham font-bold text-projectCyan text-lg ">Log In or Sign up to get started! (Landing page is under construction)</p>
    </div>
  );
};

export default Landing;
