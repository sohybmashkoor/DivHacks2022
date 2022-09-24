import React from "react";
import { Link } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import { Button } from "../Components/Button";
import { getAllItems2, databases } from "../services/appwriteConfig";
import "../App";
import { useState, useEffect } from "react";

const Launch = () => {
  //const location = useLocation();
  //console.log(location.wentBack);
  //let arr = getAllItems2();
  //console.log(arr);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const getAllItems = () => {
      //let listOfItems;
      const promise = databases.listDocuments("site-data", "all-items");

      promise.then(
        function (response) {
          setFeed(response);
          console.log("below is list of feed: ");
          console.log(feed);
          //console.log(response); // Success
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    };
    if (feed.length == 0) {
      getAllItems();
    }
  });

  console.log(feed);

  return (
    <div>
      <VStack spacing={35}>
        <VStack>
          <header className="Logo-Text"> eCycle </header>
          <p className="Logo-subText"> Your Virtual Junkyard! </p>
        </VStack>
      </VStack>

      <VStack spacing={300}>
        <VStack spacing={10}>
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
