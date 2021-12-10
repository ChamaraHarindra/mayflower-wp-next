import { Box, Flex, Icon, Text, Link, Button, Image } from "@chakra-ui/react";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";
import Heading from "../../../components/Heading/Heading";

export default function GeriatricCare() {
  return (
    <>
      <SubHeroBanner h1="Geriatric Care" bg="/geriatric-care-banner.jpg" />
      <Box className="container">
        {/* side by side content */}
        <Box className="row align-items-center" my={10}>
          <Box className="col-md-5">
            <Box className="row">
              <Image src="/services/geriatric-care.png" alt="Geriatric Care" />
            </Box>
          </Box>
          <Box className="col-md-7">
            <Box pl={[0, 10]}>
              <Text>
                As we age, access to quality healthcare becomes even more of a
                priority. At Mayflower Medical Group, we are well-equipped to
                care for the needs of our aging patients.
                <br />
                <br />
                We offer specialized medical and psychiatric services, and have
                geriatric professionals on our team that can assist older adults
                and their families in making healthcare decisions that are in
                the best interest of the patient.
                <br />
                <br />
                We foster an environment where patients and their families feel
                comfortable asking questions and voicing concerns or fears. Our
                physicians encourage open discussions about treatment plans and
                recommendations.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="container-fluid" px={0}>
        <Box
          className="row align-items-center"
          mx="0"
          py="50px"
          justifyContent="flex-end"
        >
          <Box className="col-md-6" maxW="670px">
            <Heading
              primary="Our Geriatric Care services
              include, but are not limited to:"
              secondary="Geriatric Care Services"
            />
            <Box pl={[0, 10]}>
              <ul style={{ marginLeft: "10px" }}>
                <li>
                  Diagnosis and management of Alzheimer’s disease, dementias and
                  other common geriatric conditions
                </li>
                <li>Behavioral health and counseling services</li>
                <li>
                  Treatment and management of incontinence, constipation, sleep
                  disorders, depression and anxiety
                </li>
                <li>Home visits by physician when needed</li>
                <li>
                  Identification of safety issues and recommendations of
                  solutions
                </li>
                <li>Social services assessment</li>
                <li>Medical assessment</li>
              </ul>
            </Box>
          </Box>
          <Box className="col-md-6" pr="0">
            <Image
              pos="relative"
              width="100%"
              src="/services/geriatric-care-2.png"
              alt="Geriatric Care"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
