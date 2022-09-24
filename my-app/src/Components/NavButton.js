import React from "react";
import { Box } from "@chakra-ui/react";
import "../App.css";

export const NavButton = (props) => {
  return (
    <div>
      <Box
        as="button"
        type="submit"
        className="NavButton"
        _hover={{ bg: "#8b9eb0", transform: "scale(1.1)" }}
        _active={{
          transform: "scale(0.95)",
        }}
      >
        {props.text}
      </Box>
    </div>
  );
};

export default NavButton;
