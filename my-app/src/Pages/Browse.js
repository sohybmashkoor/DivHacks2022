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
  let feed = [
    "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91bLZ_uuyT35AFwAb_dwQ9k9XgOAdy296g47XGCNF&s",
    "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg",
    "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg",
  ];
  console.log(feed.length);
  let numRows = feed.length / 2;
  if (feed.length % 2 == 1) {
    numRows = numRows + 1;
  }

  const passPostToViewItem = (image) => {
    console.log("passPostToViewItem is running");
    setPostChosen(image);
    console.log(image);
    localStorage.setItem("imageUrl", image);
    console.log(localStorage.getItem("imageUrl"));
  };

  return (
    <div>
      <h1 className=".PageHeaderText">BROWSE ITEMS</h1>
      {/* feed should generate here */}

      <VStack spacing={250}>
        <VStack spacing={10}>
          <Text className="" fontSize="4xl">Search</Text>
          {feed.map((url) => (
            <Link to="/ViewItem">
              <button type="button" onClick={(e) => passPostToViewItem(url)}>
                <img alt="image" className="TilePhoto" src={url} key={url} />
              </button>
            </Link>
          ))}
          ;<NavBar></NavBar>
        </VStack>
      </VStack>
    </div>
  );
};
