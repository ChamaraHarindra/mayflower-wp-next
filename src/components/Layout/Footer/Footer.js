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
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import FooterHeader from "../../FooterHeader/FooterHeader";
import {
  RiSendPlaneFill,
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
  RiPhoneFill,
} from "react-icons/ri";
import SocialMediaBtn from "../../SocialMediaBtn/SocialMediaBtn";

export default function Footer() {
  const menuItem = [
    "Home",
    "About Us",
    "Contact us",
    "Locations",
    "Privacy Policy",
    "Pediatrics",
    "Gynecology",
    "General Practice",
    "Internal Medicine",
    "Physician Extenders",
    "Patient Education",
    "Accepted Insurance",
    "Cash Prices",
    "Request an Appointment",
  ];

  const contacts = [
    {
      cat: "General",
      location: "Covina",
      no: "626-331-2209",
    },
    {
      cat: "General",
      location: "La Puente",
      no: "626-800-1200",
    },
    {
      cat: "General",
      location: "West Covina",
      no: "626-800-1200",
    },
    {
      cat: "General",
      location: "Anaheim",
      no: "626-800-1200",
    },
    {
      cat: "Pediatrics",
      location: "Covina",
      no: "626-914-0017",
    },
    {
      cat: "Pediatrics",
      location: "El Monte",
      no: "626-459-5420",
    },
    {
      cat: "Pediatrics",
      location: "West Covina",
      no: "626-800-4200",
    },
    {
      cat: "Pediatrics",
      location: "Durate",
      no: "626-930-1600",
    },
    {
      cat: "Pediatrics",
      location: "Rialto",
      no: "909-562-0012",
    },
    {
      cat: "ExpressCare",
      location: "Covina",
      no: "626-214-3675",
    },
    {
      cat: "ExpressCare",
      location: "El Monte",
      no: "626-598-8372",
    },
    {
      cat: "ExpressCare",
      location: "West Covina",
      no: "626-800-4300",
    },
  ];

  function FooterContact(props) {
    return (
      <>
        <Box w="100%">
          <Flex flexWrap="wrap">
            <Box mb="4">
              <Text fontSize="sm" color="white">
                {props.location}
              </Text>
              <Text fontWeight="bold" color="white">
                {props.no}
              </Text>
            </Box>
          </Flex>
        </Box>
      </>
    );
  }

  let TelList;

  return (
    <>
      <Box className="footer-top" bg="brandBlue.50" py="30px">
        <Box className="container">
          <Box className="row">
            <Box className="col-md-2">
              <FooterHeader text="Useful Links" />
              <VStack align="stretch">
                {menuItem.map((menu, i) =>
                  i <= 4 ? (
                    <Box key={i}>
                      <Link>{menu}</Link>
                    </Box>
                  ) : (
                    ""
                  )
                )}
              </VStack>
            </Box>
            <Box className="col-md-2">
              <FooterHeader text="Medical Team" />
              <VStack align="stretch">
                {menuItem.map((menu, i) =>
                  i > 4 && i < 9 ? (
                    <Box key={i}>
                      <Link>{menu}</Link>
                    </Box>
                  ) : (
                    ""
                  )
                )}
              </VStack>
            </Box>
            <Box className="col-md-2">
              <FooterHeader text="Forms" />
              <VStack align="stretch">
                {menuItem.map((menu, i) =>
                  i > 9 ? (
                    <Box key={i}>
                      <Link>{menu}</Link>
                    </Box>
                  ) : (
                    ""
                  )
                )}
              </VStack>
            </Box>
            <Box className="col-md-4">
              <FooterHeader text="Subscribe to Our Newsletter" />
              <Box mr="5">
                <InputGroup size="lg">
                  <Input
                    type="text"
                    placeholder="Type in your email"
                    size="lg"
                    variant="filled"
                    bg="white"
                    _focus={{
                      bg: "white",
                      borderColor: "brandBlue:500",
                      boxShadow: "brandBlue:500 0px 0px 0px 1px",
                    }}
                    _hover={{ bg: "white" }}
                    borderRadius="full"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      bgGradient="linear(to-r, brandBlue.500, brandGreen.500)"
                      size="sm"
                      borderRadius="full"
                    >
                      <Icon w={6} h={6} as={RiSendPlaneFill} />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Box>
            <Box className="col-md-2">
              <FooterHeader text="Keep in Touch" />
              <HStack spacing="5">
                <SocialMediaBtn
                  href={"#"}
                  IconAs={RiFacebookFill}
                  _hover={{
                    color: "white",
                    bg: "facebook.500",
                    borderColor: "facebook.500",
                  }}
                />
                <SocialMediaBtn
                  href={"#"}
                  IconAs={RiTwitterFill}
                  _hover={{
                    color: "white",
                    bg: "twitter.500",
                    borderColor: "twitter.500",
                  }}
                />
                <SocialMediaBtn
                  href={"#"}
                  IconAs={RiInstagramFill}
                  _hover={{
                    color: "white",
                    bg: "pink.500",
                    borderColor: "pink.500",
                  }}
                />
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="footer-bottom" bg="brandBlue.500" py="30px">
        <Box className="container">
          <Box className="row">
            <Box className="col-md-4">
              <Flex alignItems="center" mb={3}>
                <Icon w={4} h={4} as={RiPhoneFill} color="white" mr={2} />
                <Text fontWeight="bold" color="white" fontSize="lg">
                  General
                </Text>
              </Flex>
              <Flex alignItems="center" flexWrap="wrap">
                {contacts.map((item, i) =>
                  i <= 3 ? (
                    <Box key={i} w="50%">
                      <FooterContact location={item.location} no={item.no} />
                    </Box>
                  ) : (
                    ""
                  )
                )}
              </Flex>
            </Box>
            <Box className="col-md-4">
              <Flex alignItems="center" mb={3}>
                <Icon w={4} h={4} as={RiPhoneFill} color="white" mr={2} />
                <Text fontWeight="bold" color="white" fontSize="lg">
                  Pediatric
                </Text>
              </Flex>
              <Flex alignItems="center" flexWrap="wrap">
                {contacts.map((item, i) =>
                  i > 3 && i <= 8 ? (
                    <Box key={i} w="50%">
                      <FooterContact location={item.location} no={item.no} />
                    </Box>
                  ) : (
                    ""
                  )
                )}
              </Flex>
            </Box>
            <Box className="col-md-4">
              <Flex alignItems="center" mb={3}>
                <Icon w={4} h={4} as={RiPhoneFill} color="white" mr={2} />
                <Text fontWeight="bold" color="white" fontSize="lg">
                  ExpressCare
                </Text>
              </Flex>
              <Flex alignItems="center" flexWrap="wrap">
                {contacts.map((item, i) =>
                  i > 8 ? (
                    <Box key={i} w="50%">
                      <FooterContact location={item.location} no={item.no} />
                    </Box>
                  ) : (
                    ""
                  )
                )}
              </Flex>
            </Box>
          </Box>
          <Box className="row">
            <Box w="100%" h="1px" bg="whiteAlpha.500" my={4} />
            <Text textAlign="center" fontSize="sm" mt={2} color="white">
              Copyright ©2021{" "}
              <Link
                href="#"
                color="brandGreen.200"
                _hover={{ color: "brandGreen.300" }}
                fontWeight="bold"
              >
                mayflowermedicalgroup
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
