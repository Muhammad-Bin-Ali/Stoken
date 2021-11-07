import React, { useState } from "react";
import RecentTokenComponent from "../components/RecentTokenComponent";
import CreateToken from "../components/CreateToken";

const Home: React.FC = () => {
  const [openCreateToken, setOpen] = useState(false);

  const onCloseFunc = () => {
    setOpen(false);
  };

  const openSideBar = () => {
    setOpen(true);
  };

  return (
    <div className="2xl:mx-96 2xl:mx-72 xl:mx-64 lg:mx-52 sm:mx-32 mt-28 ">
      <div className="flex justify-between items-center ">
        <h1 className="font-Gotham font-bold uppercase text-projectCyan text-3xl inline-block">Dashboard</h1>
        <button onClick={openSideBar} className="actionButton px-7 inline-block">
          Create Token
        </button>
      </div>
      <h2 className="font-Nunito font-semibold text-projectCyan-light text-xl mt-12">Recent Tokens</h2>
      <RecentTokenComponent />
      <CreateToken open={openCreateToken} onClose={onCloseFunc} />
    </div>
  );
};

export default Home;
