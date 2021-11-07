import React, { useState } from "react";
import RecentToken from "../components/RecentToken";

const RecentTokenComponent: React.FC = () => {
  const [recentTokens, setRecentTokens] = useState([
    {
      name: "Test data 1",
      symbol: "TDA1",
      date: "10th September 2021",
      id: 0,
    },
    {
      name: "Test data 2",
      symbol: "TDA2",
      date: "10th September 2021",
      id: 1,
    },
    {
      name: "Test data 3",
      symbol: "TDA",
      date: "10th September 2021",
      id: 2,
    },
  ]);

  return (
    <div className="grid grid-cols-3 item-center justify-items-center gap-x-10 mt-8">
      {recentTokens.map((Token) => {
        return <RecentToken key={Token.id} token={Token} />;
      })}
    </div>
  );
};

export default RecentTokenComponent;
