import React from "react";
import RecentTokenComponent from "../components/RecentTokenComponent";

const Home: React.FC = () => {
  return (
    <div className="2xl:mx-96 xl:mx-72 lg:mx-64 mt-28 ">
      <div className="flex justify-between items-center ">
        <h1 className="font-Gotham font-bold uppercase text-projectCyan text-3xl inline-block">Dashboard</h1>
        <button className="actionButton px-7 inline-block">Create Token</button>
      </div>
      <h2 className="font-Nexa font-semibold text-projectCyan-light text-xl mt-12">Recent Tokens</h2>
      <RecentTokenComponent />
    </div>
  );
};

export default Home;
