import React, { StrictMode } from "react";
import { render } from "react-dom";
import Routes from "./Routes";
import "./tailwind.generated.css";
import { createGlobalState } from "react-hooks-global-state";

export interface Token {
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
  tokens: Token[];
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
