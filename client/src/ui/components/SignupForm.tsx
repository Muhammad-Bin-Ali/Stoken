import axios from "axios";
import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

export const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/gm;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

//This is the React Component SignUpForm which takes in an argument for text and outputs basic UI for sing up screen
const SignUpForm: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  //Function for when the button is clicked (routes to the account creation/storage scripts)
  const handleSignup = (e: any) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email) {
      setMessage("You need to provide an email!");
      return;
    }

    if (!username) {
      setMessage("You need to provide a username!");
      return;
    }

    if (!password) {
      setMessage("You need to provide a password!");
      return;
    }

    if (!email.match(emailRegex)) {
      setMessage("You need to provide a valid email!");
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

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/users`, { email, username, password }, { withCredentials: true })
      .then((res) => {
        const data: any = res.data;
        console.log(data.message);

        history.push("/");
      })
      .catch((err) => {
        const data: any = err.response.data;
        setMessage(data.message);
      });
  };
  //The HTML attributes/elements for creating the basic parts of the UI and uses props for button (as the text and the onClick function changes)
  return (
    <div className="signupcontainer">
      <form>
        <h1>Sign Up Form</h1>
        <label htmlFor="username">Email:</label>
        <br></br>
        <input ref={emailRef} type="text" id="email" name="email" />
        <br></br>
        <label htmlFor="username">Username:</label>
        <br></br>
        <input ref={usernameRef} type="text" id="username" name="username" />
        <br></br>
        <label htmlFor="password">Password:</label>
        <br></br>
        <input ref={passwordRef} type="password" id="password" name="password" />
        <br></br>
        <button className="btn" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
      {message ? <p>{message}</p> : null}
    </div>
  );
};

//Exporting the form for rendering
export default SignUpForm;
