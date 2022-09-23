import React from 'react';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {VStack} from "@chakra-ui/react";
import {NavBar} from "../Components/NavBar";
import "../App";

const Launch = () => {
    const location = useLocation();
    console.log(location.wentBack);
    return (
      <div>
        <NavBar></NavBar>
      <VStack spacing={35}>
          <VStack>
            <header className="Logo-Text"> Re-Waste </header>
            <p className="Logo-subText"> Your Virtual Junkyard! </p>
          </VStack>
      </VStack>
      </div>
    );
}
export default Launch;
