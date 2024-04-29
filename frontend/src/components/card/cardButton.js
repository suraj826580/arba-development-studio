import React, { useState } from "react";
import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CountButton = ({ toggleCounter, settoggleCounter }) => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      settoggleCounter(false);
    }
  };

  return (
    <>
      {!toggleCounter ? (
        <Button
          w={"100%"}
          colorScheme="linkedin"
          onClick={() => {
            settoggleCounter(true);
          }}>
          Add to Cart
        </Button>
      ) : (
        <Button colorScheme="linkedin" w={"100%"} mt={"2"}>
          <HStack display={"flex"} justifyContent={"space-between"} w={"100%"}>
            <Box as="button" onClick={decrementCount} disabled={count === 0}>
              <AiOutlineMinus />
            </Box>
            <Text>{count}</Text>
            <Box as="button" onClick={incrementCount}>
              <AiOutlinePlus />
            </Box>
          </HStack>
        </Button>
      )}
    </>
  );
};

export default CountButton;
