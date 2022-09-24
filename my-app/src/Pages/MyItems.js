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
    <h1 className = ".PageHeaderText"> MY ITEMS </h1>
    <VStack spacing = {300}> 
        <VStack spacing={10}>
            {/* Display items from database */}
          <Link to="/UploadItem">
            <Button text="Add Item"></Button>
          </Link>
        </VStack>
        <NavBar></NavBar>
     </VStack>
    </div>
  );
};