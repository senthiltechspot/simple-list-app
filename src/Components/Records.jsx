import DrawersComp from "./DrawersComp";
import {
  Card,
  Box,
  Heading,
  Flex,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";

function Records(props) {
  let currentData = props.data;
  //   console.log(currentData);
  return (
    <div className="App">
      <div className="carddata">
        {currentData &&
          currentData.map((e, i) => (
            <Card p={"7"} boxShadow={"10px"} className="CardFiels" key={i}>
              <Flex alignItems="center" h={"100px"}>
                <Box flex="1">
                  <h1 size="md"> {e.company.name}</h1>
                </Box>
                <Spacer />
                <Box flex="1">
                  <Heading size="md">Contact :</Heading>
                  <h1 size="md">{e.name}</h1>
                </Box>
                <Spacer />
                <Box flex="1">
                  <Heading size="md">Street :</Heading>
                  <h1 size="md"> {e.address.street}</h1>
                </Box>
                <Spacer />
                <Box flex="1">
                  <Heading size="md">City :</Heading>
                  <h1 size="md"> {e.address.city}</h1>
                </Box>
                <Spacer />
                <ButtonGroup gap="2">
                  <DrawersComp data={e} />
                </ButtonGroup>
              </Flex>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default Records;
