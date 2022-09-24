import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VStack, HStack, Text} from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import { Button } from "../Components/Button";
import { UploadContent } from "../Components/UploadContent";
import "../App";



export const UploadItem = () => {
 

  return (
    <div>
      <h1 className=".PageHeaderText"> UPLOAD ITEM </h1>
      <VStack spacing={70}>

    
          <UploadContent> </UploadContent>
      
      </VStack>
    </div>
  );
};
