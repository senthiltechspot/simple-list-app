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
          <DrawerHeader>{props.data.title}</DrawerHeader>
          <DrawerBody>
            <div className="drawerdata">
              <Flex h={"100px"} flexDirection={"column"} gap={"5"} p={"7"}>
                <Spacer />
                <Box flex="1">
                  <img src={props.data.urlToImage} alt="" />
                </Box>
                <Box flex="1">
                  <h1 size="md">{props.data.description}</h1>
                </Box>
                <Spacer />
                <Box flex="1">
                  <Heading size="md">Content :</Heading>
                  <h1 size="md">{props.data.content}</h1>
                </Box>
                {/* <Box flex="1">
                  <Heading size="md">Author :</Heading>
                  <h1 size="md">{props.data.source.author}</h1>
                </Box> */}
                <Box>
                  <a
                    href={props.data.url}
                    target="_blank"
                    className="ReadButton"
                  >
                    Read More
                    {/* <Button colorScheme="yellow">Yellow</Button> */}
                  </a>
                </Box>
              </Flex>
              {/* <Flex h={"100px"} flexDirection={"column"} gap={"5"} p={"7"}>
                <Box flex="1">
                  <Heading size="md">Address :</Heading>
                  <h1 size="md">{props.data.content}</h1>
                </Box>
                <Spacer />
              </Flex> */}
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
