import React from "react";
import "../App.css";

export const Tile = (props) => {
  return (
    <div>
        <button className = "Tile" onClick={props.onClick} >
         {props.text}
         

        </button>
    </div>
  );
};

export default Tile;
