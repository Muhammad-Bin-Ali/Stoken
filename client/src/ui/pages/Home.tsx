import React from "react";
import verifyEmail from "../../util/verifyEmail";

const Home: React.FC = () => {
  return (
    <div>
      <p>A solution for transaction verification between students, teachers, and administrators</p>
      <button onClick={verifyEmail}>Verify Email Test</button>
    </div>
  );
};

export default Home;
