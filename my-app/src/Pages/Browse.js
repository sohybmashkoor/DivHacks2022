import React from "react";
import { Link } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import { Button } from "../Components/Button";
import { Text } from '@chakra-ui/react';
import userprof from "../Images/userimage.webp";
import "../App";

export const Browse = () => {
  return (
    <div>
        <h1 className=".PageHeaderText">Browse Items</h1>
    {/* feed should generate here */}
    

    <VStack spacing={250}>
          <VStack spacing={10}>
            <Text fontSize='4xl'>Search</Text>

          </VStack>
          <NavBar></NavBar>
     </VStack>
      
    </div>
  );

};
