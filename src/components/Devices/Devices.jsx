import React from "react";
import "./Devices.css";
import Cards from "../Cards/Cards";
import { Icon } from "@iconify/react";
import Main_page from "../Main_page/Main_page";

function Content() {
  const [data, setData] = React.useState("");

  const cards = [
    {
      Heading: "M1 Display Gateway",
      name: "Brent-EP1",
      id1: "(CBC839AC8FF44619AC4B19FE5A61A611)",
      id2: "(CBC839AC8FF44619AC4B19FE5A61A691)",
      pole: "Pole-1",
    },

    {
      Heading: "M2 Display Gateway",
      name: "Brent-EP2",
      id1: "(CBC839AC8FF44619AC4B19FE5A61A622)",
      id2: "(CBC839AC8FF44619AC4B19FE5A61A692)",
      pole: "Pole-2",
    },

    {
      Heading: "M3 Display Gateway",
      name: "Brent-EP3",
      id1: "(CBC839AC8FF44619AC4B19FE5A61A633)",
      id2: "(CBC839AC8FF44619AC4B19FE5A61A693)",
      pole: "Pole-3",
    },
    {
      Heading: "M4 Display Gateway",
      name: "Brent-EP4",
      id1: "(CBC839AC8FF44619AC4B19FE5A61A644)",
      id2: "(CBC839AC8FF44619AC4B19FE5A61A694)",
      pole: "Pole-4",
    },
  ];

  const itemsre = cards.map((value, index) => {
    return (
      <div key={index}>
        <Cards
          heading={value.Heading}
          name={value.name}
          id1={value.id1}
          id2={value.id2}
          pole={value.pole}
        />
        <br />
      </div>
    );
  });

  const SearchItems = (searchValue) => {
    const Filtereddata = cards.filter((item) => {
      if (searchValue === "") {
        return;
      }
      if (
        item.Heading.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.id1.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.id2.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.pole.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return item;
      }
    });
    console.log(Filtereddata);
  };

  return (
    <>
      <Main_page />
      <div className="Headings">
        <h1 className="D-g">Devices Group</h1>
      </div>
      <div className="button-container">
        <div className="Search">
          <form action="">
            <input
              onChange={(e) => SearchItems(e.target.value)}
              className="Input-style"
            />

            <Icon className="icon" icon="flat-color-icons:search" />
          </form>
        </div>

        <button className="btn"> + Create New Group</button>
      </div>
      <div className="Container">{itemsre}</div>
    </>
  );
}

export default Content;
