import { Flex ,Text,Image} from '@chakra-ui/react'
import React from 'react'

const DesignCards = ({imgSrc,title,marginLeft,marginRight}) => {
  return (
    <Flex flexDirection="column" gap={{base:"3vw",lg:"5vh"}}  minW={{base:"90vw",md:"70vw",lg:"35vw"}} marginInline={{base:"2vw",lg:"1vw"}} marginLeft={{lg:marginLeft}} marginRight={{lg:marginRight}}>
        <Image src={imgSrc} height={{base:"35vh",md:"36vh"}} background="blue" width={{lg:"33vw"}} borderRadius={{base:"4vw",lg:"1vw"}}/>
        <Text fontFamily="matterRegular" fontSize={{base:"4vw",lg:"1.3vw"}} lineHeight={{base:"4vw",lg:"1.3vw"}}>{title}</Text>
    </Flex>
  )
}

export default DesignCards