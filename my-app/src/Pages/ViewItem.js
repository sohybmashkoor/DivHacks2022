import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { Button } from "../Components/Button";
import "../App";

export const ViewItem = (props) => {
  return (
    <div>
      <h1 className=".PageHeaderText"> VIEW ITEM</h1>
      <VStack spacing={10}>
      <Link to="/Browse">
        <Button text="Request Item"></Button>
        </Link>
        <Link to="/Browse">
       <Button text="Cancel"></Button>
       </Link>
      </VStack>
    </div>
  );
};