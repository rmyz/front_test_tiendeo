import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import { StoreProvider } from "./store";
import "./index.css";

ReactDOM.render(
  <StoreProvider>
    <Home />
  </StoreProvider>,
  document.getElementById("root")
);
