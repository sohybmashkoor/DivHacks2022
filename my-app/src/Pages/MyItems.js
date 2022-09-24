import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VStack, HStack, Text} from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import {Button} from "../Components/Button";
import "../App";

export const MyItems = () => {
  let obj1 = {
    itemName: "Cassette Recorder",
    itemDescription: "Well used, from 1998",
    itemUser: "",
    itemImage: "https://i.ebayimg.com/images/g/QUkAAOSwNLVhuik-/s-l400.jpg",
  };
let obj2 = {
  itemName: "Chrysler Solid State Radio",
  itemDescription: "Unused",
  itemUser: "",
  itemImage:
    "https://i.ebayimg.com/images/g/j-QAAOSw08dgGuiz/s-l400.jpg",
};
let obj3 = {
  itemName: "Radio Telephone",
  itemDescription: "Cord is broken",
  itemUser: "",
  itemImage:
    "https://i.ebayimg.com/thumbs/images/g/6YQAAOSwT3ZiVISR/s-l300.webp",
};


let feed1 = [obj1, obj2];
let feed2 = [obj3];

  return (
    <div>
    <h1 className = ".PageHeaderText"> MY ITEMS </h1>
    <VStack spacing = {10}>
    <VStack spacing = {10}> 
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
        <NavBar></NavBar>
     </VStack>
     <Link to="/UploadItem">
            <Button className = "NaviButton" text="Add Item"></Button>
          </Link>
     </VStack>
    </div>
  );
};