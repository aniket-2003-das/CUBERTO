import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import one from "../assets/videos/1.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Page3 = () => {
  useGSAP(() => {
    gsap.to(".page3Btn:hover .btnText", {
      y: "-100%",
      duration: 0.5,
    });
  });

  return (
    <Flex
      marginTop={{ base: "15vh" }}
      height={{ base: "60vh", sm: "50vh", md: "50vh", lg: "100vh" }}
      paddingInline={{ base: "3vw", lg: "10vw" }}
      paddingTop={{ lg: "15vh" }}
      justifyContent="center"
      gap={{md:"3vw", lg: "3vw" }}
      overflow="hidden"
    >
      <Flex
        height={{ base: "70vw",lg:"35vw" }}
        width={{base:"70vw",lg:"35vw"}}
        display={{ base: "none", sm: "none", md: "unset", lg: "flex" }}
      >
        <video src={one} muted loop autoPlay />
      </Flex>
      <Flex
        flexDirection="column"
        fontFamily="matterRegular"
        lineHeight={{ lg: "2.2vw" }}
        fontSize={{ base: "6.3vw", md:"3vw",lg: "2.1vw" }}
        height={{ base: "35vw", md:"25vw" }}
        paddingTop={{ lg: "10vh" }}
      >
        <Text>
          Cuberto is a leading digital product{" "}
          <Flex display={{ base: "none", lg: "unset" }}>
            <br />
          </Flex>{" "}
          agency focused on branding, UI/UX{" "}
          <Flex display={{ base: "none", lg: "unset" }}>
            <br />
          </Flex>
          design, mobile, and web{" "}
          <Flex display={{ base: "none", lg: "unset" }}>
            <br />
          </Flex>{" "}
          development.
        </Text>

        <Flex
          borderRadius={{ base: "12vh", lg: "12.5vh" }}
          border="solid black 1px"
          marginTop={{base:"10vh",md:"7vh",lg:"10vh"}}
          minHeight={{ base: "20vh",md:"10vh", lg: "25vh" }}
          width={{ base: "90%", lg: "90%" }}
          marginInline="auto"
          justifyContent="center"
          alignItems="center"
          fontFamily="matterRegular"
          position="relative"
          className="page3Btn"
          overflow="hidden"
          fontSize={{ lg: "2.1vw" }}
        >
          <Flex height={{base:"4vh",md:"3vh",lg:"2.2vw"}} flexDirection="column" overflow="hidden">
            <Text color="black" background="transparent" className="btnText">
              What we do
            </Text>
            <Text color="white" background="transparent" className="btnText">
              What we do
            </Text>
          </Flex>
          <span className="commonHoverEffect"></span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page3;
