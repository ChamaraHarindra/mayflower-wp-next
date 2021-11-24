import React from "react";
import { Image, Box, Text, Button, Flex, Link } from "@chakra-ui/react";

export default function ImgContentCard(props) {
  return (
    <Box px="3">
      <Image
        maxH="240px"
        src={props.url}
        alt={props.title}
        mb="3"
        style={props.style}
        width={props.width}
      />
      <Text fontSize="lg" color="brandBlue.700" fontWeight="bold" mb="3">
        {props.title}
      </Text>
      <Text>{props.text}</Text>
      {props.link ? (
        <Link src={props.link}>
          <Button mt="5" variant="ghostBlue" borderRadius="full">
            {props.linkText}
          </Button>
        </Link>
      ) : (
        ""
      )}
    </Box>
  );
}
