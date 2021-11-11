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
    e.preventDefault(); //Error handling, gives error messages for when username or password isn’t given 

    const user = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!user) {
      setMessage("Please enter a username or email");
      return;
    }

    if (!password) {
      setMessage("You need to provide a password");
      return;
    }
    
//Processes HTTP requests made and sends to backend 
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
    <div className="logincontainer flex flex-col">
      <h1 className="font-Gotham font-bold text-projectCyan-dark text-3xl mt-24 mb-7">log in.</h1>

      <form className="flex flex-col">
        <div>
          <label className="inputLabel" htmlFor="username">
            username or email
          </label>
          <input className="inputField" ref={usernameRef} type="text" id="username" name="username" />
        </div>
        <div>
          <label className="inputLabel mt-3.5" htmlFor="password">
            password
          </label>
          <input className="inputField" ref={passwordRef} type="password" id="password" name="password" />
        </div>

        <button className="font-Nunito font-bold py-2 px-10 rounded bg-gradient-to-br from-pink to-beige border-none text-white duration-150 hover:from-pinkBright hover:to-beigeBright mt-10" onClick={handleLogin}>
          Submit
        </button>
      </form>

      {message ? <p className="w-full font-Nunito text-red text-xs mt-6 font-normal">{message}</p> : null}
    </div>
  );
};

//Exporting the form for rendering
export default LoginForm;
