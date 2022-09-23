import React from "react";
import "../App.css";

export const Image = (props) => {
    return(
        <div>
            <img src={props.source} alt="image description" width="500" height="600"></img>
        </div>
    )
};