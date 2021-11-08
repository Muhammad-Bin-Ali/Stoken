import React, { StrictMode } from "react";
import { render } from "react-dom";
import Routes from "./Routes";
import "./tailwind.generated.css";
import { createGlobalState } from "react-hooks-global-state";

interface GlobalState {
  isLoggedIn: boolean;
}

const initialState: GlobalState = {
  isLoggedIn: false,
};

export const { useGlobalState } = createGlobalState<GlobalState>(initialState);

const jsx = (
  <StrictMode>
    <Routes />
  </StrictMode>
);

render(jsx, document.getElementById("root"));
