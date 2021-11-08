import axios from "axios";
import React, { useEffect, useState } from "react";
import PastToken from "./PastToken";
import { useGlobalState, Token } from "../../index";

interface RecentTokenProps {
  token: Token[];
}

const PastTokensCreatedComponent: React.FC = ({}) => {
  const [tokens, setTokens] = useGlobalState("tokens");

  if (tokens.length < 1) {
    return (
      <div>
        <p>No past tokens created, try creating one!</p>
      </div>
    );
  }

  return (
    <div className="w-full mt-8 mb-32">
      <div className="header grid grid-cols-custom mb-4">
        <h3 className="font-Gotham font-bold uppercase text-projectGold text-sm ml-4">Date</h3>
        <h3 className="col-span-2 font-Gotham font-bold uppercase text-projectGold text-sm">Name</h3>
        <h3 className="col-span-1 font-Gotham font-bold uppercase text-projectGold text-sm">Symbol</h3>
        <h3 className="font-Gotham font-bold uppercase text-projectGold text-sm">Supply</h3>
        <h3 className="font-Gotham font-bold uppercase text-projectGold text-sm">Decimal</h3>
      </div>
      <hr className="border-1 border-projectGold"></hr>

      {tokens.map((token: Token) => {
        return <PastToken key={token.id} token={token} />;
      })}
    </div>
  );
};

export default PastTokensCreatedComponent;
