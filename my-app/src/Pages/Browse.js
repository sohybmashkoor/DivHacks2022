import React from "react";
import { Link } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import { Button } from "../Components/Button";
import { ViewItem } from "./ViewItem";
import { Text } from "@chakra-ui/react";
import userprof from "../Images/userimage.webp";
import { useState } from "react";
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
  let feed2 = [obj1, obj2, obj3, obj4, obj5];

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
      {/* feed should generate here */}

      <VStack spacing={250}>
        <VStack spacing={10}>
          <Text className="UploadName" fontSize="4xl">
            Search
          </Text>
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
          ;<NavBar></NavBar>
        </VStack>
      </VStack>
    </div>
  );
};
