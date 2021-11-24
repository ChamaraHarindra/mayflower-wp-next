import React from "react";
import { Box, Flex, Image, Text, Heading, Button } from "@chakra-ui/react";

export default function BannerStripe(props) {
  return (
    <Box className="row align-items-center">
      <Flex
        align="center"
        className="col-md-12"
        minH={props.minH}
        pos="relative"
      >
        <Image
          src={props.image}
          alt={props.alt}
          minH={props.minH}
          pos="absolute"
        />
        <Flex
          align="center"
          w="100%"
          pos="relative"
          justify="space-between"
          zIndex="2"
          px="6"
        >
          <Box>
            <Heading size="lg" color="white" as="h2" mb="2">
              {props.heading}
            </Heading>
            <Text color="white" fontWeight="500">
              {props.text}
            </Text>
          </Box>
          <Button
            px="8"
            py="6"
            color="brandGreen.700"
            borderRadius="full"
            bg="white"
            _hover={{ bg: "brandGreen.700", color: "white" }}
          >
            <Text fontWeight="bold">Request an Appointment</Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
