import React from "react";
import { Image, Box, Text, Button, Flex } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";

export default function HomeCarousel({ slides }) {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      <Box className="darken-img" pos="relative">
        <Image src="/slider-1.jpg" alt="" />
        <Box
          position="absolute"
          w="100%"
          top="50%"
          zIndex="2"
          transform="translateY(-50%)"
        >
          <Box className="container">
            <Box className="row">
              <Box className="col-md-12">
                <Flex align="flex-start" flexDir="column">
                  <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    textAlign="left"
                    color="white"
                  >
                    We deliver on our promise to provide exceptional,
                    accessible, quality care
                  </Text>
                  <Button
                    bgGradient="linear(to-r, brandGreen.500, brandBlue.500)"
                    mt="5"
                    size="lg"
                    borderRadius="full"
                    px="10"
                    py="8"
                  >
                    <Text fontWeight="bold">Make an Appointment</Text>
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="darken-img" pos="relative">
        <Image src="/slider-2.jpg" alt="" />
        <Box
          position="absolute"
          w="100%"
          top="50%"
          zIndex="2"
          transform="translateY(-50%)"
        >
          <Box className="container">
            <Box className="row">
              <Box className="col-md-12">
                <Flex align="flex-start" flexDir="column">
                  <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    textAlign="left"
                    color="white"
                  >
                    We deliver on our promise to provide exceptional,
                    accessible, quality care
                  </Text>
                  <Button
                    bgGradient="linear(to-r, brandGreen.500, brandBlue.500)"
                    mt="5"
                    size="lg"
                    borderRadius="full"
                    px="10"
                    py="8"
                  >
                    <Text fontWeight="bold">Make an Appointment</Text>
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Carousel>
  );
}

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query getSlides {
        mediaItems(where: { title: "slider" }) {
          nodes {
            sourceUrl
          }
        }
      }
    `,
  });

  console.log(result);

  return {
    props: {
      slides: result.data.mediaItems.nodes,
    },
  };
}
