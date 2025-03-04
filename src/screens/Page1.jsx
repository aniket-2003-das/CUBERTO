import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/Logo.svg";
import headerVideo from "../assets/videos/header.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Page1 = () => {
  useGSAP(() => {
    gsap.from(".commonTextAnimation > span", {
      y: "100%",
      delay: 1,
      ease: "power1.out",
      stagger: 0.1,
    });
    gsap.from(".headerVideo", {
      height: "0%",
      width: "0%",
      delay: 1,
      duration: 1,
      ease: "power1.out",
    });
  }, []);

  return (
    <Flex width="100%" flexDirection="column">
      <Flex
        paddingTop={{ base: "5vh", sm: "7vh", md: "3vh" }}
        paddingLeft={{ base: "5vw", sm: "4vw", md: "4vw", lg: "2vw" }}
      >
        <Image src={logo} height={{ base: "3vh" }} />
      </Flex>

      <Flex
        lineHeight={{ base: "13vw", sm: "10vw", md: "8vw", lg: "7.5vw" }}
        flexDirection="column"
        marginTop={{ base: "25vh", sm: "23vh", md: "18vh", lg: "13vh" }}
        marginLeft={{ base: "5vw", sm: "", md: "10vw", lg: "10vw" }}
        wordSpacing={{ base: "0px", lg: "-10px" }}
        fontSize={{ base: "13vw", sm: "10vw", md: "8vw", lg: "7vw" }}
        paddingBottom={{ base: "10vh", sm: "4vw", md: "4vw", lg: "2vw" }}
        fontFamily="matterLight"
      >
        <Flex
          overflow="hidden"
          className="commonTextAnimation"
        >
          <span>We are a digital</span>
        </Flex>
        <Flex gap="20px" alignItems="center">
          <Flex
            height={{ base: "8vw" }}
            width={{ base: "10vw" }}
            borderRadius="100px"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
          >
            <video
              src={headerVideo}
              muted
              autoPlay
              loop
              className="headerVideo"
            />
          </Flex>
          <Flex
            width="fit-content"
            overflow="hidden"
            className="commonTextAnimation"
          >
            <span>design</span>
          </Flex>
          <Flex
            width="fit-content"
            overflow="hidden"
            className="commonTextAnimation"
          >
            <span>and</span>
          </Flex>
        </Flex>
        <Flex>
          <Flex
            width="fit-content"
            overflow="hidden"
            className="commonTextAnimation"
          >
            <span>motion agency</span>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page1;
