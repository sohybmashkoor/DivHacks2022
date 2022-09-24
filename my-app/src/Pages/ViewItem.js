import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VStack , Text} from "@chakra-ui/react";
import { Button } from "../Components/Button";
import "../App";

export const ViewItem = () => {
  let objectUrl = localStorage.getItem("itemUrl");
  let objectName = localStorage.getItem("itemName");
  let objectDesc = localStorage.getItem("itemDescription");

  return (
    <div>
      <h1 className=".PageHeaderText"> VIEW ITEM</h1>
      <VStack spacing={10}>
        <img alt="item image" className="TilePhoto" src={objectUrl} key="" />t
        <Text className="UploadName">
            {objectName}
          </Text>
          <Text className="UploadDescription" fontSize="4xl">
            {objectDesc}
          </Text>
        <Link to="/Browse">
          <Button text="Request Item"></Button>
        </Link>
        <Link to="/Browse">
          <Button text="Cancel"></Button>
        </Link>
      </VStack>
    </div>
  );
};
