import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import "../App";

export const Browse = () => {
  return (
    <div>
        <h1 className=".PageHeaderText">Browse Items</h1>
    {/* feed should generate here */}

    <VStack spacing = {500}>
        <
          <VStack spacing={200}>
          </VStack>
          <NavBar></NavBar>
        </VStack>
      
    </div>
  );
};
