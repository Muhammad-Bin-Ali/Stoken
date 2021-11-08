import React, { useEffect, useState } from "react";
import { useGlobalState } from "../..";
import { useHistory } from "react-router-dom";

const Landing: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useGlobalState("isLoggedIn");
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/dashboard");
    }
  }, []);

  return (
    <div>
      <p>Log In or Sign up to get started!</p>
    </div>
  );
};

export default Landing;
