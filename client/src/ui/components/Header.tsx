import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="mainHeader flex justify-between w:full 2xl:mx-64 xl:mx-60 sm:mx-32 mt-10 items-center">
      <div className="logo flex items-center">
        <svg className="w-auto h-9" width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.4997 1.72238C20.3441 0.656684 22.6171 0.656682 24.4615 1.72238L39.704 10.5297C41.5465 11.5943 42.6814 13.5607 42.6814 15.6886V33.3114C42.6814 35.4393 41.5465 37.4057 39.704 38.4703L24.4615 47.2776C22.6171 48.3433 20.3441 48.3433 18.4997 47.2776L3.25712 38.4703C1.41464 37.4057 0.279776 35.4393 0.279776 33.3114V15.6886C0.279776 13.5607 1.41464 11.5943 3.25712 10.5297L18.4997 1.72238Z"
            fill="#0E1F27"
          />
          <ellipse cx="34.1743" cy="16.3333" rx="11.7869" ry="12.7037" fill="url(#paint0_linear_0:1)" />
          <defs>
            <linearGradient id="paint0_linear_0:1" x1="6.64449" y1="-60.4938" x2="85.8165" y2="-43.9283" gradientUnits="userSpaceOnUse">
              <stop offset="0.392085" stop-color="#ED797F" />
              <stop offset="0.723958" stop-color="#EAAC89" />
            </linearGradient>
          </defs>
        </svg>

        <h1 className="font-Gotham text-projectCyan-dark font-bold ml-3">stoken.</h1>
      </div>

      <nav className="navBar">
        <a href="#" className="navLink">
          dashboard
        </a>
        <a href="#" className="navLink">
          check wallet
        </a>

        <Link to="/login" className="actionButton">
          Log in
        </Link>
      </nav>
    </div>
  );
};

export default Header;
