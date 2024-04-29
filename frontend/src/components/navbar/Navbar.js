import React from "react";
import {
  Flex,
  Spacer,
  useDisclosure,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AddIcon, ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isProfileOpen,
    onOpen: onProfileOpen,
    onClose: onProfileClose,
  } = useDisclosure();

  return (
    <>
      <Flex p="3" bg="#00ACC1" color="white">
        <Link to="/dashboard">
          <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Logo</span>
        </Link>
        <Spacer />

        {/* Shopping Cart Icon */}
        <IconButton
          aria-label="Shopping Cart"
          icon={<FaShoppingCart />}
          variant="ghost"
          colorScheme="white"
          onClick={() => {
            // Add your cart functionality here
          }}
        />

        <Menu bg="#fff" color="#000">
          <MenuButton
            as={IconButton}
            color={"white"}
            _hover={{
              bg: "#00ACC1",
            }}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem
              onClick={() => navigate("")}
              icon={<ExternalLinkIcon />}
              color={"#000"}>
              My Store
            </MenuItem>
            <MenuItem
              icon={<CgProfile size={17} />}
              color={"#000"}
              onClick={() => navigate("/profile")}>
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("termsAccepted");
                navigate("/");
              }}
              icon={<IoIosLogOut size={17} />}
              color={"#000"}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default Navbar;
