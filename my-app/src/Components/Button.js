import React from "react";
import "../App.css";

export const Button = (props) => {
  return (
    <div>
        <button className = "Button" onClick={props.onClick} >
         {props.text}

        </button>
    </div>
  );
};

export default Button;
