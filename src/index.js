import React from "react";
import Main_page from "./components/Main_page";
import Sidebar from "./components/Sidebar";
import ReactDOM from "react-dom";
import Items from "./components/Items";
import Content from "./components/Content";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main_page />
  </React.StrictMode>
);
