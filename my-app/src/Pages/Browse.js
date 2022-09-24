import React from "react";
import { Link } from "react-router-dom";
import { VStack, HStack } from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import { Button } from "../Components/Button";
import { ViewItem } from "./ViewItem";
import { Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { databases } from "../services/appwriteConfig";
import "../App";

export const Browse = () => {
  const [postChosen, setPostChosen] = useState("");

  let obj1 = {
    itemName: "iPhone 5",
    itemDescription: "Doesn't turn on. Some exterior damage.",
    itemUser: "",
    itemImage: "https://i.ebayimg.com/images/g/6vcAAOSwqOJiWbmP/s-l500.jpg",
  };
  let obj2 = {
    itemName: "2007 Dell Computer",
    itemDescription: "Water damage",
    itemUser: "",
    itemImage:
      "https://i.ebayimg.com/thumbs/images/g/DhoAAOSwPjBjLi65/s-l225.webp",
  };
  let obj3 = {
    itemName: "RAM Memory Chips",
    itemDescription: "About 100 chips, unsure if they work",
    itemUser: "",
    itemImage:
      "https://i.ebayimg.com/thumbs/images/g/C5oAAOSwT9ZjHimG/s-l225.webp",
  };
  let obj4 = {
    itemName: 'Sharp 13" TV',
    itemDescription: "Works perfectly, just old.",
    itemUser: "",
    itemImage:
      "https://i.ebayimg.com/thumbs/images/g/RrwAAOSwP0piqy2a/s-l225.webp",
  };
  let obj5 = {
    itemName: "Car Stereo",
    itemDescription: "No clue if it works. Trying to get rid of it.",
    itemUser: "",
    itemImage:
      "https://i.ebayimg.com/thumbs/images/g/OV4AAOSwMexiMmb5/s-l225.webp",
  };

  let feed1 = [obj1, obj2];
  let feed2 = [obj3, obj4];
  let feed3 = [obj5];

  // const [feed2, setFeed] = useState([]);

  // useEffect(() => {
  //   if (feed2 <= 0) {
  //     const getAllItems = () => {
  //       //let listOfItems;
  //       const promise = databases.listDocuments("site-data", "all-items");

  //       return promise.then(
  //         function (response) {
  //           setFeed(response);
  //           console.log("below is list of feed: ");
  //           console.log(feed2);
  //           //console.log(response); // Success
  //         },
  //         function (error) {
  //           console.log(error); // Failure
  //         }
  //       );
  //     };
  //     if (feed2.length === 0) {
  //       setFeed(getAllItems());
  //     }
  //   }
  // }, [feed2]);

  //console.log(feed2);

  const passPostToViewItem = (obj) => {
    console.log("passPostToViewItem is running");
    setPostChosen(obj);

    localStorage.setItem("itemUrl", obj.itemImage);
    localStorage.setItem("itemName", obj.itemName);
    localStorage.setItem("itemDescription", obj.itemDescription);
    localStorage.setItem("itemUser", obj.itemUser);
  };

  return (
    <div>
      <h1 className=".PageHeaderText">BROWSE ITEMS</h1>

      <VStack spacing={250}>
        <VStack spacing={10}>
          <Text className="UploadName" fontSize="4xl">
            Search
          </Text>
          <HStack spacing={10}>
          {feed1.map((obj) => (
             <Link to="/ViewItem">
             <button type="button" onClick={(e) => passPostToViewItem(obj)}>
                <img alt="image" 
                  className= "TilePhoto" 
                  src={obj.itemImage} 
                  key={obj.itemImage}/>
              </button>
              </Link>
          ))}
         </HStack>
         <HStack spacing={10}>
            {feed2.map((obj) => (
              <Link to="/ViewItem">
                <button type="button" onClick={(e) => passPostToViewItem(obj)}>
                  <img
                    alt="image"
                    className="TilePhoto"
                    src={obj.itemImage}
                    key={obj.itemImage}
                  />
                </button>
              </Link>
            ))}
          </HStack>
          <HStack spacing={10}>
            {feed3.map((obj) => (
              <Link to="/ViewItem">
                <button type="button" onClick={(e) => passPostToViewItem(obj)}>
                  <img
                    alt="image"
                    className="TilePhoto"
                    src={obj.itemImage}
                    key={obj.itemImage}
                  />
                </button>
              </Link>
            ))}
          </HStack>
          ;<NavBar></NavBar>
        </VStack>
      </VStack>
    </div>
  );
};
