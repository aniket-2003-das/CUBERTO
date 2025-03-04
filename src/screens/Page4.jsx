import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import headerTwo from "../assets/videos/header2.mp4";
import FeaturedCards from "../components/FeaturedCards";
import cover1 from "../assets/images/cover1.jpg";
import cover2 from "../assets/images/cover2.jpg";
import cover3 from "../assets/images/cover3.jpg";
import cover4 from "../assets/images/cover4.jpg";
import cover5 from "../assets/images/cover5.jpg";
import cover6 from "../assets/images/cover6.jpg";
import cover7 from "../assets/images/cover7.jpg";
import cover8 from "../assets/images/cover8.jpg";
import cover9 from "../assets/images/cover9.jpg";
import cover10 from "../assets/images/cover10.jpg";
import cover11 from "../assets/images/cover11.jpg";
import cover1video from "../assets/videos/cover1.mp4";
import cover2video from "../assets/videos/cover2.mp4";
import cover3video from "../assets/videos/cover3.mp4";
import cover4video from "../assets/videos/cover4.mp4";
import cover5video from "../assets/videos/cover5.mp4";
import cover6video from "../assets/videos/cover6.mp4";
import cover7video from "../assets/videos/cover7.mp4";
import cover8video from "../assets/videos/cover8.mp4";
import cover9video from "../assets/videos/cover9.mp4";
import cover10video from "../assets/videos/cover10.mp4";
import cover11video from "../assets/videos/cover11.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Page4 = () => {
  useGSAP(() => {
    gsap.from(".dummySpan",{
      y:"100%",
      duration:.5,
      scrollTrigger:{
        scroller:"body",
        trigger:".page4Container",
        start:"top 50%",
        end:"top 100%",
      }
    })
  })
  return (
    <Flex minHeight="100vh" paddingBottom="10vh" background="black" flexDirection="column" className="page4Container">
      <Flex
        flexDirection="column"
        fontSize={{base:"19vw",md:"12vw",lg:"10vw"}}
        lineHeight={{base:"14vw",md:"12vw", lg: "8vw" }}
        marginTop="15vh"
        marginLeft={{base:"6vw",lg:"10vw"}}
        color="#ffffff"
        fontFamily="matterLight"
      >
        <Flex overflow="hidden">
        <Text className="dummySpan">Featured</Text>
        </Flex>
        <Flex height="fit-content" overflow="hidden"  alignItems="start" gap={{lg:"2vw"}} marginTop={{base:"2vh"}}>
          <Flex height={{ base: "7vh",sm:"10vh",lg:"17vh" }}
            width={{ base: "18vw" ,lg:"13vw"}}
            borderRadius={{base:"7vw",lg:"10vw"}}
            overflow="hidden"
            justifyContent="center"
            alignItems="center">
            <video src={headerTwo} muted loop autoPlay className="page4Video"/>
          </Flex>
          <Text className="dummySpan" lineHeight={{lg:"8vw"}} fontStyle="italic">Projects</Text>
        </Flex>
      </Flex>

      <Flex width="100%" paddingInline={{base:"7vw",md:"3vw",lg:"12vw"}} gap={{base:"unset",md:"4vw"}} flexDirection={{base:"column",md:"row"}}>
        <Flex flexDirection="column">
        {/* <FeaturedCards img={cover1} video={cover1video} titleOne="Punto Pago -" titleTwo="The First Super-App in Latin America" height="75vh" width="30vw" baseHeight="60vh"/> */}
        {/* <FeaturedCards img={cover3} video={cover3video} titleOne="DaoWay -" titleTwo="Astrology planner app: plan, achieve, thrive" height="55vh" width="30vw" baseHeight="40vh"/> */}
        {/* <FeaturedCards img={cover4} video={cover5video} titleOne="Riyadh -" titleTwo="Official website of Riyadh, Saudi Arabia's capital" height="55vh" width="30vw" baseHeight="40vh"/> */}
        <FeaturedCards img={cover5} video={cover7video} titleOne="Qvino -" titleTwo="Wine marketplace with interactive learning" height="55vh" width="30vw" baseHeight="60vh"/>
        <FeaturedCards img={cover6} video={cover9video} titleOne="Potion -" titleTwo="Sales tool for increasing conversion" height="55vh" width="30vw" baseHeight="40vh"/>
        <FeaturedCards img={cover7} video={cover11video} titleOne="Cisco -" titleTwo="Cloud based network management" height="55vh" width="30vw" baseHeight="40vh"/>
        </Flex>
        <Flex flexDirection="column">
        <FeaturedCards img={cover2} video={cover2video} titleOne="Kelvin Zero -" titleTwo="A digital product for passwordless authentication" height="55vh" width="30vw" midMarginTop={"30vh"} marginTop={"33vh"} baseHeight="50vh"/>
        <FeaturedCards img={cover8} video={cover4video} titleOne="Magma -" titleTwo="The ultimate tool for building in the Web3 era" height="55vh" width="30vw" baseHeight="60vh"/>
        <FeaturedCards img={cover9} video={cover6video} titleOne="FlipaClip -" titleTwo="The best tool for stop-motion animation" height="55vh" width="30vw" baseHeight="40vh"/>
        {/* <FeaturedCards img={cover10} video={cover8video} titleOne="Zelt -" titleTwo="Run HR, IT & Finance in one place" height="55vh" width="30vw" baseHeight="60vh"/> */}
        {/* <FeaturedCards img={cover11} video={cover10video} titleOne="Ferrumpipe -" titleTwo="Galvanizes steel metal frame manufacturer" height="55vh" width="30vw" baseHeight="40vh"/> */}
        
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page4;
