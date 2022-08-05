import React from "react";
import "./Devices.css";
import Cards from "../Cards/Cards";
import { Icon } from "@iconify/react";
import Main_page from "../Main_page/Main_page";

function Content() {
  let data = [
    {
      name: "Brent-EP1",
    },
    {
      name: "(CBC839AC8FF44619AC4B19FE5A61A690)",
    },

    {
      name: "(CBC839AC8FF44619AC4B19FE5A61A690)",
    },

    {
      name: "Brent-EP3",
    },
    {
      name: "(CBC839AC8FF44619AC4B19FE5A61A690)",
    },
    {
      name: "(CBC839AC8FF44619AC4B19FE5A61A690)",
    },
    {
      name: "Pole",
    },
    {
      name: "Brent-EP2",
    },
  ];
  const itemsre = data.map((value, index) => {
    return (
      <div key={index}>
        <li>{value.name}</li>
        <br />
      </div>
    );
  });
  return (
    <>
      <Main_page />
      <div className="Headings">
        <h1 className="D-g">Devices Group</h1>
      </div>
      <div className="button-container">
        <div className="Search">
          <input className="Input-style" />
          <Icon className="icon" icon="flat-color-icons:search" />
        </div>

        <button className="btn"> + Create New Group</button>
      </div>
      <div className="Container">
        <Cards data={itemsre} />
        <Cards data={itemsre} />
        <Cards data={itemsre} />
        <Cards data={itemsre} />
      </div>
    </>
  );
}

export default Content;
