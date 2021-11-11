import React, { useEffect, useState } from "react";
import RecentTokenComponent from "../components/RecentTokenComponent";
import CreateToken from "../components/CreateToken";
import PastTokensCreatedComponent from "../components/PastTokensCreatedComponent";
import { useGlobalState, Token } from "../..";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Dashboard: React.FC = () => {
  const [openCreateToken, setOpen] = useState(false); //state variable for whether the sidebar is open or not
  const [isLoggedIn, setIsLoggedIn] = useGlobalState("isLoggedIn"); //global state variable for whether user is authenticated or not
  const [tokens, setTokens] = useGlobalState("tokens"); //global state variable that contains array of tokens that server returns
  const history = useHistory();

  //method that's run whenever this component is rendered/rerendered
  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn]);

  //same as above but this one retrieves user's tokens from address
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/getTokens`, { withCredentials: true })
      .then((res) => {
        const data: any = res.data;
        const newTokens: Token[] = data.tokens;

        console.log(newTokens);
        setTokens(newTokens); //adding it to state variable
        setIsLoggedIn(true);
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          console.log("401 :)");
          setIsLoggedIn(false);
        }
      });
  }, []);

  //function for closing sideBar - setter method
  const onCloseFunc = () => {
    setOpen(false);
  };

  //function for opening it - setter method
  const openSideBar = () => {
    setOpen(true);
  };

  return (
    //code for the dashbord page
    //acts as the main HTML element that contains all dashbaord components
    <div className="2xl:mx-96 2xl:mx-72 xl:mx-64 lg:mx-52 sm:mx-32 mt-20 ">
      <div className="flex justify-between items-center ">
        <h1 className="font-Gotham font-bold uppercase text-projectCyan text-3xl inline-block">Dashboard</h1>
        <button onClick={openSideBar} className="actionButton px-7 inline-block">
          Create Token
        </button>
      </div>
      <h2 className="font-Nunito font-bold text-projectCyan-light text-xl mt-12">Recent Tokens</h2>
      <RecentTokenComponent />
      <CreateToken open={openCreateToken} onClose={onCloseFunc} />
      <h2 className="font-Nunito font-bold text-projectCyan-light text-xl mt-12">Past Tokens Created</h2>
      <PastTokensCreatedComponent />
    </div>
  );
};

export default Dashboard;
