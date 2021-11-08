import React, { useState, useEffect } from "react";
import { Token, useGlobalState } from "../..";
import RecentToken from "../components/RecentToken";
import axios from "axios";

const RecentTokenComponent: React.FC = () => {
  const [tokens, setTokens] = useGlobalState("tokens");

  if (tokens.length < 1) {
    return (
      <div>
        <p>No recent tokens created, try creating one!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 item-center justify-items-center gap-x-10 mt-8">
      {tokens.slice(-3).map((token) => {
        return <RecentToken key={token.id} token={token} />;
      })}
    </div>
  );
};

export default RecentTokenComponent;
