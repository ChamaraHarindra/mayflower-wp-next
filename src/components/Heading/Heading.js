import React from "react";
import { Image, Box, Text, Button, Flex } from "@chakra-ui/react";

export default function Heading(props) {
  return (
    <>
      <Text
        textTransform="capitalize"
        as="h3"
        color="brandBlue.700"
        fontSize="lg"
        fontWeight="600"
        mb="1"
      >
        {props.secondary}
      </Text>
      <Text
        as="h2"
        textTransform="capitalize"
        color="black"
        fontSize="4xl"
        fontWeight="900"
        lineHeight="1.4"
        mb="10"
      >
        {props.primary}
      </Text>
    </>
  );
}
