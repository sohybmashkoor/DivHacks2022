import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import { Button } from "../Components/Button";
import "../App";

export const UploadItem = () => {
  return (
    <div>
      <h1 className=".PageHeaderText"> Upload Item </h1>
      <Link to="/MyItems">
            <Button text="Cancel"></Button>
          </Link>
      <NavBar></NavBar>
    </div>
  );
};