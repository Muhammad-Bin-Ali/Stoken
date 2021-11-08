import React, { StrictMode } from "react";
import { render } from "react-dom";
import Routes from "./Routes";
import "./tailwind.generated.css";

const jsx = (
  <StrictMode>
    <Routes />
  </StrictMode>
);

render(jsx, document.getElementById("root"));
