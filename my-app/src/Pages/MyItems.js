import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import {Button} from "../Components/Button";
import "../App";

export const MyItems = () => {
  return (
    <div>
    <h1>my items</h1>
    <Button text="Add Item"></Button>
      <NavBar></NavBar>
    </div>
  );
};