import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/user/userSlice";
import EditProfile from "../components/profile/EditProfile";
import ChangepassWord from "../components/profile/ChangepassWord";

export default function Profile({ setAccepted, accepted }) {
  const {
    isOpen: isProfileOpen,
    onOpen: onProfileOpen,
    onClose: onProfileClose,
  } = useDisclosure();
  const {
    isOpen: isPasswordChangeOpen,
    onOpen: onPasswordChangeOpen,
    onClose: onPasswordChangeClose,
  } = useDisclosure();
  const { isLoading, user: userData } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser)
      .then((res) => res)
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {}, [userData]);

  return (
    <>
      <EditProfile
        onProfileClose={onProfileClose}
        isProfileOpen={isProfileOpen}
        accepted={accepted}
        setAccepted={setAccepted}
      />
      <ChangepassWord
        onPasswordChangeClose={onPasswordChangeClose}
        isPasswordChangeOpen={isPasswordChangeOpen}
      />
      <Center py={6}>
        <Box
          maxW={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}>
          <Image
            h={"120px"}
            w={"full"}
            src={
              "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            objectFit="cover"
            alt="#"
          />
          <Flex justify={"center"} mt={-12}>
            <Avatar
              size={"xl"}
              src={
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              }
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {userData?.user?.fullName}
              </Heading>
              <Text color={"gray.500"}>
                userame: {userData?.user?.userName}
              </Text>
              <Text color={"gray.500"}>email: {userData?.user?.email}</Text>
            </Stack>

            <Button
              onClick={onProfileOpen}
              w={"full"}
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}>
              Update Profile
            </Button>
          </Box>

          <Stack direction={"row"} justify={"center"} spacing={4} px={3} pb={3}>
            <Button
              w={"full"}
              bg="#00ACC1"
              color={"white"}
              rounded={"md"}
              onClick={() => {
                localStorage.removeItem("termsAccepted");
                setAccepted(false);
                window.location.reload();
              }}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}>
              See T&C
            </Button>{" "}
            <Button
              w={"full"}
              onClick={onPasswordChangeOpen}
              bg="#00ACC1"
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}>
              Change Password
            </Button>
          </Stack>
        </Box>
      </Center>
    </>
  );
}
