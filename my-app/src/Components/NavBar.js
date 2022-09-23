import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import {Button} from "./Button";
import { Box, Flex } from "@chakra-ui/react"
import "../App.css";

export const NavBar = () => {
  return (
    <div>
        <VStack spacing = {10}>
      <HStack spacing={10}>
        <Link to="/Browse">
          <Button text="Browse"></Button>
        </Link>
        <Link to="/MyItems">
        <Button text="My Items"></Button>
        </Link>
        <Link to="/Account">
            <Button text="Account"></Button>
        </Link>


      </HStack>
      </VStack>
    </div>
  );
};


