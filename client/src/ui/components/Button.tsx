import React from "react";
//Props for the Button text because that changes across the Sign-Up and Log-In Forms and the onClick function for the authentication methods to happen after the button is clicked

interface Props {
  text: string;
  onClick?: () => void;
}

//The button component shared between the login page and sing up page, changes text and onClick function based on the props
const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

//Exporting the form for rendering
export default Button;
