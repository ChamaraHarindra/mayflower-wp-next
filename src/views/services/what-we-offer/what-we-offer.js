import React from "react";
import { Box, Flex, Icon, Text, Link, Button, Image } from "@chakra-ui/react";
import Heading from "../../../components/Heading/Heading";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";
import AddressBlock from "../../../components/AddressBlock/AddressBlock";

export default function WhatWeOffer() {
  const services = [
    {
      img: "adolescent-care",
      name: "Adolescent Care",
    },
    {
      img: "cardiovascular-care",
      name: "Cardiovascular Care",
    },
    {
      img: "chronic-disease-management",
      name: "Chronic Disease Management",
    },
    {
      img: "preventive-care",
      name: "Preventative Care",
    },
    {
      img: "flu-prevention",
      name: "Flu Prevention",
    },
    {
      img: "pediatric",
      name: "Pediatric Care",
    },
    {
      img: "general-primary-care",
      name: "General Primary Care",
    },
    {
      img: "women-health",
      name: "Women’s care",
    },
    {
      img: "geriatric-care",
      name: "Geriatric Care",
    },
    {
      img: "men-health",
      name: "Men’s Health",
    },
    {
      img: "office-procedures-surgery",
      name: "Office Procedures & Surgery",
    },
    {
      img: "adolescent-care",
      name: "Adolescent Care",
    },
  ];
  return (
    <>
      <SubHeroBanner h1="What We Offer" bg="/sub-banner-1.png" />
      <Box className="container">
        {/* side by side content */}
        <Box className="row align-items-center" py={10}>
          <Box className="col-md-5">
            <Heading primary="What we Offer" secondary="Our Services" />
            <Text>
              Our team consists of board-certified physicians in the areas of
              Pediatrics, Gynecology, Family Practice, General Practice and
              Internal Medicine, along with qualified physician extenders who
              are committed to delivering the highest level of patient care at
              our medical offices and Express Care Walk-In Clinics.
            </Text>
          </Box>
          <Box className="col-md-7">
            <Box className="row">
              {services.map((item, i) => (
                <Box className="col-md-4" key={i} mb={5}>
                  <Link
                    className="img-card"
                    href={`/services/${item.img}`}
                    display="block"
                    overflow="hidden"
                    borderRadius="3xl"
                    pos="relative"
                    w="100%"
                    boxShadow="lg"
                    minH="140px"
                    mr={3}
                    _hover={{ boxShadow: "2xl" }}
                  >
                    <Image
                      src={`/services/thumb-sm/${item.img}.png`}
                      alt={item.name}
                      position="absolute"
                      width="100%"
                      height="100%"
                    />
                    <Box
                      h="70%"
                      w="100%"
                      bgGradient="linear( rgba(0,0,0,0), rgba(0,0,0,0.9))"
                      position="absolute"
                      bottom="0"
                    />
                    <Box position="absolute" bottom="20px" left="15px">
                      <Text fontSize="xl" fontWeight="bold" color="white">
                        {item.name}
                      </Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="container-fluid" px="0" my="50px">
        <Box
          className="row align-items-center"
          justifyContent="flex-end"
          mx="0"
        >
          <Box className="col-md-6" maxW="670px">
            <Box>
              <Heading
                primary="Family Care & Primary Care"
                secondary="Family is everything"
              />
              <Text>
                Our Family Care and Primary Care providers at our Covina, West
                Covina and La Puente clinics are devoted to treating and caring
                for patients at every stage of life.
                <br />
                <br />
                Our board-certified physicians and qualified medical
                professionals can take care of the comprehensive healthcare
                needs of individuals and families.
                <br />
                <br />
                We strive to establish long-lasting, trusting relationships with
                each and every one of our patients. If your healthcare needs
                should require a specialist or hospitalization, you can trust
                that your Mayflower healthcare provider will stick with you
                through the process, helping to coordinate your care and
                providing the support you should expect from your primary care
                provider.
                <br />
                <br />
              </Text>
              <Flex flexWrap="wrap">
                <AddressBlock
                  mr={5}
                  mb={5}
                  maxW="250px"
                  location="Covina"
                  address="1433 North Hollenbeck Avenue, 
                  Suite 200
                  Covina, CA 91722"
                  phone="(626) 331-2209"
                />
                <AddressBlock
                  mr={5}
                  maxW="250px"
                  location="La Puente"
                  address="1840 North Hacienda Boulevard, 
                  Suite 6
                  La Puente, CA 91744"
                  phone="(626) 917-4871"
                  mb={5}
                />
                <AddressBlock
                  mb={5}
                  maxW="250px"
                  location="West Covina"
                  address="140 N Orange Ave Suite 104 West Covina, CA 91790"
                  phone="(626) 800-4200"
                />
              </Flex>
            </Box>
          </Box>
          <Box className="col-md-6" pr="0">
            <Image
              pos="relative"
              width="100%"
              src="/services/family-care.png"
              alt="Request an Interpreter"
            />
          </Box>
        </Box>
      </Box>
      <Box className="container-fluid" px="0" my="50px">
        <Box
          className="row align-items-center"
          justifyContent="flex-start"
          mx="0"
        >
          <Box className="col-md-6" pl="0">
            <Image
              pos="relative"
              width="100%"
              src="/services/gynecology.png"
              alt="Gynecology"
            />
          </Box>
          <Box className="col-md-6" maxW="670px">
            <Box>
              <Heading primary="Gynecology" secondary="Healthy Pregnancy" />
              <Text>
                Mayflower Medical Group provides quality women’s healthcare
                services from providers who specialize in obstetrics health at
                our West Covina location.
                <br />
                <br />
                From women’s health screenings, contraception, maternity and
                post-partum care to menopause care, Mayflower offers
                specialized, comprehensive care for female patients.
                <br />
                <br />
              </Text>
              <Flex flexWrap="wrap">
                <AddressBlock
                  mr={5}
                  mb={5}
                  maxW="250px"
                  location="West Covina"
                  address="140 N Orange Ave Suite 104 West Covina, CA 91790"
                  phone="(626) 800-4200"
                />
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="container-fluid" px="0" my="50px">
        <Box
          className="row align-items-center"
          justifyContent="flex-end"
          mx="0"
        >
          <Box className="col-md-6" maxW="670px">
            <Box>
              <Heading
                primary="Pediatric Care"
                secondary="Care for the future generation"
              />
              <Text>
                It’s beneficial for children to have a dedicated healthcare
                provider treating and caring for them as they grow. Our Covina,
                West Covina, El Monte and Rialto locations house Mayflower’s
                Pediatric Care providers, offering quality medical care for
                infants, children and adolescents.
                <br />
                <br />
                Mayflower’s Pediatric Care Providers love working with children.
                They are well qualified to diagnose and treat childhood
                illnesses and injuries,and provide comprehensive and complete
                care for the youngest members of your family.
                <br />
                <br />
              </Text>
              <Flex flexWrap="wrap">
                <AddressBlock
                  mr={5}
                  mb={5}
                  maxW="250px"
                  location="Covina"
                  address="1433 North Hollenbeck Avenue, 
                  Suite 200
                  Covina, CA 91722"
                  phone="(626) 331-2209"
                />
                <AddressBlock
                  mr={5}
                  maxW="250px"
                  location="La Puente"
                  address="1840 North Hacienda Boulevard, 
                  Suite 6
                  La Puente, CA 91744"
                  phone="(626) 917-4871"
                  mb={5}
                />
                <AddressBlock
                  mb={5}
                  maxW="250px"
                  location="West Covina"
                  address="140 N Orange Ave Suite 104 West Covina, CA 91790"
                  phone="(626) 800-4200"
                />
              </Flex>
            </Box>
          </Box>
          <Box className="col-md-6" pr="0">
            <Image
              pos="relative"
              width="100%"
              src="/services/pediatric-care.png"
              alt="Pediatric"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
