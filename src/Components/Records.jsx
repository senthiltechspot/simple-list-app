import DrawersComp from "./DrawersComp";
import {
  Card,
  Box,
  Heading,
  Flex,
  Spacer,
  ButtonGroup,
  Image,
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
                <Image
                  borderRadius="full"
                  boxSize="70px"
                  src={e.urlToImage}
                  alt="Dan Abramov"
                />
                <Box flex="5">
                  <Heading size="md">{e.title}</Heading>
                  <h1 size="md">{e.description}</h1>
                </Box>

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
