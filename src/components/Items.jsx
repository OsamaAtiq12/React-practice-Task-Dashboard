import React from "react";
import "./items.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  fasrep,
} from "@fortawesome/fontawesome-free-solid";
function Items(props) {
  return (
    <>
      <div className="item-area">
        <label>
          <FontAwesomeIcon className="icon2" icon={props.icon} />
        </label>
        <label className="item">{props.iname}</label>
      </div>
    </>
  );
}

export default Items;
