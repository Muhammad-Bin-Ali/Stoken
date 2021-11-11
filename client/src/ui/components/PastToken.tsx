import React from "react";
import { Token } from "../../index";
import { getShortDate } from "../../util/date";

interface TokenPropType {
  token: Token;
}

//retrieving env variables from .env file
const CHAIN = process.env.REACT_APP_CHAIN;
const NET_NAME = process.env.REACT_APP_NET_NAME;

const pastToken: React.FC<TokenPropType> = ({ token }) => {
  return (
    //div component for a past token object (acts as template for data passed into it)
    <div className="pastToken grid grid-cols-custom h-20 hover:shadow-md duration-100 border-b border-projectGold hover:z-30 hover:border-white items-center rounded">
      <h3 className="pastTokenLabel ml-4">{getShortDate(token.createdTimestamp)}</h3>
      <h3 className="col-span-2 pastTokenLabel">{token.name}</h3>
      <h3 className="pastTokenLabel">{token.symbol}</h3>
      <h3 className="pastTokenLabel">{token.supply}</h3>
      <h3 className="pastTokenLabel">{token.decimal}</h3>
      <button
        className="col-span-1 font-Nunito font-bold py-2 rounded mx-8 bg-gradient-to-br from-pink to-beige border-none text-white duration-150 hover:from-pinkBright hover:to-beigeBright"
        onClick={() => {
          console.log(CHAIN, NET_NAME);
          console.log(token.contactAddress);
          window.open(`https://blockscout.com/${CHAIN}/${NET_NAME}/address/${token.contactAddress}/transactions`, "_blank");
        }}
      >
        Visit Token
      </button>
    </div>
  );
};

export default pastToken;
