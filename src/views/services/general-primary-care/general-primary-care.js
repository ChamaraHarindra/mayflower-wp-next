import { Box, Flex, Icon, Text, Link, Button, Image } from "@chakra-ui/react";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";
import Heading from "../../../components/Heading/Heading";

export default function GeneralPrimaryCare() {
  return (
    <>
      <SubHeroBanner
        h1="General Primary Care"
        bg="/general-primary-care-banner.jpg"
      />
      <Box className="container-fluid" px="0">
        <Box className="row align-items-center" mx="0" my="50px">
          <Box className="col-md-6" pl="0">
            <Image
              pos="relative"
              width="100%"
              src="/services/primary-care-1.png"
              alt="Flu Symptoms"
            />
          </Box>
          <Box className="col-md-6" maxW="670px">
            <Text pl={[0, 10]}>
              At Mayflower Medical Group, we believe in treating the whole
              person and we enjoy providing the highest level of care to
              patients at every stage of life from childhood to the golden
              years.
              <br />
              <br />
              As Family Practice and Internal Medicine providers, we are not
              limited to a single area of practice and can provide quality,
              integrated care for both genders and across all generations.
              <br />
              <br />
              Our team of qualified, physicians, nurse practitioners, and
              physician assistants is committed to providing exceptional care
              and establishing long-term, trusting relationships with our
              patients.
            </Text>
          </Box>
        </Box>
        <Box
          className="row align-items-center"
          mx="0"
          my="50px"
          justifyContent="flex-end"
        >
          <Box className="col-md-6" maxW="670px">
            <Heading
              primary="Family Medicine"
              secondary="We care for Everyone"
            />
            <Text pr={[0, 10]}>
              The heart of Family Medicine is offering comprehensive, quality
              care to patients of all ages. Our Family Medicine practice
              includes preventative, diagnostic and therapeutic services for
              both acute and chronic conditions in children, adolescents, adults
              and senior adults.
              <br />
              <br />
              We value the relationships that we have with our patients and
              strive to deliver personal, comprehensive care through every stage
              of their lives. We also take seriously our role as advocates for
              our patients in an increasingly complex healthcare environment.
            </Text>
          </Box>
          <Box className="col-md-6" pr="0">
            <Image
              pos="relative"
              width="100%"
              src="/services/primary-care-2.png"
              alt="Flu Symptoms"
            />
          </Box>
        </Box>

        <Box className="row align-items-center" mx="0" my="50px">
          <Box className="col-md-6" pl="0">
            <Image
              pos="relative"
              width="100%"
              src="/services/primary-care-3.png"
              alt="Flu Symptoms"
            />
          </Box>
          <Box className="col-md-6" maxW="670px">
            <Heading
              primary="Internal Medicine"
              secondary="Common cold to serious illness"
            />
            <Text pl={[0, 10]}>
              Our Internal Medicine providers focus on adults and the prevention
              and treatment of illnesses ranging from the common cold to chronic
              and serious conditions like diabetes, hypertension and lung
              disease.
              <br />
              <br />
              Our Mayflower internists provide annual physical exams, advice on
              disease prevention and maintaining good health. They also help
              patients manage chronic diseases and will coordinate care with
              specialists or other healthcare providers to ensure that Mayflower
              patients can get access to diagnostic testing and any other
              specialized care they may need.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="container">
        <Box className="row" pt="20px">
          <Box className="col-md-12">
            <Heading
              primary="Our General Primary Care services include, but are not limited to:"
              secondary="General Primary Care"
            />
          </Box>
        </Box>
        <Box className="row align-items-center" pb={10}>
          <Box className="col-md-5">
            <Box className="row">
              <Image src="/services/primary-care-4.png" alt="Primary Care" />
            </Box>
          </Box>
          <Box className="col-md-7">
            <Box pl={[0, 10]}>
              <ul style={{ marginLeft: "20px" }}>
                <li>Back pain</li>
                <li>Abdominal pain</li>
                <li>Asthma</li>
                <li>Allergies</li>
                <li>Urinary Tract Infection (UTI)</li>
                <li>Bronchitis</li>
                <li>Headache</li>
                <li>Osteoarthritis</li>
                <li>Sore throat</li>
                <li>Depression / anxiety</li>
                <li>Psychiatric / social work services</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
