import React from "react";
import "./items.css";
import { Link } from "react-router-dom";

function Items(props) {
  return (
    <>
      <Link
        className="Link"
        to={{
          pathname: props.path,
        }}
      >
        <div className="item-area">
          <label className="icon2">{props.icon}</label>
          <label className="item">{props.iname}</label>
        </div>
      </Link>
    </>
  );
}

export default Items;
