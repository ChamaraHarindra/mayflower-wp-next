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
import Heading from "../../components/Heading/Heading";
import SubHeroBanner from "../../components/SubHeroBanner/SubHeroBanner";

export default function About() {
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
      <SubHeroBanner h1="About" bg="/sub-banner-1.png" />
      <Box className="container">
        {/* side by side content */}
        <Box className="row align-items-center" pt={20} pb={10}>
          <Box className="col-md-6">
            <Image
              src="/our-journey.png"
              alt="Welcome to Mayflower Health Center"
            />
          </Box>
          <Box className="col-md-6">
            <Heading primary="Our Journey So far..." secondary="Our history" />
            <Text>
              Mayflower Medical Group, Inc. has been serving patients in
              Southern California for more than 20 years. We’re here to stay and
              we are a part of the communities that we serve.
              <br />
              <br />
              We have built our medical services network on the foundation of
              providing quality, accessible healthcare for individuals and
              families in the San Gabriel Valley and San Barnardino County.
            </Text>
          </Box>
        </Box>
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
    </>
  );
}
