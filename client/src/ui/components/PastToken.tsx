import React from "react";
import { Token } from "../../index";

interface TokenPropType {
  token: Token;
}

const CHAIN = process.env.REACT_APP_CHAIN;
const NET_NAME = process.env.REACT_APP_NET_NAME;

const pastToken: React.FC<TokenPropType> = ({ token }) => {
  return (
    <div className="pastToken grid grid-cols-custom h-20 hover:shadow-md duration-100 border-b border-projectGold hover:z-30 hover:border-white items-center rounded">
      <h3 className="pastTokenLabel">{new Date(token.createdTimestamp).toUTCString()}</h3>
      <h3 className="col-span-2 pastTokenLabel">{token.name}</h3>
      <h3 className="pastTokenLabel">{token.symbol}</h3>
      <h3 className="pastTokenLabel">{token.supply}</h3>
      <h3 className="pastTokenLabel">{token.decimal}</h3>
      <button
        className="col-span-1 font-Nunito font-bold py-2 rounded mx-8 bg-gradient-to-br from-pink to-beige border-none text-white duration-150 hover:from-pinkBright hover:to-beigeBright"
        onClick={() => {
          window.location.href = `https://blockscout.com/${CHAIN}/${NET_NAME}/address/${token.contactAddress}`;
        }}
      >
        Visit Token
      </button>
    </div>
  );
};

export default pastToken;
