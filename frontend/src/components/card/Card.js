import React, { useState } from "react";
import { Box, Button, GridItem, Heading, Text } from "@chakra-ui/react";
import CountButton from "./cardButton";

const ImageTextCard = ({ imageUrl, productName, description, amount }) => {
  const [toggleCounter, settoggleCounter] = useState(false);
  return (
    <GridItem
      w="100%"
      marginBottom={20}
      h={"200px"}
      // w={"200px"}
      borderRadius="lg"
      // overflow="hidden"
      position={"relative"}>
      {/* Top Half */}
      <Box h="50%">
        <Box
          bgImage={`url(${imageUrl})`}
          bgSize="cover"
          bgPos="center"
          h="120%"
        />
      </Box>

      {/* Bottom Half */}
      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Box
          boxShadow="2xl"
          bg="white"
          p="2"
          h={"80%"}
          width={"90%"}
          marginLeft={"40px"}
          marginRight={"40px"}
          position={"absolute"}>
          <Heading as="h2" size="md" mb="1">
            {productName}
          </Heading>
          <Text fontSize="sm" mb="1" color="gray.600">
            {description}
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="gray.600" mb="1">
            Rs. {amount}
          </Text>

          <CountButton
            toggleCounter={toggleCounter}
            settoggleCounter={settoggleCounter}
          />
        </Box>
      </Box>
    </GridItem>
  );
};

export default ImageTextCard;
