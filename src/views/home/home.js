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
import HomeCarousel from "../../components/Carousel/Carousel";
import ImgContentCard from "../../components/ImgContentCard/ImgContentCard";
import Heading from "../../components/Heading/Heading";
import BannerStripe from "../../components/BannerStripe/BannerStripe";
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";

export default function Home() {
  const features = [
    {
      img: "appointment.svg",
      title: "Hassle Free Appointments",
      text: "Avoid being in long lines in the hospital in this pandemic. Stay at home and make an appointment online for both physical and video appointments. Stay home and stay safe.",
    },
    {
      img: "care.svg",
      title: "Personalized Care",
      text: "Our facility makes sure you and your family will get the best care and individual personal attention to make you feel better mentally and physically.",
    },
    {
      img: "bills.svg",
      title: "Pay bills online",
      text: "No need to rush to the hospital to pay your bills and no need to wait for hours. Just login and pay your bills online with our fully secured portal.",
    },
  ];

  const features2 = [
    {
      img: "our-locations.png",
      title: "Our Locations",
      text: "Our medical care network provides quality, comprehensive healthcare services for families and individuals throughout the San Gabriel Valley and San Bernardino County including Family Care, Gynecology, Pediatric Care and Urgent Care.",
      url: "#",
    },
    {
      img: "quality-care-services.png",
      title: "Quality Care Services",
      text: "Mayflower Medical Group has been serving the San Gabriel Valley for more than 20 years. Our team of qualified, physicians, nurse practitioners, and physician assistants are committed to providing exceptional care and establishing long-term, trusting relationships with our patients.",
      url: "#",
    },
    {
      img: "accepted-insurance.png",
      title: "Accepted Insurance",
      text: "We accept all major insurance plans, HMOs, PPOs, most IPAs and offer affordable cash pricing.",
      url: "#",
    },
  ];

  const lang = [
    {
      id: 1,
      flag: "united-states",
      lang: "English",
    },
    {
      id: 2,
      flag: "spain",
      lang: "Spanish",
    },
    {
      id: 3,
      flag: "philippines",
      lang: "Tagalog",
    },
    {
      id: 4,
      flag: "india",
      lang: "Hindi",
    },
    {
      id: 5,
      flag: "india",
      lang: "Urdu",
    },
    {
      id: 6,
      flag: "india",
      lang: "Urdu",
    },
    {
      id: 7,
      flag: "united-arab-emirates",
      lang: "Arabic",
    },
  ];

  return (
    <>
      {/* carousel */}
      <HomeCarousel />
      {/* features */}
      <Box
        pos="relative"
        bg="white"
        borderTopLeftRadius="20"
        borderTopRightRadius="20"
        mt="-10"
        zIndex="99"
        py="10"
      >
        <Box className="container">
          <Box className="row" mb="100px">
            {features.map((item) => (
              <Box className="col-md-4" key={item.title}>
                <ImgContentCard
                  url={`/icons/${item.img}`}
                  title={item.title}
                  text={item.text}
                />
              </Box>
            ))}
          </Box>
          {/* side by side content */}
          <Box className="row align-items-center" mb="100px">
            <Box className="col-md-6">
              <Heading
                primary="The Place where you will get the best healthcare for you & Your family"
                secondary="Welcome to Mayflower Health Center"
              />
              <Text>
                At Mayflower Medical Group, we deliver on our promise to provide
                exceptional, accessible, quality care to our patients.
                <br />
                <br />
                We are a growing network of Family Medicine, Pediatric and
                Urgent Care facilities in the San Gabriel Valley, San Bernardino
                County, and Orange County. We employ a diverse, multilingual
                team of medical professionals dedicated to excellence and
                quality care.
                <br />
                <br />
                We offer comprehensive healthcare services in various cities
                throughout Southern California including Covina, West Covina, La
                Puente, El Monte, Duarte, Rialto, and Anaheim. Our range of
                services include Family Care, Gynecology and Pediatric Care. Our
                Express Care Clinics in Covina, West Covina, and Anaheim provide
                urgent care and walk-in services with expanded hours of
                operation.
                <br />
                <br />
                Mayflower Medical Group has been operating in the region for
                more than 20 years. We believe in a patient-centered approach,
                anchored by trust. For us, it’s personal. We get to know our
                patients and strive for excellence and create a level of comfort
                that encourages them to ask questions, voice concerns, and be an
                active participant in their health care.
                <br />
                <br />
                We value your health, and we look forward to providing you and
                your family with the highest quality of health care services
                possible for generations to come.
              </Text>
            </Box>
            <Box className="col-md-6">
              <Image
                src="/facility-1.png"
                alt="Welcome to Mayflower Health Center"
              />
            </Box>
          </Box>

          {/* Banner stripe */}
          <Box mb="100px">
            <BannerStripe
              image="/request-appointment-stripe.png"
              heading="Request an Appointment"
              text="Request an appointment with a member of our medical professionals team."
              minH="175px"
              alt="Request an Appointment"
            />
          </Box>

          {/* more features */}
          <Box className="row" mb="100px">
            {features2.map((item) => (
              <Box className="col-md-4" key={item.title}>
                <ImgContentCard
                  url={`/${item.img}`}
                  title={item.title}
                  text={item.text}
                  width="100%"
                  link={item.url}
                  linkText="Learn More"
                />
              </Box>
            ))}
          </Box>

          {/* Testimonials */}

          <Box bg="brandGreen.50" borderRadius="xl" pos="relative" mt="50">
            <Box className="row">
              <Box className="col-md-4">
                <Image
                  src="/testimonial-doctor.png"
                  alt="testimonials"
                  pos="absolute"
                  left="-30px"
                  bottom="0"
                  maxH="500px"
                />
              </Box>
              <Box className="col-md-8" py="10">
                <Heading
                  primary="See what our clients say"
                  secondary="Testimonials"
                />
                <TestimonialCarousel />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* request an interpreter */}
      <Box className="container-fluid" px="0" mt="50px">
        <Box
          className="row align-items-center"
          justifyContent="flex-end"
          mx="0"
        >
          <Box className="col-md-6" maxW="670px">
            <Box>
              <Heading
                primary="Request an Interpreter"
                secondary="multilingual staff members"
              />
              <Text>
                We have multilingual staff members to meet our patients’ needs.
                Languages spoken at our locations include:
                <br />
                <br />
              </Text>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="brandBlue.700"
                mb="4"
              >
                West Covina
              </Text>
              <Flex flexWrap="wrap">
                {lang.map((lang) => (
                  <Tag
                    key={lang.id}
                    size="lg"
                    bg="brandBlue.50"
                    borderRadius="full"
                    py="3"
                    px="4"
                    mr="2"
                    mb="3"
                  >
                    <Avatar
                      src={`/flags/${lang.flag}.png`}
                      size="xs"
                      name="English"
                      ml={-1}
                      mr={2}
                    />
                    <TagLabel>{lang.lang}</TagLabel>
                  </Tag>
                ))}
              </Flex>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="brandBlue.700"
                mb="4"
                mt="5"
              >
                Covina
              </Text>
              <Flex flexWrap="wrap">
                {lang.map((lang) =>
                  lang.lang === "English" ||
                  lang.lang === "Spanish" ||
                  lang.lang === "Tagalog" ||
                  lang.lang === "Arabic" ? (
                    <Tag
                      key={lang.id}
                      size="lg"
                      bg="brandBlue.50"
                      borderRadius="full"
                      py="3"
                      px="4"
                      mr="2"
                      mb="3"
                    >
                      <Avatar
                        src={`/flags/${lang.flag}.png`}
                        size="xs"
                        name="English"
                        ml={-1}
                        mr={2}
                      />
                      <TagLabel>{lang.lang}</TagLabel>
                    </Tag>
                  ) : (
                    ""
                  )
                )}
              </Flex>
              <Button
                px="10"
                py="7"
                mt="10"
                borderRadius="full"
                bg="brandBlue.700"
                w="100%"
              >
                <Text fontWeight="bold">Book your Interpreter Now</Text>
              </Button>
            </Box>
          </Box>
          <Box className="col-md-6" pr="0">
            <Image
              pos="relative"
              width="100%"
              src="/interpretor.jpg"
              alt="Request an Interpreter"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
