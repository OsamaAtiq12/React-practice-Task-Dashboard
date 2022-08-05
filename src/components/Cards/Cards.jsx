import React from "react";
import "./Cards.css";
function Cards(props) {
  return (
    <>
      <div className="Cards">
        <h3 className="heading">M3 Display Gateway</h3>
        <hr className="hr1" />
        <ol>{props.data}</ol>
      </div>
    </>
  );
}

export default Cards;
