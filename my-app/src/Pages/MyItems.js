import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VStack, HStack, Text} from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import {Button} from "../Components/Button";
import "../App";

export const MyItems = () => {
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

  return (
    <div>
    <h1 className = ".PageHeaderText"> MY ITEMS </h1>
    <VStack spacing = {10}>
>    <VStack spacing = {10}> 
        <HStack spacing={10}>
          {feed1.map((obj) => (
             <Link to="/MyItems">
             <button type="button"> 
                <img alt="image" className= "TilePhoto" src={obj.itemImage} key={obj.itemImage}/>
              </button>
              </Link>
          ))}
        </HStack>
        <HStack spacing={10}>
          {feed2.map((obj) => (
             <Link to="/MyItems">
             <button type="button"> 
                <img alt="image" className= "TilePhoto" src={obj.itemImage} key={obj.itemImage}/>
              </button>
              </Link>
          ))}
        </HStack>
        <HStack spacing={10}>
          {feed3.map((obj) => (
             <Link to="/MyItems">
             <button type="button"> 
                <img alt="image" className= "TilePhoto" src={obj.itemImage} key={obj.itemImage}/>
              </button>
              </Link>
          ))}
        </HStack>

        <NavBar></NavBar>
     </VStack>
     <Link to="/UploadItem">
            <Button className = "NaviButton" text="Add Item"></Button>
          </Link>
     </VStack>
    </div>
  );
};