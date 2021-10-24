import React from "react";
import loginHandler from "../../util/loginHandler";

export interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Header;
