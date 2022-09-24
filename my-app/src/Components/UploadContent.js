import React from "react";
import "../App";
import { VStack, HStack, Text } from "@chakra-ui/react";
import { Button } from "./Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { addItem } from "../services/appwriteConfig";

export const UploadContent = (props) => {
  const [itemName, setitemName] = useState("");
  const [itemImage, setitemImage] = useState("");
  const [itemImageURL, setitemURL] = useState("");
  const [itemDescription, setitemDescription] = useState("");
  const [itemUser, setitemUser] = useState(""); //this can be set to whatever the user that is logged in during our demo is.

  const handleItemAndAddToDB = async () => {
    console.log("handleItemAndAddToDB has been called. ");

    let item = {
      name: itemName,
      image: itemImage,
      url: itemImageURL,
      description: itemDescription,
      user: itemUser,
    };

    console.log("image is " + itemImage);

    try {
      addItem();
    } catch (error) {
      console.log(error);
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setitemImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>
      <VStack spacing={50}>
        {/* put image name, make it editable */}

        {/* text area for name */}
        <textarea
          placeholder="Name"
          className="UploadName"
          onChange={(e) => setitemName(e.target.value)}
          value={itemName}
        />

        <VStack spacing={5}>
          {/* <input
            type="file"
            onChange={onImageChange}
            className="filetype"
            id="group_image"
          /> */}

          <textarea
            placeholder="Image URL"
            className="UploadItemURL"
            onChange={(e) => setitemImage(e.target.value)}
            value={itemImage}
            
          />  
          <img className="UploadItemPhoto" id="target" src={itemImage} alt="" />
        </VStack>

        <VStack spacing={3}>
          <Text fontSize="2xl" as="b">
            Description:{" "}
          </Text>
          <textarea
            placeholder="Add your description"
            className="UploadDescription"
            onChange={(e) => setitemDescription(e.target.value)}
            value={itemDescription}
          />
        </VStack>
        <HStack>
          <Link to="/MyItems">
            <Button text="Save" onClick={handleItemAndAddToDB}>
              {" "}
            </Button>
          </Link>
          <Link to="/MyItems">
            <Button text="Cancel"></Button>
          </Link>
        </HStack>
      </VStack>
    </div>
  );
};
