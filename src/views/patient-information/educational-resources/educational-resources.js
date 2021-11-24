import React from "react";
import { Box, Flex, Icon, Text, Link, Button, Image } from "@chakra-ui/react";
import Heading from "../../../components/Heading/Heading";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";
import CardImg from "../../../components/CardImg/CardImg";
import { RiExternalLinkLine } from "react-icons/ri";

export default function EducationalResources() {
  const resource = [
    {
      title: "Healthy Eating",
      url: "www.heart.org",
      img: "healthy-eating.jpg",
    },
    {
      title: "Easy Tips to Get Active",
      url: "www.heart.org",
      img: "get-active.jpg",
    },
    {
      title: "BMI Calculator",
      url: "www.familydoctor.org",
      img: "bmi-calculator.jpg",
    },
    {
      title: "What Is Osteoporosis?",
      url: "www.nof.org",
      img: "osteoporosis.jpg",
    },
    {
      title: "Managing Asthma",
      url: "www.healthychildren.org",
      img: "asthma.jpg",
    },
    {
      title: "Immunization Schedules",
      url: "www.familydoctor.org",
      img: "immunization.jpg",
    },
    {
      title: "What Is Arthritis?",
      url: "www.arthritis.com",
      img: "arthritis.jpg",
    },
    {
      title: "Vaccine Education Center",
      url: "www.chop.edu",
      img: "vaccine-education-center.jpg",
    },
    {
      title: "Mediterranean Diet",
      url: "www.mayoclinic.org",
      img: "diet.jpg",
    },
  ];

  return (
    <>
      <SubHeroBanner
        h1="Educational Resources"
        bg="/educational-resources-banner.jpg"
      />
      <Box className="container" my={10}>
        <Box className="row">
          {resource.map((item) => (
            <Box className="col-md-4" key={item.img} mb={7}>
              <CardImg src={`/educational-resources/${item.img}`}>
                <Text color="white" fontSize="xl" fontWeight="bold">
                  {item.title}
                </Text>

                <Link
                  href={`https://${item.url}`}
                  target="_blank"
                  color="whiteAlpha.700"
                  _hover={{ color: "white" }}
                >
                  <Flex align="center">
                    <Text>{item.url}</Text>
                    <Icon ml="10px" as={RiExternalLinkLine} />
                  </Flex>
                </Link>
              </CardImg>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
