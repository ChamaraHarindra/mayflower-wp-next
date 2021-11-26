import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Image,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Lorem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import Heading from "../../components/Heading/Heading";
import CardImg from "../../components/CardImg/CardImg";
import SubHeroBanner from "../../components/SubHeroBanner/SubHeroBanner";
import {
  RiMapPin2Line,
  RiPhoneLine,
  RiPrinterLine,
  RiTimeLine,
  RiDirectionLine,
  RiCalendarEventLine,
} from "react-icons/ri";

export default function OurLocations() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const locations = [
    "Anaheim",
    "Covina",
    "Durate",
    "West Covina",
    "La Puente",
    "El Monte",
    "Realto",
  ];

  const tabs = [
    {
      img: "anaheim.png",
      title: "Anaheim",
      address: "1900 E. La Palma Avenue, Anaheim, CA 92805",
      phone: "(714) 888-5742",
      fax: "(714) 855-3780",
      hours: "Mon - Fri from 9:00am – 5:00pm",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.653667745886!2d-117.89337744955675!3d33.84704112073957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd642a0ecb77b%3A0xf8bdc384ac764e8b!2sMayflower%20Medical%20Group!5e0!3m2!1sen!2sus!4v1637896993017!5m2!1sen!2sus",
      directions:
        "https://www.google.com/maps/dir//Mayflower+Medical+Group,+Anaheim,+CA+92805/@33.8470411,-117.8933774,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dcd642a0ecb77b:0xf8bdc384ac764e8b!2m2!1d-117.8909648!2d33.8469591!3e0?hl=en",
      content: "",
      yelp: "",
      tags: [],
    },
    {
      img: "covina.png",
      title: "Covina",
      address: "1433 North Hollenbeck Avenue, Suite 200, Covina, CA 91722",
      phone: "(626) 331-2209",
      fax: "(626) 974-1100",
      hours: "Mon - Fri from 9:00am – 5:00pm",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.653667745886!2d-117.89337744955675!3d33.84704112073957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd642a0ecb77b%3A0xf8bdc384ac764e8b!2sMayflower%20Medical%20Group!5e0!3m2!1sen!2sus!4v1637896993017!5m2!1sen!2sus",
      directions:
        "https://www.google.com/maps/dir//Mayflower+Medical+Group,+Anaheim,+CA+92805/@33.8470411,-117.8933774,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dcd642a0ecb77b:0xf8bdc384ac764e8b!2m2!1d-117.8909648!2d33.8469591!3e0?hl=en",
      content:
        "Our Covina location offers patients Family Care in a state-of-the-art medical facility. The building has 24 exam rooms and two procedure rooms, ample parking and an onsite laboratory, radiology and pharmacy for patient convenience. The beautifully designed interior welcomes patients with rich finishes, marble flooring, flat screen televisions and vibrant artwork.",
      yelp: "https://biz.yelp.com/home/acik3dwVju7gsp6EKY-tlQ/",
      tags: ["Family Care"],
    },
    {
      img: "durate.png",
      title: "Durate",
      address: "1750 Huntington Drive, Suite B, Duarte, CA 91010",
      phone: "(626) 930-1600",
      fax: "(626) 531-6920",
      hours: "Mon - Fri from 9:00am – 5:00pm",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.653667745886!2d-117.89337744955675!3d33.84704112073957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd642a0ecb77b%3A0xf8bdc384ac764e8b!2sMayflower%20Medical%20Group!5e0!3m2!1sen!2sus!4v1637896993017!5m2!1sen!2sus",
      directions:
        "https://www.google.com/maps/dir//Mayflower+Medical+Group,+Anaheim,+CA+92805/@33.8470411,-117.8933774,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dcd642a0ecb77b:0xf8bdc384ac764e8b!2m2!1d-117.8909648!2d33.8469591!3e0?hl=en",
      content:
        "Our Covina location offers patients Family Care in a state-of-the-art medical facility. The building has 24 exam rooms and two procedure rooms, ample parking and an onsite laboratory, radiology and pharmacy for patient convenience. The beautifully designed interior welcomes patients with rich finishes, marble flooring, flat screen televisions and vibrant artwork.",
      yelp: "https://biz.yelp.com/home/acik3dwVju7gsp6EKY-tlQ/",
      tags: ["Pediatric Care"],
    },
    {
      img: "west-covina.png",
      title: "West Covina",
      address: "140 North Orange Avenue, Suite 100, West Covina, CA 91790",
      phone: "(626) 800-1200",
      fax: "(626) 962-2471",
      hours: "Mon - Fri from 9:00am – 5:00pm",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.653667745886!2d-117.89337744955675!3d33.84704112073957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd642a0ecb77b%3A0xf8bdc384ac764e8b!2sMayflower%20Medical%20Group!5e0!3m2!1sen!2sus!4v1637896993017!5m2!1sen!2sus",
      directions:
        "https://www.google.com/maps/dir//Mayflower+Medical+Group,+Anaheim,+CA+92805/@33.8470411,-117.8933774,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dcd642a0ecb77b:0xf8bdc384ac764e8b!2m2!1d-117.8909648!2d33.8469591!3e0?hl=en",
      content:
        "Built in 2014, our West Covina location is a spacious, state-of-the-art medical facility with 13 exam rooms and one procedure room for Family Care. The facility also houses a separate Pediatrics Department, an onsite Express Care Clinic and an onsite Pharmacy.The beautifully designed interior welcomes patients with rich finishes, hardwood flooring, flat screen televisions and vibrant artwork.",
      yelp: "https://biz.yelp.com/home/Q_XGGtFVo2prevskNfxMLQ/",
      tags: ["Family Care", "Pediatric Care", "Express Care"],
    },
    {
      img: "west-covina.png",
      title: "La Puente",
      address: "1840 N Hacienda Blvd Ste 6 La Puente, CA 91744",
      phone: "(626) 917-4871",
      fax: "(626) 917-8866",
      hours: "Mon, Wed & Fri 10am – 12pm & 2pm – 6pm | Tue & Thu 2pm – 6pm",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.653667745886!2d-117.89337744955675!3d33.84704112073957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd642a0ecb77b%3A0xf8bdc384ac764e8b!2sMayflower%20Medical%20Group!5e0!3m2!1sen!2sus!4v1637896993017!5m2!1sen!2sus",
      directions:
        "https://www.google.com/maps/dir//Mayflower+Medical+Group,+Anaheim,+CA+92805/@33.8470411,-117.8933774,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dcd642a0ecb77b:0xf8bdc384ac764e8b!2m2!1d-117.8909648!2d33.8469591!3e0?hl=en",
      content: "",
      yelp: "",
      tags: ["Family Care"],
    },
    {
      img: "el-monte.png",
      title: "El Monte",
      address: "11436 Garvey Ave., Suite A, El Monte, CA 91732",
      phone: "(626) 459-5420",
      fax: "(626) 444-4511",
      hours: "Mon - Fri 9:00am - 5:00pm",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.653667745886!2d-117.89337744955675!3d33.84704112073957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd642a0ecb77b%3A0xf8bdc384ac764e8b!2sMayflower%20Medical%20Group!5e0!3m2!1sen!2sus!4v1637896993017!5m2!1sen!2sus",
      directions:
        "https://www.google.com/maps/dir//Mayflower+Medical+Group,+Anaheim,+CA+92805/@33.8470411,-117.8933774,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dcd642a0ecb77b:0xf8bdc384ac764e8b!2m2!1d-117.8909648!2d33.8469591!3e0?hl=en",
      content:
        "Built in 2014, our West Covina location is a spacious, state-of-the-art medical facility with 13 exam rooms and one procedure room for Family Care. The facility also houses a separate Pediatrics Department, an onsite Express Care Clinic and an onsite Pharmacy.The beautifully designed interior welcomes patients with rich finishes, hardwood flooring, flat screen televisions and vibrant artwork.",
      yelp: "",
      tags: ["Family Care", "Express Care", "Pediatric Care"],
    },
    {
      img: "el-monte.png",
      title: "Realto",
      address: "1850 N Riverside Ave., Suite 210, Rialto, CA 92376",
      phone: "(909) 562-0012",
      fax: "(909) 562-0067",
      hours: "Mon - Fri 9:00am - 5:00pm",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.653667745886!2d-117.89337744955675!3d33.84704112073957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd642a0ecb77b%3A0xf8bdc384ac764e8b!2sMayflower%20Medical%20Group!5e0!3m2!1sen!2sus!4v1637896993017!5m2!1sen!2sus",
      directions:
        "https://www.google.com/maps/dir//Mayflower+Medical+Group,+Anaheim,+CA+92805/@33.8470411,-117.8933774,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dcd642a0ecb77b:0xf8bdc384ac764e8b!2m2!1d-117.8909648!2d33.8469591!3e0?hl=en",
      content: "",
      yelp: "",
      tags: ["Family Care", "Express Care", "Pediatric Care"],
    },
  ];

  return (
    <>
      <SubHeroBanner h1="Our Locations" bg="/sub-banner-1.png" />
      <Box className="container" my={10}>
        <Box className="row">
          <Box className="col-md-12">
            <Heading primary="Convenient Locations" secondary="Our Presence" />
            <Text>
              Mayflower Medical Group has a network of convenient locations in
              the San Gabriel Valley and San Bernardino County. Our Express Care
              Clinics provide urgent care and after-hours services without an
              appointment.
              <br />
              <br />
            </Text>
            <Tabs>
              <TabList>
                {locations.map((loc) => (
                  <Tab key={loc}>{loc}</Tab>
                ))}
              </TabList>

              <TabPanels>
                {locations.map((loc) => (
                  <TabPanel key={loc}>
                    <Box className="row" mt={5}>
                      {tabs.map(
                        (office, i) =>
                          loc === office.title && (
                            <Box key={i}>
                              <Box className="col-md-12">
                                <CardImg
                                  height="365px"
                                  src={`/locations/${office.img}`}
                                >
                                  <Flex
                                    align="flex-end"
                                    justifyContent="space-between"
                                    w="100%"
                                  >
                                    <Box>
                                      <Flex align="center">
                                        <Text
                                          color="white"
                                          fontSize="3xl"
                                          fontWeight="bold"
                                          mr={5}
                                        >
                                          {office.title}
                                        </Text>
                                        {office.tags &&
                                          office.tags.map((tag, i) => (
                                            <Tag
                                              key={tag}
                                              size="sm"
                                              bg="brandBlue.50"
                                              borderRadius="full"
                                              py="1px"
                                              px="10px"
                                              h="25px"
                                              mr={2}
                                            >
                                              <TagLabel>
                                                {office.tags[i]}
                                              </TagLabel>
                                            </Tag>
                                          ))}
                                      </Flex>
                                      <Flex mt={1} mb={1} align="center">
                                        <Icon
                                          color="whiteAlpha.800"
                                          as={RiMapPin2Line}
                                          w="18px"
                                          h="18px"
                                          mr={2}
                                        />
                                        <Text color="white">
                                          {office.address}
                                        </Text>
                                      </Flex>
                                      <Flex mb={1} align="center">
                                        <Flex align="center" mr="20px">
                                          <Icon
                                            color="whiteAlpha.800"
                                            as={RiPhoneLine}
                                            w="18px"
                                            h="18px"
                                            mr={2}
                                          />
                                          <Text color="white">
                                            {office.phone}
                                          </Text>
                                        </Flex>
                                        <Flex align="center">
                                          <Icon
                                            color="whiteAlpha.800"
                                            as={RiPrinterLine}
                                            w="18px"
                                            h="18px"
                                            mr={2}
                                          />
                                          <Text color="white">
                                            {office.fax}
                                          </Text>
                                        </Flex>
                                      </Flex>
                                      <Flex mb={1} align="center">
                                        <Icon
                                          color="whiteAlpha.800"
                                          as={RiTimeLine}
                                          w="18px"
                                          h="18px"
                                          mr={2}
                                        />
                                        <Text color="white">
                                          {office.hours}
                                        </Text>
                                      </Flex>
                                    </Box>
                                    <Flex align="center">
                                      <Button
                                        mr={4}
                                        variant="brandGreen"
                                        leftIcon={<RiCalendarEventLine />}
                                      >
                                        Make Appointment
                                      </Button>
                                      <Button
                                        mr={4}
                                        variant="brandGreenGhost"
                                        leftIcon={<RiDirectionLine />}
                                      >
                                        Get Directions
                                      </Button>
                                    </Flex>
                                  </Flex>
                                </CardImg>
                              </Box>
                              {office.content.length > 0 ? (
                                <Box className="row" mt={10}>
                                  <Box className="col-md-6">
                                    <Text mb={10}>{office.content}</Text>
                                    <Link href={office.yelp} target="_blank">
                                      <Image
                                        src={`/locations/yelp.png`}
                                        alt="Yel Review"
                                      />
                                    </Link>
                                  </Box>
                                  <Box
                                    className="col-md-6"
                                    borderRadius="xl"
                                    overflow="hidden"
                                    borderColor="brandBlue.500"
                                    borderStyle="solid"
                                    borderWidth="2px"
                                  >
                                    <iframe
                                      src={office.map}
                                      width="100%"
                                      height="450"
                                      style={{ border: 0 }}
                                      allowFullScreen=""
                                      loading="lazy"
                                    ></iframe>
                                  </Box>
                                </Box>
                              ) : (
                                <Box
                                  className="col-md-12"
                                  mt={10}
                                  borderRadius="xl"
                                  overflow="hidden"
                                  borderColor="brandBlue.500"
                                  borderStyle="solid"
                                  borderWidth="2px"
                                >
                                  <iframe
                                    src={office.map}
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                  ></iframe>
                                </Box>
                              )}
                            </Box>
                          )
                      )}
                    </Box>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </>
  );
}
