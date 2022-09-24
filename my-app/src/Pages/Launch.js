import React from "react";
import { Link } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import { Button } from "../Components/Button";
import { getAllItems2, databases } from "../services/appwriteConfig";
import ecycle from "../Images/ecycle.png";
import "../App";
import { useState, useEffect } from "react";

const Launch = () => {
  //const location = useLocation();
  //console.log(location.wentBack);
  //let arr = getAllItems2();
  //console.log(arr);


  return (
    <div>
      <VStack spacing={35}>
        <VStack>
          <br />
          <header className="Logo-Text"> eCycle </header>
          <p className="Logo-subText"> Your Virtual Junkyard! </p>
        </VStack>
      </VStack>

      <VStack spacing={300}>
        <VStack spacing={10}>
          <img
            alt="Profile image"
            class="profile image"
            src={ecycle}
            className="LogoImage"
          ></img>
          <Link to="/Browse">
            <Button text="Sign In" />
          </Link>
          <Link to="/Browse">
            <Button text="Register" />
          </Link>
        </VStack>
      </VStack>
    </div>
  );
};
export default Launch;
