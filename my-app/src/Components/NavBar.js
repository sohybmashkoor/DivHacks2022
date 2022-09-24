import React from "react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NavButton } from "./NavButton";
import "../App.css";

export const NavBar = () => {
  return (
    <div>
      <VStack spacing={10}>
        <HStack spacing={-2} className="NaviBar">
          <Link to="/Browse">
            <NavButton text="Browse"></NavButton>
          </Link>
          <Link to="/MyItems">
            <NavButton text="My Items"></NavButton>
          </Link>
          <Link to="/MyAccount">
            <NavButton text="Account"></NavButton>
          </Link>
        </HStack>
      </VStack>
    </div>
  );
};
