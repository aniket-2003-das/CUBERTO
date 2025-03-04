import { Flex } from "@chakra-ui/react";
import React from "react";
import short from "../assets/videos/short.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Page2 = () => {
  useGSAP(() => {
    gsap.from(".page2VideoContainer", {
      y:"20%",
      delay: 1,
      duration:1,
      ease: "circ.out",
      opacity:0,
    });
  }, []);

  return (
    <Flex
      height={{ base: "40vh", sm: "40vh", md: "40vh", lg: "100vh" }}
      marginTop={{lg:"11vh"}}
      width="100%"
      justifyContent="center"
      alignItems="center"
      className="page2VideoContainer"
    >
      <video src={short} className="page2Video" muted loop autoPlay />
    </Flex>
  );
};

export default Page2;
