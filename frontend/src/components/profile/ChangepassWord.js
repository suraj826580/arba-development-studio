import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
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
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword } from "../../redux/changepasswordSlice/changepasswordSlice";

function ChangepassWord({
  isPasswordChangeOpen: isProfileOpen,
  onPasswordChangeClose: onProfileClose,
}) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast();
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.updatePassword);

  const handleSubmitFunc = (data) => {
    dispatch(updatePassword(data))
      .then((res) => {
        if (res.message == "Password changed successfully") {
          setTimeout(() => {
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
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isProfileOpen}
        onClose={onProfileClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(handleSubmitFunc)}>
            <ModalHeader>Change Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Stack spacing={4}>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel> Old Password</FormLabel>
                    <Input {...register("oldPassword")} type="password" />
                  </FormControl>
                </Box>

                <FormControl id="lastName">
                  <FormLabel>New Passworde</FormLabel>
                  <Input {...register("newPassword")} type="password" />
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

export default ChangepassWord;
