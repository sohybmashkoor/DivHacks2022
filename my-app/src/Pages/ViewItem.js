import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
// import { NavBar } from "../Components/NavBar";
import { Button } from "../Components/NavBar";
import "../App";

export const EditMyItem = () => {
  return (
    <div>
    <h1 className=".PageHeaderText">edit item</h1>
      {/* <NavBar></NavBar> */}
      <Button text="Request Item"></Button>
      <Button text="Cancel"></Button>
    </div>
  );
};