import {
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  Image,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import Heading from "../../components/Heading/Heading";
import SubHeroBanner from "../../components/SubHeroBanner/SubHeroBanner";
import CardImg from "../../components/CardImg/CardImg";
import {
  RiMapPin2Line,
  RiPhoneLine,
  RiPrinterLine,
  RiTimeLine,
  RiDirectionLine,
  RiCalendarEventLine,
} from "react-icons/ri";

export default function Contact() {
  const locations = [
    {
      img: "anaheim.png",
      title: "Anaheim",
      address: "1900 E. La Palma Avenue, Anaheim, CA 92805",
      phone: "(714) 888-5742",
      fax: "(714) 855-3780",
      hours: "Mon - Fri from 9:00am – 5:00pm",
    },
    {
      img: "covina.png",
      title: "Covina",
      address: "1433 North Hollenbeck Avenue, Suite 200, Covina, CA 91722",
      phone: "(626) 331-2209",
      fax: "(626) 974-1100",
      hours: "Mon - Fri from 9:00am – 5:00pm",
    },
    {
      img: "durate.png",
      title: "Durate",
      address: "1750 Huntington Drive, Suite B, Duarte, CA 91010",
      phone: "(626) 930-1600",
      fax: "(626) 531-6920",
      hours: "Mon - Fri from 9:00am – 5:00pm",
    },
    {
      img: "west-covina.png",
      title: "West Covina",
      address: "140 North Orange Avenue, Suite 100, West Covina, CA 91790",
      phone: "(626) 800-1200",
      fax: "(626) 962-2471",
      hours: "Mon - Fri from 9:00am – 5:00pm",
    },
    {
      img: "west-covina.png",
      title: "La Puente",
      address: "1840 N Hacienda Blvd Ste 6 La Puente, CA 91744",
      phone: "(626) 917-4871",
      fax: "(626) 917-8866",
      hours: "Mon, Wed & Fri 10am – 12pm & 2pm – 6pm | Tue & Thu 2pm – 6pm",
    },
    {
      img: "el-monte.png",
      title: "El Monte",
      address: "11436 Garvey Ave., Suite A, El Monte, CA 91732",
      phone: "(626) 459-5420",
      fax: "(626) 444-4511",
      hours: "Mon - Fri 9:00am - 5:00pm",
    },
    {
      img: "el-monte.png",
      title: "Realto",
      address: "1850 N Riverside Ave., Suite 210, Rialto, CA 92376",
      phone: "(909) 562-0012",
      fax: "(909) 562-0067",
      hours: "Mon - Fri 9:00am - 5:00pm",
    },
  ];
  return (
    <>
      <SubHeroBanner h1="Contact" bg="/sub-banner-1.png" />
      <Box className="container">
        {/* side by side content */}
        <Box className="row align-items-center" pt={10} pb={10}>
          <Box className="col-md-6">
            <Heading
              primary="Tell us what you think"
              secondary="Keep in touch"
            />
            <Text>
              You are more than welcome to give your thoughts on us by filling
              out below form. We would love to hear from you. Once the form is
              submitted, one of our coordinators will contact you within 48
              hours. Please be kind enough not to send emergency requests by
              this form.
            </Text>
            <Box className="row" mt={10}>
              <Box className="col-md-6" mb={5}>
                <FormControl id="fName">
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" variant="filled" />
                </FormControl>
              </Box>
              <Box className="col-md-6" mb={5}>
                <FormControl id="lName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" variant="filled" />
                </FormControl>
              </Box>
              <Box className="col-md-6" mb={5}>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" variant="filled" />
                </FormControl>
              </Box>
              <Box className="col-md-6" mb={5}>
                <FormControl id="subject">
                  <FormLabel>Subject</FormLabel>
                  <Input type="text" variant="filled" />
                </FormControl>
              </Box>
              <Box className="col-md-12" mb={5}>
                <FormControl id="message">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    variant="filled"
                    placeholder="Type in your message here"
                  />
                </FormControl>
              </Box>
              <Box className="col-md-12" mb={5}>
                <Button variant="solid" colorScheme="brandBlue">
                  Send Message
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className="col-md-6">
            <Image
              src="/contact.png"
              alt="Welcome to Mayflower Health Center"
            />
          </Box>
        </Box>
        <Box className="row">
          <Box className="col-md-12">
            <Heading primary="Our Location" secondary="We are Everywhere" />
          </Box>
        </Box>
        <Box className="row">
          {locations.map((office, i) => (
            <Box className="col-md-4" key={i} mb={8}>
              <CardImg height="226px" src={`/locations/${office.img}`}>
                <Flex align="flex-end" justifyContent="space-between" w="100%">
                  <Box>
                    <Flex align="center">
                      <Text
                        color="white"
                        fontSize="2xl"
                        fontWeight="bold"
                        mr={5}
                      >
                        {office.title}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </CardImg>
              <Flex mt={4} mb={2}>
                <Icon
                  color="blackAlpha.800"
                  as={RiMapPin2Line}
                  w="18px"
                  h="18px"
                  mr={2}
                />
                <Text fontSize="sm">{office.address}</Text>
              </Flex>
              <Flex mb={2} align="center">
                <Flex align="center" mr="20px">
                  <Icon
                    color="blackAlpha.800"
                    as={RiPhoneLine}
                    w="18px"
                    h="18px"
                    mr={2}
                  />
                  <Text fontSize="sm">{office.phone}</Text>
                </Flex>
                <Flex align="center">
                  <Icon
                    color="blackAlpha.800"
                    as={RiPrinterLine}
                    w="18px"
                    h="18px"
                    mr={2}
                  />
                  <Text fontSize="sm">{office.fax}</Text>
                </Flex>
              </Flex>
              <Flex mb={2} align="center">
                <Icon
                  color="blackAlpha.800"
                  as={RiTimeLine}
                  w="18px"
                  h="18px"
                  mr={2}
                />
                <Text fontSize="sm">{office.hours}</Text>
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
