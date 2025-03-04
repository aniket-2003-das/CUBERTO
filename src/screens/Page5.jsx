import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import two from "../assets/videos/2.mp4";
const Page5 = () => {
  useGSAP(() => {
    gsap.from(".dummySpan2", {
      y: "100%",
      duration: 0.5,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page5Container",
        start: "top 50%",
        end: "top 100%",
      },
    });
  });
  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      paddingTop="15vh"
      paddingBottom="15vh"
      paddingInline={{base:"5vw",md:"10vw"}}
      className="page5Container"
    >
      <Flex overflow="hidden">
        <Text
          fontFamily="matterLight"
          fontSize={{base:"15vw", md:"12vw",lg: "10vw" }}
          lineHeight={{base:"15vw", md:"12vw",lg: "8vw" }}
          className="dummySpan2"
        >
          Our
        </Text>
      </Flex>
      <Flex overflow="hidden">
        <Text
          className="dummySpan2"
          fontFamily="matterLight"
          fontSize={{base:"15vw", md:"12vw",lg: "10vw" }}
          lineHeight={{ base:"15vw",md:"12vw",lg: "10vw" }}
        >
          philosophy
        </Text>
      </Flex>
      <Flex marginTop={{base:"10vh",md:"13vh",lg:"15vh" }}height="fit-content">
        <Flex
          height={{ base: "70vw", lg: "35vw" }}
          width={{ base: "70vw", lg: "50%" }}
          display={{ base: "none", sm: "none", md: "unset", lg: "flex" }}
        >
          <video src={two} muted loop autoPlay />
        </Flex>
        <Flex
          fontFamily="matterRegular"
          fontSize={{ base:"2.5vh",md:"2.4vw",lg: "1.3vw" }}
          width={{ base: "80vw", lg: "50%" }}
          flexDirection="column"
          gap={{ base:"6vh",md:"3vh",lg: "5vh" }}
          paddingInline={{base:"unset",md:"3vw",lg:"7vw"}}
        >
          <Text>
            In our team, developers work alongside designers, strategists and
            analysts. Cuberto doesn't do cookie-cutter solutions and we build
            products exactly as they were during the design phase, no short cuts
            or simplifications.
          </Text>

          <Text>
            We're driven by user‑centered design that drives productivity and
            increases revenue. Our expertise and ingenuity are remarkable, yet
            we always strive to outdo and outperform our previous achievements.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page5;
