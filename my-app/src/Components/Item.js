import React from "react";
import "../App.css";

export const Item = (props) => {
  return (
    <div>
        <button className = "Tile" onClick={props.onClick} >
         {props.text}

        </button>
    </div>
  );
};

export default Item;
