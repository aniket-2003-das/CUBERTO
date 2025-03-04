import { Flex, Text } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import DesignCards from "../components/DesignCards";
import img1 from "../assets/images/pageSix1.png";
import img2 from "../assets/images/pageSix2.png";
import img3 from "../assets/images/pageSix3.png";
import img4 from "../assets/images/pageSix4.png";
import img5 from "../assets/images/pageSix5.jpg";
import img6 from "../assets/images/pageSix6.png";
const Page6 = () => {
  useGSAP(() => {
    gsap.from(".dummySpan3", {
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
      fontSize={{ base: "15vw", md: "12vw", lg: "10vw" }}
      lineHeight={{ base: "14.5vw", lg: "9vw" }}
      fontFamily="matterLight"
      paddingTop={{ base: "10vh", lg: "18vh" }}
      paddingBottom={{ base: "10vh", lg: "18vh" }}
      minHeight="100vh"
      background="black"
      color="white"
      flexDirection="column"
      className="page6Container"
    >
      <Flex flexDirection="column" paddingInline={{ base: "5vw", md: "10vw" }}>
        <Flex overflow="hidden">
          <Text className="dummySpan3">Development</Text>
        </Flex>
        <Flex overflow="hidden">
          <Text className="dummySpan3" marginTop={{ lg: "-3vh" }}>
            and design
          </Text>
        </Flex>
        <Flex overflow="hidden" marginTop={{ lg: "-3vh" }}>
          {" "}
          <Text className="dummySpan3">
            resources
          </Text>
        </Flex>
      </Flex>
      <Flex
        marginTop={{ base: "10vh", lg: "10vh" }}
        overflowX="scroll"
        className="scroller"
      >
        <DesignCards
          imgSrc={img1}
          title="How to Make UI/UX Website // HTML CSS development"
          marginLeft="15vw"
        />
        <DesignCards
          imgSrc={img2}
          title="How to Cook an Emotional Site // Web Development"
        />
        <DesignCards
          imgSrc={img3}
          title="How to Make Epic Website // Frontend Development"
        />
        <DesignCards imgSrc={img4} title="Cuberto Mouse Follower" />
        <DesignCards
          imgSrc={img5}
          title="Making Switch with SVG Distortion Effect"
        />
        <DesignCards
          imgSrc={img6}
          title="UI/UX Design / Volume 9"
          marginRight="15vw"
        />
      </Flex>
      <Flex
        paddingTop={{ base:"6vh",lg: "15vh" }}
        marginLeft={{ base:"2vw",lg: "50vw" }}
        flexDirection="column"
        width={{md:"60vw", lg: "30vw" }}
        fontSize={{base:"3vh", lg: "1.5vw" }}
        lineHeight={{base:"3vh", lg: "1.5vw" }}
      >
        <Text>
          We regularly release design courses, offer advice to newbie designers,
          walk you through creating awesome effects, and share source files.
        </Text>
        <Flex
          width={{base:"80vw",md:"60vw", lg: "20vw" }}
          marginTop={{base:"5vh", lg: "5vh" }}
          height={{base:"6vh", lg: "3vw" }}
          borderRadius={{base:"3vh",lg:"1.5vw"}}
          border="solid white 1px"
          justifyContent="center"
          alignItems="center"
          position="relative"
          className="page6Btn"
          background="transparent"
          overflow="hidden"
          zIndex="2"
        >
           <Flex
            flexDirection="column"
            fontSize={{ base:"2vh",sm:"3vh",lg: "1.5vw" }}
            height={{base:"3vh", lg: "1.5vw" }}
            overflow="hidden"
          >
            <Text className="btnText" background="transparent" color="white">VIEW ALL RESOURCES</Text>
            <Text className="btnText" background="transparent" color="black">VIEW ALL RESOURCES</Text>
          </Flex> 
          <span  className="page6BtnHoverEffect" ></span>
        </Flex>

        
      </Flex>
    </Flex>
  );
};

export default Page6;