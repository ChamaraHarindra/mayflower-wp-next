import { Box, Flex, Icon, Text, Link, Button, Image } from "@chakra-ui/react";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";

export default function CardioVascularCare() {
  return (
    <>
      <SubHeroBanner h1="Cardiovascular Care" bg="/cardiovascular-banner.jpg" />
      <Box className="container">
        {/* side by side content */}
        <Box className="row align-items-center" py={10}>
          <Box className="col-md-5">
            <Text>
              Maintaining good cardiovascular health is critical for longevity
              and quality of life. There are more than 60 different conditions
              that can affect the heart and blood vessels.
              <br />
              <br />
              At Mayflower Medical Group, our physicians tailor cardiovascular
              treatment to each patient’s situation and needs. For some
              patients, that means lifestyle changes. For others it may mean
              medication, surgery or rehabilitation, or any combination of these
              methods.
              <br />
              <br />
              We also place a priority on prevention, providing resources,
              education and counseling to help decrease our patients’ risk
              factors and chances of developing cardiovascular disease.
              <br />
              <br />
              A prevention plan might include a comprehensive cardiac evaluation
              and risk factor assessment where personal factors that increase
              the chance of developing heart disease are identified, a cardiac
              exam with EKG is performed, with the result being an estimation of
              the patient’s heart disease risk over the next 10 years.
              <br />
              <br />
              If you’ve been diagnosed with a cardiovascular condition or are
              concerned about your risk for developing cardiovascular disease we
              can help get you on a path to better health.
            </Text>
          </Box>
          <Box className="col-md-7">
            <Box className="row">
              <Image src="/services/cardio.png" alt="CardioVascular Care" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
