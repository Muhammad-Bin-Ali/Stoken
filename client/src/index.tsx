import React, { StrictMode } from "react";
import { render } from "react-dom";
import Routes from "./Routes";
import "./tailwind.generated.css";
import { createGlobalState } from "react-hooks-global-state";

export interface Token { //Creates token values that will need to be stored on the site
  name: string;
  symbol: string;
  createdTimestamp: string;
  id: string;
  supply: number;
  decimal: number;
  contactAddress: string;
}

interface GlobalState {
  isLoggedIn: boolean;
  tokens: Token[];//Creates tokens prop which is used in scripts such as 'pastToken.tsx'. The values of the tokens are stored clientside to ensure that the code does not access a user's wallet to find such values, as that warrants a security risk
  //with the values being stored here, it allows for a more secure program at minimal cost
}

const initialState: GlobalState = {
  isLoggedIn: false,
  tokens: [],
};

export const { useGlobalState } = createGlobalState<GlobalState>(initialState);

const jsx = (
  <StrictMode>
    <Routes />
  </StrictMode>
);

render(jsx, document.getElementById("root"));
