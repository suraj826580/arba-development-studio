import React, { useState } from "react";
import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CountButton = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
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
  );
};

export default CountButton;
