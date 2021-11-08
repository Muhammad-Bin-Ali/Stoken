import React, { useState, useEffect } from "react";
import RecentToken from "../components/RecentToken";

const RecentTokenComponent: React.FC = () => {
  const [recentTokens, setRecentTokens] = useState([
    {
      name: "Test Data 1",
      symbol: "TDA1",
      date: "10th September 2021",
      id: 0,
    },
    {
      name: "Test Data 2",
      symbol: "TDA2",
      date: "10th September 2021",
      id: 1,
    },
    {
      name: "Test Data 3",
      symbol: "TDA3",
      date: "10th September 2021",
      id: 2,
    },
  ]);

  const getFormattedTokens = () => {
    return recentTokens.map((Token) => {
      return <RecentToken key={Token.id} token={Token} />;
    });
  };

  return <div className="grid grid-cols-3 item-center justify-items-center gap-x-10 mt-8">{getFormattedTokens}</div>;
};

export default RecentTokenComponent;
