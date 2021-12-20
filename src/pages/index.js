// import Home from "../views/home/home";
import {
  Stack,
  HStack,
  VStack,
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  Image,
  StackDivider,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  Avatar,
} from "@chakra-ui/react";
import client from "../lib/apollo";
import { GET_PAGE } from "../queries/pages/get-page";
import { GET_TESTIMONIALS } from "../queries/get-testimonials";
import MainLayout from "../components/Layout/MainLayout/MainLayout";
import { sanitize } from "../utils/miscellaneous";
import { handleRedirectsAndReturnData } from "../utils/slug";
import { useEffect, useState } from "react";
import Head from "next/head";
import Heading from "../components/Heading/Heading";
import TestimonialCarousel from "../components/TestimonialCarousel/TestimonialCarousel";

export default function HomePage({ pageData }) {
  console.log("front end log", pageData);
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <MainLayout data={pageData}>
      {isMounted && pageData?.page?.content ? (
        <div
          className="index"
          dangerouslySetInnerHTML={{
            __html: sanitize(pageData?.page?.content ?? {}),
          }}
        />
      ) : null}
      {/* {isMounted &&
      testimonialData?.testimonials?.testimonialCarousel?.testimonials ? (
        <Box className="container" mb={"50px"} pt={"50px"}>
          <Box bg="brandGreen.50" borderRadius="xl" pos="relative" mt="50">
            <Box className="row">
              <Box className="col-md-4">
                <Image
                  src="/testimonial-doctor.png"
                  alt="testimonials"
                  pos="absolute"
                  left="-30px"
                  bottom="0"
                  maxH="500px"
                />
              </Box>
              <Box className="col-md-8" py="10">
                <Heading
                  primary="See what our clients say"
                  secondary="Testimonials"
                />
                <TestimonialCarousel testimonialData={testimonialData} />
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null} */}
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  const { pageData } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: "/home/",
    },
  });

  // const { data: testimonialData } = await client.query({
  //   query: GET_TESTIMONIALS,
  // });

  // console.log("Back end log", pageData);
  const defaultProps = {
    props: {
      pageData: pageData || {},
      // testimonialData: testimonialData || {},
    },
    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };

  return handleRedirectsAndReturnData(
    defaultProps,
    pageData,
    // testimonialData,
    "page"
  );
}
