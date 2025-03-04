import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import fourVideo from "../assets/videos/4.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Page7Card from "../components/Page7Card";
import img1 from "../assets/images/page7one.png";
import img2 from "../assets/images/page7two.png";
import img3 from "../assets/images/page7three.png";
import img4 from "../assets/images/page7four.png";
import img5 from "../assets/images/page7five.jpg";
import img6 from "../assets/images/page7six.png";
import img7 from "../assets/images/page7seven.png";
import img8 from "../assets/images/page7eight.png";
import img9 from "../assets/images/page7nine.png";
import img10 from "../assets/images/page7ten.png";
const Page7 = () => {
  useGSAP(() => {
    gsap.to(".shiftSide", {
      x: "-50%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".shiftSide",
        scrub: 2,
      },
    });
  });
  return (
    <Flex
      height={{ base: "60vh", lg: "100vh" }}
      flexDirection="column"
      width="100%"
      overflowX="hidden"
      paddingTop={{ base: "7vh", lg: "10vh" }}
    >
      <Flex
        className="shiftSide"
        fontSize={{ base: "8vh", lg: "15vh" }}
        fontFamily="matterLight"
        alignItems={"center"}
        height="fit-content"
        whiteSpace="nowrap"
        gap={{ base: "10vw", lg: "3vw" }}
      >
        <Text fontStyle="italic"> — New Inspo</Text>
        <Flex
          height={{ base: "10vh", lg: "20vh" }}
          minWidth={{ base: "35vw", lg: "20vw" }}
          borderRadius={{ base: "15vw", lg: "10vw" }}
          overflow="hidden"
        >
          <video autoPlay muted loop src={fourVideo} className="page2Video" />
        </Flex>
        <Text> — New Day</Text>
        <Flex
          height={{ lg: "20vh" }}
          minWidth={{ lg: "20vw" }}
          borderRadius={{ lg: "10vw" }}
          overflow="hidden"
        >
          <video autoPlay muted loop src={fourVideo} className="page2Video" />
        </Flex>
        <Text fontStyle="italic"> — New Inspo</Text>
        <Flex
          height={{ lg: "20vh" }}
          minWidth={{ lg: "20vw" }}
          borderRadius={{ lg: "10vw" }}
          overflow="hidden"
        >
          <video autoPlay muted loop src={fourVideo} className="page2Video" />
        </Flex>
        <Text> — New Day</Text>
        <Flex
          height={{ lg: "20vh" }}
          minWidth={{ lg: "20vw" }}
          borderRadius={{ lg: "10vw" }}
          overflow="hidden"
        >
          <video autoPlay muted loop src={fourVideo} className="page2Video" />
        </Flex>
      </Flex>

      <Flex
        width="100%"
        className="scroller"
        gap={{ base: "2vw", lg: "3vw" }}
        marginTop={{ base: "10vh", lg: "20vh" }}
        overflowX="scroll"
      >
        <Page7Card src={img1} marginLeft="20vw"/>
        <Page7Card src={img2} />
        <Page7Card src={img3} />
        <Page7Card src={img4} />
        <Page7Card src={img5} />
        <Page7Card src={img6} />
        <Page7Card src={img7} />
        <Page7Card src={img8} />
        <Page7Card src={img9} />
        <Page7Card src={img10} />
      </Flex>
    </Flex>
  );
};

export default Page7;
