import React from "react";
import { Box, Flex, Icon, Text, Link, Button, Image } from "@chakra-ui/react";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";
import Heading from "../../../components/Heading/Heading";

export default function PediatricCare() {
  return (
    <>
      <SubHeroBanner h1="Pediatric Care" bg="/pediatric-care-banner.jpg" />
      <Box className="container">
        {/* side by side content */}
        <Box className="row align-items-center" py={10}>
          <Box className="col-md-5">
            <Image
              src="/services/pediatric-care-1.png"
              alt="Pediatric Care"
              width="100%"
            />
          </Box>
          <Box className="col-md-7">
            <Text mb="30px">
              It’s beneficial for children to have a dedicated healthcare
              provider treating and caring for them as they grow.
              <br />
              <br />
              Mayflower’s Pediatric Care Providers love working with children
              and are committed to providing our youngest of patients with the
              highest level of quality care.
              <br />
              <br />
              Our Pediatricians are well qualified to diagnose and treat
              childhood illnesses and injuries, and provide comprehensive and
              complete care for the youngest members of your family.
              <br />
              <br />
            </Text>
            <Heading
              primary="Our Pediatric Services include,
              but are not limited to:"
              secondary="Pediatric Care services"
            />
            <Box>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Diagnosis and treatment of general infections and illnesses
                  (such as fevers, sore throats, ear infections, etc.)
                </li>
                <li>
                  Treatment of minor injuries, as well as some minor diseases
                </li>
                <li>Infant physicals and vaccines</li>
                <li>School physicals and vaccines</li>
                <li>Sports physicals</li>
                <li>Eye exams</li>
                <li>Hearing tests</li>
                <li>Hgb (Hemoglobin Testing for Physicals)</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
