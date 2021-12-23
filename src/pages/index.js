import { Box, Image } from "@chakra-ui/react";
import client from "../lib/apollo";
import { GET_PAGE } from "../queries/pages/get-page";
import { GET_TESTIMONIALS } from "../queries/get-testimonials";
import MainLayout from "../components/Layout/MainLayout/MainLayout";
import { sanitize } from "../utils/miscellaneous";
import { handleRedirectsAndReturnData } from "../utils/slug";
import { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import TestimonialCarousel from "../components/TestimonialCarousel/TestimonialCarousel";

export default function HomePage({ pageData, testimonialData }) {
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
      {isMounted &&
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
      ) : null}
    </MainLayout>
  );
}

export async function getStaticProps() {
  const { data: pageData } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: "/home/",
    },
  });

  const { data: testimonialData } = await client.query({
    query: GET_TESTIMONIALS,
  });

  return {
    props: {
      pageData: pageData || {},
      testimonialData: testimonialData || {},
    },
    revalidate: 1,
  };
}
