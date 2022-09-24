import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VStack, Text } from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import "../App";

export const Resources = () => {
  return (
    <div>
    <h1 className=".PageHeaderText"> Resources </h1>
    <VStack spacing={10}>
      <Text className="Small-Text">
      Below we have listed some helpful online resources to learn more about electronic waste and its adverse effects on the enviroment.
      </Text>
      <a href="https://www.ewaste1.com/what-is-e-waste/#important" rel="noreferrer" className="Medium-Text">
      What is e-Waste?
      </a>
      <Text className="Small-Text">
      Basic explantion defining electronic waste and its enviromental significance
      </Text>
      <a href="https://www.cleanup.org.au/e-waste" rel="noreferrer" className="Medium-Text">
      Cleaning up e-Waste
      </a>
      <Text className="Small-Text">
      Guide on how to properly dispose of e-waste and steps you can take to minimize your e-waste
      </Text>
      <a href="https://globalewaste.org/map/" rel="noreferrer" className="Medium-Text">
      Global e-Waste
      </a>
      <Text className="Small-Text">
      World map depicting statistic of e-waste generated and collected per capita
      </Text>
      </VStack>


      <NavBar></NavBar>
    </div>
  );
};