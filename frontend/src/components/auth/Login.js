import React from "react";
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
  AvatarGroup,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { loginUserAsync } from "../../redux/loginSlice/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login({ state, setstate }) {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.login);
  const toast = useToast();
  const onSubmit = (data) => {
    dispatch(loginUserAsync(data))
      .then((res) => {
        if (res.message == "Login successful") {
          setTimeout(() => {
            //pending for navigate
            navigate("/homepage");
          }, 1500);
          return toast({
            title: res.message,
            status: "success",
            duration: 1500,
            isClosable: true,
          });
        } else {
          return toast({
            title: res.error,
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
              {...register("password")}
              variant="flushed"
              id="password"
              type="password"
              placeholder="password"
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            variant="solid"
            size="lg"
            width="full">
            {!isLoading ? "Login" : <Spinner />}
          </Button>
        </VStack>
      </form>
      <HStack justifyContent="center" mt={6}>
        <Text>Don't have an account?</Text>
        <Text
          cursor={"pointer"}
          onClick={() => setstate(!state)}
          color="blue.500">
          Sign up
        </Text>
      </HStack>
    </Box>
  );
}

export default Login;
