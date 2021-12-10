import { Box, Flex, Icon, Text, Link, Button, Image } from "@chakra-ui/react";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";
import Heading from "../../../components/Heading/Heading";

export default function WomenHealth() {
  return (
    <>
      <SubHeroBanner h1="Women's Care" bg="/women-health-banner.jpg" />
      <Box className="container">
        {/* side by side content */}
        <Box className="row align-items-center" py={10}>
          <Box className="col-md-5">
            <Image
              src="/services/women-health-1.png"
              alt="Pediatric Care"
              width="100%"
            />
          </Box>
          <Box className="col-md-7">
            <Text mb="30px">
              Mayflower Medical Group provides quality women’s healthcare
              services from providers who specialize in gynecological health.
              <br />
              <br />
              From women’s health screenings, contraception, menopause care,
              Mayflower’s team of Gynecology professionals offers comprehensive
              care for female patients across all age groups including children,
              adolescents and adults.
              <br />
              <br />
            </Text>
            <Heading
              primary="Our Women's Care Services include,
              but are not limited to:"
              secondary="Women’s Health services"
            />
            <Box>
              <ul style={{ marginLeft: "20px" }}>
                <li>Routine gynecological exams</li>
                <li>Breast exams and Pap smears</li>
                <li>Diagnosis and treatment of menstrual disorders</li>
                <li>STD screening</li>
                <li>
                  Family planning & contraception, including diaphragm fitting,
                  IUD insertions and emergency contraception
                </li>
                <li>Pre-conception counseling</li>
                <li>Menopause care</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
