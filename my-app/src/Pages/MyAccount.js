import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VStack, Input } from "@chakra-ui/react";
import { Stack} from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import { Button } from "../Components/Button";
import { Text } from "@chakra-ui/react";
import userprof from "../Images/userimage.webp"

import "../App";

export const MyAccount = () => {
  return (
    <div>
      <h1 className=".PageHeaderText">MY ACCOUNT</h1>
      {/* feed should generate here */}

      <VStack spacing = {20}>
          <VStack spacing={10}>
        <img alt="Profile image" class="profile image" src={userprof} className="ProfileImage"></img>           
          <Button text="edit profile"></Button>
        </VStack>
        <Link to="/ItemsRequested">
            <Button text="Items Requested"></Button>
          </Link>
          <Link to="/Resources">
            <Button text="Resources"></Button>
          </Link>
        <NavBar></NavBar>
      </VStack>
    </div>
  );
};
