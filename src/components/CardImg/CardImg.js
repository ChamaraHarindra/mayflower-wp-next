import React from "react";
import { Image, Box, Text, Button, Flex, Link } from "@chakra-ui/react";

export default function CardImg(props) {
  return (
    <Box
      position="relative"
      height={props.height ? props.height : "225px"}
      overflow="hidden"
      borderRadius="xl"
      className="card-img"
      onClick={props.onClick}
    >
      <Image
        src={props.src}
        alt={props.alt}
        position="absolute"
        left="0"
        top="0"
        bottom="0"
        right="0"
        minH="100%"
        minW="100%"
      />
      <Box
        w="100%"
        h="100%"
        pos="absolute"
        bgGradient="linear(to-t, black, rgba(0,0,0,0))"
        zIndex="2"
      />
      <Box pos="absolute" bottom="30px" left="20px" zIndex="3" w={"100%"}>
        <Box mr="20px">{props.children}</Box>
      </Box>
    </Box>
  );
}
