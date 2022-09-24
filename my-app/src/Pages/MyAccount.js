import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { Stack} from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import { Button } from "../Components/Button";
import { Text } from "@chakra-ui/react";
import userprof from "../Images/userimage.webp"
import "../App";

export const MyAccount = () => {
  // const {
  //   isEditing,
  //   getSubmitButtonProps,
  //   getCancelButtonProps,
  //   getEditButtonProps,
  // } = useEditableControls()

  // return isEditing ? (
  //   <ButtonGroup justifyContent='center' size='sm'>
  //     <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
  //     <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
  //   </ButtonGroup>
  // ) : (
  //   <Flex justifyContent='center'>
  //     <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
  //   </Flex>
  // )
  // }

  return (
    <div>
      <h1 className=".PageHeaderText">My Account</h1>
      {/* feed should generate here */}

      <VStack spacing = {100}>
          <VStack spacing={10}>
          {/* <Editable
      textAlign='center'
      defaultValue='Rasengan ⚡️'
      fontSize='2xl'
      isPreviewFocusable={false}
    >
      <EditablePreview />
      {/* Here is the custom input */}
      {/* <Input as={EditableInput} />
      <EditableControls />
    </Editable> */} */

        <img alt="Profile image" class="profile image" src={userprof} className="ProfileImage"></img>           
          <Button text="edit profile"></Button>
        </VStack>
        <Link to="/ItemsRequested">
            <Button text="Items Requested"></Button>
          </Link>
        <NavBar></NavBar>
      </VStack>
    </div>
  );
};
