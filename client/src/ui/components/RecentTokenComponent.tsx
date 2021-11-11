import React, { useState, useEffect } from "react";
import { Token, useGlobalState } from "../..";
import RecentToken from "../components/RecentToken";//imports the 2 vars from RecentToken
import axios from "axios";

const RecentTokenComponent: React.FC = () => {
  const [tokens, setTokens] = useGlobalState("tokens");

  if (tokens.length < 1) {//if there are no tokens on the account, this default line will appear
    return (
      <div>
        <p>No recent tokens created, try creating one!</p>
      </div>
    );
  }

  return (//otherwise, the code will display the recent token using the UI set out from RecentToken.tsx
    <div className="grid grid-cols-3 item-center justify-items-center gap-x-10 mt-8">
      {tokens.slice(-3).map((token) => {
        return <RecentToken key={token.id} token={token} />;
      })}
    </div>
  );
};

export default RecentTokenComponent;
