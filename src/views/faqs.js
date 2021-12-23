import {
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  ListItem,
  UnorderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Heading from "../components/Heading/Heading";
import { sanitize } from "../utils/miscellaneous";

export default function Faqs({ faqContent }) {
  const faqsList = faqContent?.faqsList?.faqs?.faq;
  return (
    <Box className="container" my={10}>
      <Box className="row">
        <Box className="col-md-12">
          <Heading
            primary="Frequently Asked Questions"
            secondary="We are here to help"
          />
          <Accordion defaultIndex={[0]} allowMultiple>
            {faqsList.map((item, i) => (
              <AccordionItem key={i}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {item.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: sanitize(item?.answer ?? {}),
                    }}
                  />
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}
