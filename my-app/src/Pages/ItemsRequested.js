import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import "../App";

export const ItemsRequested = () => {
  return (
    <div>
      <h1 className=".PageHeaderText"> ITEMS REQUESTED </h1>
      <NavBar></NavBar>
    </div>
  );
};