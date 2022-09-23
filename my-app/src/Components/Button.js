import React from "react";
import { Box } from "@chakra-ui/react";
import "../App.css";

export const Button = (props) => {
  return (
    <div>
      <Box
        as="button"
        type="submit"
        className="Button"
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

export default Button;
