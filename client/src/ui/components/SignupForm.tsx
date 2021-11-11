import axios from "axios";
import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalState } from "../../index";

//Regex's are for determining if a email/username/password is valid to use 
export const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/gm;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

//This is the React Component SignUpForm which takes in an argument for text and outputs basic UI for sing up screen
const SignUpForm: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useGlobalState("isLoggedIn");

  //Function for when the button is clicked (routes to the account creation/storage scripts)
  const handleSignup = (e: any) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = passwordRef.current?.value;

    if (!email) {
      setMessage("Please provide an email");
      return;
    }

    if (!username) {
      setMessage("Please provide a username");
      return;
    }

    if (!password) {
      setMessage("Please provide a password");
      return;
    }

    if (!email.match(emailRegex)) {
      setMessage("Please provide a valid email");
      return;
    }

    if (username.length < 3) {
      setMessage("Your username must be 2 characters or longer!");
      return;
    }

    if (username.length > 16) {
      setMessage("Your username must be 16 characters or shorter!");
      return;
    }

    if (!username.match(usernameRegex)) {
      setMessage("Your username must only contain numbers, letters, or underscores");
      return;
    }

    if (!password.match(passwordRegex)) {
      setMessage("Your password must be at least 8 characters, and contain at least one letter and one number.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Confirmed password is different than original password");
      return;
    }
  //Processes the HTML requests and changes the state of the page to LoggedIn (authenticates the user) when logged in 
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/users`, { email, username, password }, { withCredentials: true })
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
    <div className="signupcontainer flex flex-col">
      <h1 className="font-Gotham font-bold text-projectCyan-dark mt-12 text-3xl ">get started.</h1>
      <form className="flex flex-col mt-12">
        <div>
          <label className="inputLabel" htmlFor="email">
            email
          </label>

          <input className="inputField" ref={emailRef} type="email" id="email" name="email" />
        </div>

        <div className="mt-2">
          <label className="inputLabel" htmlFor="username">
            username
          </label>

          <input className="inputField" ref={usernameRef} type="text" id="username" name="username" />
        </div>

        <div className="mt-2">
          <label className="inputLabel" htmlFor="password">
            password
          </label>

          <input className="inputField" ref={passwordRef} type="password" id="password" name="password" />
        </div>
        <div className="mt-2">
          <label className="inputLabel" htmlFor="username">
            confirm password
          </label>

          <input className="inputField" ref={confirmPasswordRef} type="password" id="confirm-password" name="confirm-password" />
        </div>

        <button className="font-Nunito font-bold py-2 px-10 rounded bg-gradient-to-br from-pink to-beige border-none text-white duration-150 hover:from-pinkBright hover:to-beigeBright mt-10" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
      {message ? <p className="w-full font-Nunito text-red text-xs mt-6 font-normal">{message}</p> : null}
    </div>
  );
};

//Exporting the form for rendering
export default SignUpForm;
