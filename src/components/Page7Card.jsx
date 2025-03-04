import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Page7Card = ({ src ,marginLeft}) => {
  return (
    <Flex flexDirection="column" marginLeft={marginLeft}>
      <Image
        src={src}
        height={{ base: "20vh", lg: "30vh" }}
        minWidth={{ base: "80vw", sm: "40vw",md:"40vw", lg: "25vw" }}
        borderRadius={{ base: "4vw", lg: "2vw" }}
      />
      <Text
        fontFamily="matterRegular"
        marginTop={{ base: "2vh", lg: "2vh" }}
        fontSize={{ lg: "2vh" }}
      >
        cuberto
      </Text>
    </Flex>
  );
};

export default Page7Card;
