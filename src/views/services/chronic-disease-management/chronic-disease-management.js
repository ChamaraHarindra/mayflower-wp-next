import { Box, Flex, Icon, Text, Link, Button, Image } from "@chakra-ui/react";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";
import Heading from "../../../components/Heading/Heading";

export default function ChronicDiseaseManagement() {
  return (
    <>
      <SubHeroBanner
        h1="Chronic Disease Management"
        bg="/chronic-disease-management-banner.jpg"
      />
      <Box className="container">
        <Box className="row" mt="50px">
          <Box className="col-md-12">
            <Text>
              Chronic diseases and conditions are the leading cause of death and
              disability in the United States. Approximately 80% of older adults
              have at least one chronic disease.
              <br />
              <br />
              As part of our commitment to providing exceptional quality care
              for our patients, we apply a Chronic Disease Management (CDM)
              approach to helping patients manage their conditions. We believe
              that it is the most effective way to care for our patients who
              suffer from chronic diseases.
              <br />
              <br />
              CDM is an integrative and comprehensive method that employs
              screening, check-ups, monitoring, coordinating treatment with
              other healthcare providers and patient education.
              <br />
              <br />
              The benefits of this approach for many of our patients include:
              better health, increased quality of life and decreased healthcare
              costs.
            </Text>
          </Box>
        </Box>
        <Box className="row" mt="70px">
          <Box className="col-md-12">
            <Heading
              primary="Some of the conditions that we help our patients manage through
                our CDM services include, but are not limited to:"
              secondary="Chronic Disease Management"
            />
          </Box>
        </Box>
        {/* side by side content */}
        <Box className="row align-items-center" pb={10}>
          <Box className="col-md-5">
            <Box className="row">
              <Image
                src="/services/chronic-pain.png"
                alt="Chronic Disease Management"
              />
            </Box>
          </Box>
          <Box className="col-md-7">
            <Box pl={[0, 10]}>
              <ul style={{ marginLeft: "20px" }}>
                <li>Anemia</li>
                <li>Arthritis</li>
                <li>Asthma</li>
                <li>Cancer</li>
                <li>Chronic kidney disease</li>
                <li>Chronic obstructive pulmonary disease (COPD)</li>
                <li>Clinical depression</li>
                <li>Congestive heart failure</li>
                <li>Coronary heart disease</li>
                <li>Diabetes mellitus</li>
                <li>Heart failure</li>
                <li>High cholesterol</li>
                <li>Hypertension</li>
                <li>Obesity</li>
                <li>Osteoporosis</li>
                <li>Sleep apnea</li>
              </ul>
              <Text>
                <br />
                If you are suffering from a chronic disease or condition, we can
                help you manage your illness and improve your quality of life.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
