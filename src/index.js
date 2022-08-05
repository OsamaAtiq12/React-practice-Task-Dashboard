import React from "react";

import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Myroutes from "./components/Myroutes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Myroutes />
    </BrowserRouter>
  </React.StrictMode>
);
