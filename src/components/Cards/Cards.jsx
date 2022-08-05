import React from "react";
import "./Cards.css";
function Cards(props) {
  return (
    <>
      <div className="Cards">
        <h3 className="heading">{props.heading}</h3>
        <hr className="hr1" />
        <ol>
          <li>{props.name}</li>
          <li>{props.id1}</li>
          <li>{props.id2}</li>
          <li>{props.pole}</li>
        </ol>
      </div>
    </>
  );
}

export default Cards;
