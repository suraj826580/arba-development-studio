import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/user/updateUserSlice";
import { getUser } from "../../redux/user/userSlice";

export default function EditProfile({ isProfileOpen, onProfileClose }) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast();
  // react-hook-form
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // update the user details
  useEffect(() => {
    dispatch(getUser)
      .then((res) => res)
      .catch((err) => err);
  }, []);

  useEffect(() => {
    reset(user?.user?.user);
  }, [user]);

  const handleSubmitFunc = (data) => {
    dispatch(updateUser(data))
      .then((res) => {
        if (res.message == "Profile Updated Successfully") {
          setTimeout(() => {
            dispatch(getUser);
            onProfileClose();
          }, 1000);
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
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isProfileOpen}
        onClose={onProfileClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(handleSubmitFunc)}>
            <ModalHeader>Edit Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel> Name</FormLabel>
                      <Input {...register("fullName")} type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>User Name</FormLabel>
                      <Input {...register("userName")} type="text" />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" {...register("email")} />
                </FormControl>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" bg="#00ACC1" mr={3}>
                Update
              </Button>
              <Button onClick={onProfileClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
