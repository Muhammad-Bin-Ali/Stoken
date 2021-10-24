import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        Click <Link to="/">here</Link> to go back to the homepage.
      </p>
    </div>
  );
};

export default NotFound;
