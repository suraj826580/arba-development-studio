import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Text,
  HStack,
  Avatar,
  Spinner,
  AvatarGroup,
  useToast,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/registerSlice/registerSlice";

function Signup({ state, setstate }) {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const toast = useToast();
  const { isLoading, error, user, errors } = useSelector(
    (store) => store.register
  );
  const onSubmit = (data) => {
    const { password, confirmPassword } = data;
    if (password != confirmPassword) {
      alert("Both Password needs to match");
      return;
    }

    dispatch(registerUser(data))
      .then((res) => {
        if (res.message == "Registration Successful") {
          setTimeout(() => {
            setstate(!state);
          }, 1500);
          return toast({
            title: res.message,
            status: "success",
            duration: 1500,
            isClosable: true,
          });
        } else {
          return toast({
            title: res.message,
            status: "warning",
            duration: 1500,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        return toast({
          title: "Something went wrong!!",
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      });
    reset();
  };

  return (
    <Box width="100%" maxW="md" bg="white" py={8} px={4} rounded="lg">
      <AvatarGroup display={"block"} textAlign={"center"}>
        <Avatar size="lg" mb={4}></Avatar>
      </AvatarGroup>
      <Heading textAlign={"center"} mb={6}>
        APP NAME
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <Input
              {...register("userName")}
              variant="flushed"
              id="username"
              type="text"
              placeholder="Username"
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              {...register("fullName")}
              variant="flushed"
              id="fullname"
              type="text"
              placeholder="fullName"
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              variant="flushed"
              id="email"
              {...register("email")}
              type="email"
              placeholder="Email"
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              variant="flushed"
              id="password"
              {...register("password")}
              type="password"
              placeholder="Password"
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              variant="flushed"
              id="confirmPassword"
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
            />
          </FormControl>
          <Button
            colorScheme="blue"
            variant="solid"
            size="lg"
            width="full"
            type="submit">
            {!isLoading ? "Register" : <Spinner />}
          </Button>
        </VStack>
      </form>
      <HStack justifyContent="center" mt={6}>
        <Text>Already have an account?</Text>
        <Text
          onClick={() => setstate(!state)}
          color="blue.500"
          cursor={"pointer"}>
          Login
        </Text>
      </HStack>
    </Box>
  );
}

export default Signup;
