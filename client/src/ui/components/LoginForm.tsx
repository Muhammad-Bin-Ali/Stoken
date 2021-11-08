import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useGlobalState } from "../../index";

//This is the React Component LoginForm which takes in an argument for text and outputs basic UI for login screen
const LoginForm: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useGlobalState("isLoggedIn");

  //Function for when the button is clicked (routes to authentication scripts)
  const handleLogin = (e: any) => {
    e.preventDefault();

    const user = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!user) {
      setMessage("You need to provide a username or email!");
      return;
    }

    if (!password) {
      setMessage("You need to provide a password!");
      return;
    }

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/login`, { user, password }, { withCredentials: true })
      .then((res) => {
        const data: any = res.data;
        console.log(data.message);

        setIsLoggedIn(true);

        history.push("/");
      })
      .catch((err) => {
        setMessage(err.response?.data?.message);
      });
  };
  //The HTML attributes/elements for creating the basic parts of the UI and uses props for button (as the text and the onClick function changes)
  return (
    <div className="logincontainer">
      <form>
        <h1>Login Form</h1>
        <label htmlFor="username">Username:</label>
        <br></br>
        <input ref={usernameRef} type="text" id="username" name="username" />
        <br></br>
        <label htmlFor="password">Password:</label>
        <br></br>
        <input ref={passwordRef} type="password" id="password" name="password" />
        <br></br>
        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      </form>
      {message ? <p>{message}</p> : null}
    </div>
  );
};

//Exporting the form for rendering
export default LoginForm;
