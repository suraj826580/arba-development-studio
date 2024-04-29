import { Box } from "@chakra-ui/react";
import React from "react";

function BlueCard() {
  return (
    <Box position="relative" height="100vh" bg="#00ACC1" overflow={"hidden"}>
      <Box
        bg="#00838F"
        borderRadius="full"
        width="400px"
        height="400px"
        position="absolute"
        top="-100"
        left="-100"
      />
      <Box
        bg="#00838F"
        borderRadius="full"
        width="400px"
        height="400px"
        position="absolute"
        right="-100"
        bottom="-100"
      />
    </Box>
  );
}

export default BlueCard;
