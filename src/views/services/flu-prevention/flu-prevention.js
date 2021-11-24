import React from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  Image,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";
import Heading from "../../../components/Heading/Heading";

export default function FluPrevention() {
  const symptoms = [
    "Fever or feeling feverish/ chills",
    "Cough",
    "Sore throat",
    "Muscle or body aches",
    "Headaches",
    "Fatigue (tiredness)",
    "Possible vomiting and diarrhea",
    "Runny or stuffy nose",
  ];

  return (
    <>
      <SubHeroBanner h1="Flu Prevention" bg="/flu-prevention-banner.png" />
      <Box className="container">
        {/* side by side content */}
        <Box className="row align-items-center" py={10}>
          <Box className="col-md-7">
            <Text>
              When flu season arrives, everyone is at risk. This highly
              contagious virus causes a respiratory illness that comes on
              suddenly, hits hard and can have serious complications. Young
              children, pregnant women, people over the age of 60, and people
              with chronic health conditions or compromised immune systems are
              particularly at risk.
              <br />
              <br />
              Your best defense is taking preventative measures. At Mayflower
              Medical Group, our clinics offer flu shots all year round. Contact
              one of our locations (link to locations) to schedule an
              appointment.
              <br />
              <br />
              While a flu vaccine can help protect you from the virus, it’s not
              foolproof. In addition to getting a flu immunization, we recommend
              these measures to help prevent the spread of the virus:
              <br />
              <br />
            </Text>
            <ul style={{ marginLeft: "20px" }}>
              <li>Try to avoid close contact with sick people.</li>
              <li>
                Wash your hands often with soap and water. If soap and water are
                not available, use an alcohol-based hand sanitizer. Avoid
                touching your eyes, nose and mouth.
              </li>
              <li>
                Cover your nose and mouth with a tissue when you cough or
                sneeze. Discard the tissue in the trash after you use it.
              </li>
            </ul>
          </Box>
          <Box className="col-md-5">
            <Box className="row">
              <Image
                src="/services/flu-prevention.png"
                alt="Chronic Disease Management"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="container-fluid" px="0" mt="50px" bg="#E2E3E8">
        <Box
          className="row align-items-center"
          justifyContent="flex-end"
          mx="0"
        >
          <Box className="col-md-6" maxW="670px">
            <Box>
              <Heading
                primary="You may have the flu if you have:"
                secondary="Flu Symptoms"
              />
              <Flex flexWrap="wrap">
                {symptoms.map((item, i) => (
                  <Tag
                    key={i}
                    size="lg"
                    bg="white"
                    borderRadius="full"
                    py="3"
                    px="4"
                    mr="4"
                    mb="5"
                  >
                    <TagLabel>{item}</TagLabel>
                  </Tag>
                ))}
              </Flex>
            </Box>
          </Box>
          <Box className="col-md-6" pr="0">
            <Image
              pos="relative"
              width="100%"
              src="/services/running-nose.png"
              alt="Flu Symptoms"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
