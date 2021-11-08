import React, { useState } from "react";
import PastToken from "./PastToken";

interface Token {
  name: string;
  symbol: string;
  date: string;
  id: number;
  supply: number;
  decimal: number;
}

interface RecentTokenProps {
  token: Token[];
}

const PastTokensCreatedComponent: React.FC = ({}) => {
  const [tokensArray, setTokens] = useState([
    //link your little data stuff here this is for display
    {
      name: "First Aid Certification",
      symbol: "FAC",
      date: "10/09/2021",
      id: 0,
      supply: 1,
      decimal: 0,
    },
    {
      name: "First Aid Certification",
      symbol: "FAC2",
      date: "10/09/2021",
      id: 1,
      supply: 3,
      decimal: 0,
    },
    {
      name: "First Aid Certification",
      symbol: "FAC2",
      date: "10/09/2021",
      id: 3,
      supply: 3,
      decimal: 0,
    },
    {
      name: "First Aid Certification",
      symbol: "FAC2",
      date: "10/09/2021",
      id: 4,
      supply: 3,
      decimal: 0,
    },
  ]);

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

      {tokensArray.map((Token: Token) => {
        return <PastToken key={Token.id} token={Token} />;
      })}
    </div>
  );
};

export default PastTokensCreatedComponent;
