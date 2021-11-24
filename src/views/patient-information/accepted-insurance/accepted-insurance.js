import React from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Image,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Heading from "../../../components/Heading/Heading";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";

export default function AcceptedInsurance() {
  const insurance = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <>
      <SubHeroBanner
        h1="Accepted Insurance"
        bg="/accepted-insurance-banner.png"
      />
      <Box className="container" my={10}>
        <Box className="row">
          <Box className="col-md-12">
            <Heading
              primary="We Accept major insurance"
              secondary="insurance info"
            />
            <Text>
              At Mayflower Medical Group, we accept all major insurance plans,
              HMOs, PPOs, most IPAs and offer affordable cash pricing. So we may
              better serve you, please bring your insurance card and valid ID
              with you each time you visit and let our front desk staff know of
              any changes or updates to your insurance coverage.
              <br />
              <br />
              A co-payment may be required at the time of your visit. We accept
              cash, checks and most major credit cards.
              <br />
              <br />
              If you do not see your insurance plan or medical group listed
              above, please call our office at (626) 331-2209.
            </Text>
            <Box className="row" mt="20px" mb="50px">
              {insurance.map((item) => (
                <Box className="col-md-2" key={item} mb={4}>
                  <Box
                    boxShadow="lg"
                    bg="white"
                    p="10px 20px"
                    borderRadius="xl"
                  >
                    <Image src={`/insurance/${item}.png`} alt="Insurance" />
                  </Box>
                </Box>
              ))}
            </Box>
            <Heading
              primary="Our associated medical groups"
              secondary="Our Partners"
            />
            <UnorderedList
              display="flex"
              flexWrap="wrap"
              whiteSpace="pre-wrap"
              wordBreak="break-word"
            >
              <ListItem w="50%">Accountable IPA</ListItem>
              <ListItem w="50%">Advantage Care Medical Group</ListItem>
              <ListItem w="50%">Allied Physician IPA</ListItem>
              <ListItem w="50%">AltaMed IPA</ListItem>
              <ListItem w="50%">AppleCare Medical Group</ListItem>
              <ListItem w="50%">CareMore Medical Group</ListItem>
              <ListItem w="50%">El Projecto</ListItem>
              <ListItem w="50%">Exceptional Care IPA</ListItem>
              <ListItem w="50%">Good Samaritan</ListItem>
              <ListItem w="50%">Greater Covina Medical Group</ListItem>
              <ListItem w="50%">Healthcare Partners</ListItem>
              <ListItem w="50%">La Salle</ListItem>
              <ListItem w="50%" paddingRight="10px">
                Lakeside Medical Group/Eastland Medical Group
              </ListItem>
              <ListItem w="50%">Pacific Independent IPA</ListItem>
              <ListItem w="50%">Preferred IPA</ListItem>
              <ListItem w="50%">Primary Care Associates of CA</ListItem>
              <ListItem w="50%">Prospect Medical Group</ListItem>
              <ListItem w="50%">Regal Medical Group</ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </>
  );
}
