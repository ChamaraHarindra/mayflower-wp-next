import React from "react";
import {
  Stack,
  HStack,
  VStack,
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  Image,
  StackDivider,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  Avatar,
} from "@chakra-ui/react";
import Heading from "../../../components/Heading/Heading";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";
import ImgContentCard from "../../../components/ImgContentCard/ImgContentCard";

export default function AdolescentCare() {
  const services = [
    {
      img: "1.png",
      title: "General physical health & nutrition",
      text: "Physicals; immunizations; well child examinations; treatment of minor illnesses and injuries including flu, bronchitis, and upper respiratory infections; assessment and treatment of eating disorders and nutritional concerns; allergies and asthma management.",
    },
    {
      img: "2.png",
      title: "Mental health & substance abuse",
      text: "Coping skills, stress management, drug and alcohol usage education, psychiatric and social work services",
    },
    {
      img: "3.png",
      title: "Sexual health",
      text: "Pubertal development, STDs and HIV education, contraception, menstrual health, HPV test",
    },
    {
      img: "4.png",
      title: "Dermatologic health",
      text: "Acne, skin conditions, warts, eczema, burns, psoriasis, ringworm and other skin infections",
    },
    {
      img: "5.png",
      title: "ADD/ ADHD",
      text: "Mental and emotional well-being, severity, prevalence, difficulty learning, understanding, or paying attention, medication",
    },
  ];

  return (
    <>
      <SubHeroBanner h1="Adolescent Care" bg="/banner-adolescent.jpg" />
      <Box className="container-fluid" px="0" mb="50px">
        <Box
          className="row align-items-center"
          justifyContent="flex-end"
          mx="0"
        >
          <Box className="col-md-6" maxW="670px">
            <Box>
              <Heading
                primary="Making Healthy Young Adults"
                secondary="Adolescent care"
              />
              <Text>
                Much change happens as children transition to adulthood. As your
                Family Medicine Provider, we are committed to helping your
                children maintain good health and understand the changes their
                bodies are experiencing during this significant life stage.
                <br />
                <br />
                Our goal is to work with you to provide a positive influence on
                your child’s lifestyle and behavioral choices to help promote
                decisions that will have a positive outcome on their health now
                and in the future.
                <br />
                <br />
                Adolescence can be a difficult time. We offer education, medical
                support and resources in a confidential environment where young
                patients and their parents can feel free to ask questions and
                voice their concerns.
              </Text>
            </Box>
          </Box>
          <Box className="col-md-6" pr="0">
            <Image
              pos="relative"
              width="100%"
              src="/young-adults.png"
              alt="Pediatric"
            />
          </Box>
        </Box>
      </Box>
      <Box className="container">
        <Box className="row">
          <Box className="col-md-12">
            <Heading
              primary="Our medical services for our adolescent patients include, 
                but are not limited to:"
              secondary="Adolescent care Services"
            />
          </Box>
        </Box>
        <Box className="row">
          {services.map((item) => (
            <Box className="col-md-4" mb={10} key={item.title}>
              <ImgContentCard
                url={`/services/adolescent/${item.img}`}
                title={item.title}
                text={item.text}
                width="100%"
                style={{ borderRadius: "10px" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
