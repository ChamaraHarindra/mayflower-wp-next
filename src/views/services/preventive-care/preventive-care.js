import React from "react";
import { Box, Flex, Icon, Text, Link, Button, Image } from "@chakra-ui/react";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";
import Heading from "../../../components/Heading/Heading";

export default function PreventiveCare() {
  return (
    <>
      <SubHeroBanner h1="Preventive Care" bg="/preventive-care-banner.jpg" />
      <Box className="container">
        {/* side by side content */}
        <Box className="row align-items-center" py={10}>
          <Box className="col-md-5">
            <Image
              src="/services/preventive-care-1.png"
              alt="Preventive Care"
              width="100%"
            />
          </Box>
          <Box className="col-md-7">
            <Text mb="30px">
              At Mayflower Medical Group, we are committed to providing the
              highest quality of care to our patients, and an important part of
              our care philosophy is Preventative Care. Preventative Care can
              greatly improve longevity and quality of life, and reduce
              long-term health costs.
              <br />
              <br />
              Through screening tests, immunizations, exams and counseling, we
              work with our patients to prevent illnesses, reduce risk factors
              and detect health problems in the earliest of stages.
              <br />
              <br />
              We recommend our patients have a preventative medical exam at
              least every two years until age 40 and annually thereafter. These
              visits include a complete medical history and exam, screening for
              various conditions such as cancer and diabetes, immunization and
              preventative counseling.
              <br />
              <br />
              The priority we place on Preventative Care is part of our
              commitment to you and your long-term health.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
