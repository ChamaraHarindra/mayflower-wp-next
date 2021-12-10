import { Box, Flex, Icon, Text, Link, Button, Image } from "@chakra-ui/react";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";
import Heading from "../../../components/Heading/Heading";

export default function MensHealth() {
  return (
    <>
      <SubHeroBanner h1="Men's Health" bg="/mens-health-banner.jpg" />
      <Box className="container-fluid" px="0">
        <Box className="row align-items-center" mx="0" my="50px">
          <Box className="col-md-6" pl="0">
            <Image
              pos="relative"
              width="100%"
              src="/services/men-health.png"
              alt="Men's Health"
            />
          </Box>
          <Box className="col-md-6" maxW="670px" pl={[0, 10]}>
            <Text mb="20px">
              At Mayflower Medical Group, we have healthcare providers with
              expertise in the unique issues around men’s health. Our physicians
              provide specialized care to promote better health and wellness in
              both men and boys.
              <br />
              <br />
              We strive to reduce preventable risks to help men and boys live
              longer, healthier lives.
              <br />
              <br />
            </Text>
            <Heading
              primary="Our General Primary Care services include, but are not limited to:"
              secondary="Men's Health Services"
            />
            <Box>
              <ul style={{ marginLeft: "20px" }}>
                <li>Annual exams</li>
                <li>Cancer screening</li>
                <li>Hair loss</li>
                <li>Impotence</li>
                <li>Erectile dysfunction (ED) management</li>
                <li>Male hormone replacement</li>
                <li>Prostate screening</li>
                <li>Routine health care screenings</li>
                <li>STD management</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
