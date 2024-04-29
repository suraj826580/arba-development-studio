import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function TermsAndCondition() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem("termsAccepted");
    if (isAccepted) {
      setAccepted(true);
    } else {
      onOpen();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("termsAccepted", "true");
    setAccepted(true);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  if (accepted) {
    return null; // Return null if terms are already accepted
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleCancel}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>TERMS & CONDITIONS</ModalHeader>
          <ModalBody>
            <Text fontSize="xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
            <br />
            <Text fontSize="xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
            <br />

            <Text fontSize="xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
          </ModalBody>

          <ModalFooter
            style={{ display: "flex", justifyContent: "center", gap: 100 }}>
            <Button colorScheme="linkedin" onClick={handleCancel}>
              Cancel
            </Button>
            <Button colorScheme="linkedin" onClick={handleAccept}>
              Accept
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TermsAndCondition;
