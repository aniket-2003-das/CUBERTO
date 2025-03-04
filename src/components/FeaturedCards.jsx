import { Flex, Image,Text } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const FeaturedCards = ({ img, video,titleOne,titleTwo ,height,width,marginTop="7vh",baseHeight}) => {
  const videoRef = useRef(null);
  const [pause, setPause] = useState(false);


  const videoHoverOnPlay = () => {
    videoRef?.current?.play();
  };
  const videoPause = () => {
    videoRef?.current?.pause();
  };
  return (
    <Flex flexDirection="column" width={{base:"86vw",md:"45vw",lg:width}} marginTop={{base:"2vh",md:marginTop}} className="cardAnimation">
      <Flex
        position="relative"
        marginTop={{base:"5vh",md:"2vh",lg:"5vh"}}
        height={{base:baseHeight,lg:height}}
        overflow="hidden"
        width={{base:"86vw",md:"45vw",lg:width}}
        borderRadius="3vw"
        onMouseEnter={videoHoverOnPlay}
        onMouseLeave={videoPause}
      >
        <video src={video} autoPlay muted loop ref={videoRef} className="featuredcard"></video>
        <Image
          className="featuredCard"
          src={img}
          height="100%"
          width="100%"
          position="absolute"
          zIndex="10"
        />
      </Flex>
      <Flex  whiteSpace="break-spaces" marginTop="2vh"  color="white" fontSize={{base:"4vw",md:"2.5vw",lg:"1.5vw" }} fontFamily="matterLight" paddingInline="1vw">
        <Text fontWeight="bold">{titleOne}  <span className="page4Span">{titleTwo}</span></Text>
      </Flex>
    </Flex>
  );
};
// 75,27
export default FeaturedCards;
