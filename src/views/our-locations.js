import {
  Box,
  Flex,
  Icon,
  Text,
  Image,
  Link,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import CardImg from "../components/CardImg/CardImg";
import {
  RiMapPin2Line,
  RiPhoneLine,
  RiPrinterLine,
  RiTimeLine,
  RiDirectionLine,
  RiCalendarEventLine,
} from "react-icons/ri";

export default function OurLocationTabs({ locationTabData }) {
  const location_list = locationTabData?.location_tabs?.locationList?.location;
  const location_tab_data =
    locationTabData?.location_tabs?.locationList?.locationInfo;

  return (
    <Box className="container">
      <Box className="row" mb={10}>
        <Box className="col-md-12">
          <Tabs>
            <TabList>
              {location_list.map((loc) => (
                <Tab key={loc.locationName}>{loc.locationName}</Tab>
              ))}
            </TabList>

            <TabPanels>
              {location_list.map((loc) => (
                <TabPanel key={loc.locationName}>
                  <Box className="row" mt={5}>
                    {location_tab_data.map(
                      (office, i) =>
                        loc.locationName === office.location && (
                          <Box key={i}>
                            <Box className="col-md-12">
                              <CardImg
                                height="365px"
                                src={`/locations/${office.locationImage.slug}.png`}
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
                                        {office.location}
                                      </Text>
                                      {office.tags &&
                                        office.tags.map((tag) => (
                                          <Tag
                                            key={tag.tagLabel}
                                            size="sm"
                                            bg="brandBlue.50"
                                            borderRadius="full"
                                            py="1px"
                                            px="10px"
                                            h="25px"
                                            mr={2}
                                          >
                                            <TagLabel>{tag?.tagLabel}</TagLabel>
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
                                        <Text color="white">{office.fax}</Text>
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
                                      <Text color="white">{office.hours}</Text>
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
                                      <Link
                                        href={office.googleMapDirectionsLink}
                                        target={"_blank"}
                                      >
                                        Get Directions
                                      </Link>
                                    </Button>
                                  </Flex>
                                </Flex>
                              </CardImg>
                            </Box>
                            {office?.content ? (
                              <Box className="row" mt={10}>
                                <Box className="col-md-6">
                                  <Text mb={10}>{office.content}</Text>
                                  <Link href={office.yelpLink} target="_blank">
                                    <Image
                                      src={`/locations/yelp.png`}
                                      alt="Yelp Review"
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
                                    src={office.googleMapLink}
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
                                  src={office.googleMapLink}
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
  );
}
