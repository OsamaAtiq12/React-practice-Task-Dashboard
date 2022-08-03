import React from "react";
import Items from "./Items";
import Content from "./Content";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/fontawesome-free-solid";

function Main_page() {
  let items = [
    {
      name: "Sences",
      icon: faEdit,
    },
    {
      name: "Schedule",
      icon: faEdit,
    },

    {
      name: "Devices",
      icon: faEdit,
    },

    {
      name: "Gateways",
      icon: faEdit,
    },
    {
      name: "Users",
      icon: faEdit,
    },
    {
      name: "Debugging",
      icon: faEdit,
    },
    {
      name: "Firmware",
      icon: faEdit,
    },
    {
      name: "Report",
      icon: faEdit,
    },
  ];

  const itemsre = items.map((value, index) => {
    return <Items iname={value.name} icon={value.icon} />;
  });
  return (
    <>
      <h1 className="repo-issue">Report Issue</h1>
      <div class="sidenav">
        <div className="heading">
          <pre className="name"> Syed Talha Hassan</pre>
          <FontAwesomeIcon className="icon1" icon={faEdit} />
        </div>
        {itemsre}

        <div className="logout">
          <Items iname="User Manual" icon={faEdit} />;
          <Items iname="Logout" icon={faEdit} />;
        </div>
        <hr />
        <p className="ver">version 1.0.0</p>
      </div>
      <Content />
    </>
  );
}

export default Main_page;
