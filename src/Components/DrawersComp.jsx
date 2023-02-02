import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Heading,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import "../App.css";
const DrawersComp = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button colorScheme="red" key={"lg"} onClick={onOpen}>
        view
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Account Details</DrawerHeader>
          <DrawerBody>
            <div className="drawerdata">
              <Flex h={"100px"} flexDirection={"column"} gap={"5"} p={"7"}>
                <Box flex="1">
                  <Heading size="md">Contact Name :</Heading>
                  <h1 size="md">{props.data.name}</h1>
                </Box>
                <Spacer />
                <Box flex="1">
                  <Heading size="md">Designation :</Heading>
                  <h1 size="md">{props.data.name}</h1>
                </Box>
                <Spacer />
                <Box flex="1">
                  <Heading size="md">email :</Heading>
                  <h1 size="md">{props.data.email}</h1>
                </Box>
                <Spacer />

                <Box flex="1">
                  <Heading size="md">phone :</Heading>
                  <h1 size="md">{props.data.phone}</h1>
                </Box>
                <Spacer />
              </Flex>
              <Flex h={"100px"} flexDirection={"column"} gap={"5"} p={"7"}>
                <Box flex="1">
                  <Heading size="md">Address :</Heading>
                  <h1 size="md">{props.data.address.suite}</h1>
                </Box>
                <Spacer />
                <Box flex="1">
                  <Heading size="md">Street :</Heading>
                  <h1 size="md">{props.data.address.street}</h1>
                </Box>
                <Spacer />
                <Box flex="1">
                  <Heading size="md">City :</Heading>
                  <h1 size="md">{props.data.address.city}</h1>
                </Box>
                <Spacer />

                <Box flex="1">
                  <Heading size="md">ZipCode :</Heading>
                  <h1 size="md">{props.data.address.zipcode}</h1>
                </Box>
                <Spacer />
              </Flex>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawersComp;
