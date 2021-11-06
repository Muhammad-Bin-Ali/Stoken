import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./tailwind.generated.css";

import Routes from "./Routes";

const jsx = (
  <StrictMode>
    <Routes />
  </StrictMode>
);

render(jsx, document.getElementById("root"));
