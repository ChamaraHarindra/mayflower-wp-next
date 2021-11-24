import React from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
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
  const faqs = [
    {
      q: "Does Mayflower Medical Group Accept Medicare?",
      a: "Yes, we are Medicare providers. Because we believe that they offer more benefits and services than traditional Medicare, we encourage our patients to consider a Medicare Advantage Program. These plans are known by names such as SCAN, Secure Horizons, and others. We will accept patients with any type of Medicare coverage, however.",
    },
    {
      q: "I Am Considering Becoming A Mayflower Patient. Is There A Charge To Meet My Prospective New Doctor?",
      a: "No. Your future primary care physician will gladly meet with you to discuss his philosophy, his background training, and any questions you have about the practice. We regret that current regulations do not allow the physician to perform a physical exam, write prescriptions or dispense medical advice during this introductory meeting.",
    },
    {
      q: "Is Mayflower Open To New Patients?",
      a: "Yes",
    },
    {
      q: "How Should I Prepare For My First Visit?",
      a: "Please allow an additional 30 minutes prior to your scheduled appointment to complete the patient information when you arrive at the office. Additionally, please bring your most current insurance card, and a form of identification (such as a California Driver’s License). We apologize in advance; the majority of the information requested is mandated by health plans or government agencies. If your first visit is for a complete physical exam, you may want to consider coming in fasting (no food or drinks for 12 hours) so that we may draw your blood at the time of your visit. Dress comfortably.",
    },
    {
      q: "How Can I Transfer My Medical Records From My Previous Physician To Mayflower?",
      a: "Just give us his/her name and address. There will be a form for you to sign and we will take it from there. Keep in mind there may be a fee from your previous doctor for this and waits of two to three weeks are common.",
    },
    {
      q: "How Long Has Mayflower Been Around?",
      a: "Mayflower Medical Group, Inc. has been serving patients in the San Gabriel Valley for more than 20 years. We’re here to stay and we are a part of the communities that we serve. We have built our medical services network on the foundation of providing quality, accessible healthcare for individuals and families in the San Gabriel Valley and San Bernardino County.",
    },
    {
      q: "What If I Don’t Have Health Insurance And Want To Pay For Services With Cash?",
      a: "No problem. For those patients without insurance, we are proud to offer our Cash Price list which can be found on this website.",
    },
  ];

  return (
    <>
      <SubHeroBanner h1="Faq" bg="/faq-banner.jpg" />
      <Box className="container" my={10}>
        <Box className="row">
          <Box className="col-md-12">
            <Heading
              primary="Frequently Asked Questions"
              secondary="We are here to help"
            />
            <Accordion defaultIndex={[0]} allowMultiple>
              {faqs.map((item, i) => (
                <AccordionItem key={i}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {item.q}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{item.a}</AccordionPanel>
                </AccordionItem>
              ))}

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      What Insurances Does Mayflower Accept?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex flexWrap="wrap">
                    <Box w="50%">
                      <Text fontWeight="bold" mb="20px" fontSize="md">
                        Accepted Insurance Plans
                      </Text>
                      <UnorderedList display="flex" flexWrap="wrap">
                        <ListItem w="50%">Aetna</ListItem>
                        <ListItem w="50%">Anthem Blue Cross</ListItem>
                        <ListItem w="50%">Blue Shield</ListItem>
                        <ListItem w="50%">Care 1st</ListItem>
                        <ListItem w="50%">Cigna</ListItem>
                        <ListItem w="50%">Easy Choice</ListItem>
                        <ListItem w="50%">HealthNet</ListItem>
                        <ListItem w="50%">LA Care</ListItem>
                        <ListItem w="50%">Medi-Cal</ListItem>
                        <ListItem w="50%">Medicare</ListItem>
                        <ListItem w="50%">Molina Healthcare</ListItem>
                        <ListItem w="50%">PacifiCare</ListItem>
                        <ListItem w="50%">SCAN</ListItem>
                        <ListItem w="50%">Secure Horizons</ListItem>
                        <ListItem w="50%">TriCare</ListItem>
                        <ListItem w="50%">United Healthcare</ListItem>
                      </UnorderedList>
                    </Box>
                    <Box w="50%">
                      <Text fontWeight="bold" mb="20px" fontSize="md">
                        We are associated with the following medical groups:
                      </Text>
                      <UnorderedList
                        display="flex"
                        flexWrap="wrap"
                        whiteSpace="pre-wrap"
                        wordBreak="break-word"
                      >
                        <ListItem w="50%">Accountable IPA</ListItem>
                        <ListItem w="50%">
                          Advantage Care Medical Group
                        </ListItem>
                        <ListItem w="50%">Allied Physician IPA</ListItem>
                        <ListItem w="50%">AltaMed IPA</ListItem>
                        <ListItem w="50%">AppleCare Medical Group</ListItem>
                        <ListItem w="50%">CareMore Medical Group</ListItem>
                        <ListItem w="50%">El Projecto</ListItem>
                        <ListItem w="50%">Exceptional Care IPA</ListItem>
                        <ListItem w="50%">Good Samaritan</ListItem>
                        <ListItem w="50%">
                          Greater Covina Medical Group
                        </ListItem>
                        <ListItem w="50%">Healthcare Partners</ListItem>
                        <ListItem w="50%">La Salle</ListItem>
                        <ListItem w="50%" paddingRight="10px">
                          Lakeside Medical Group/Eastland Medical Group
                        </ListItem>
                        <ListItem w="50%">Pacific Independent IPA</ListItem>
                        <ListItem w="50%">Preferred IPA</ListItem>
                        <ListItem w="50%">
                          Primary Care Associates of CA
                        </ListItem>
                        <ListItem w="50%">Prospect Medical Group</ListItem>
                        <ListItem w="50%">Regal Medical Group</ListItem>
                      </UnorderedList>
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </>
  );
}
