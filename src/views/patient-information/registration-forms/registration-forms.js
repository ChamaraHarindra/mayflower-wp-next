import React from "react";
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
  TableCaption,
} from "@chakra-ui/react";
import Heading from "../../../components/Heading/Heading";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";
import CardImg from "../../../components/CardImg/CardImg";
import { RiExternalLinkLine } from "react-icons/ri";
import { RiDownloadLine } from "react-icons/ri";

export default function RegistrationForms() {
  const forms = [
    {
      title: "Adult Registration form",
      lang: "English",
      img: "united-states.png",
      type: "Adult",
      url: "Adult-Registration-Form-english.pdf",
    },
    {
      title: "Adult Registration form",
      lang: "Espanol",
      img: "spain.png",
      type: "Adult",
      url: "Adult-Registration-Form-espanol.pdf",
    },
    {
      title: "Pediatric form",
      lang: "English",
      img: "united-states.png",
      type: "Pediatric",
      url: "Pediatric-Registration-Form-english.pdf",
    },
    {
      title: "Pediatric form",
      lang: "Espanol",
      img: "spain.png",
      type: "Pediatric",
      url: "Pediatric-Registration-Form-espanol.pdf",
    },
  ];

  return (
    <>
      <SubHeroBanner
        h1="Registration Forms"
        bg="/registration-forms-banner.jpg"
      />
      <Box className="container" my={10}>
        <Box className="row">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Form Name</Th>
                <Th>Form Type</Th>
                <Th>Form Language</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {forms.map((item, i) => (
                <Tr key={i}>
                  <Td>
                    <Flex align="center">
                      <Image
                        src={"/pdf.png"}
                        w="15px"
                        h="15px"
                        mr="10px"
                        alt="PDF"
                      />
                      {item.title}
                    </Flex>
                  </Td>
                  <Td>{item.type}</Td>
                  <Td>
                    <Flex align="center">
                      <Image
                        src={`/flags/${item.img}`}
                        w="15px"
                        h="15px"
                        mr="10px"
                        alt={item.title}
                      />
                      {item.lang}
                    </Flex>
                  </Td>
                  <Td>
                    <Link href={`/forms/${item.url}`} target="_blank">
                      <Button leftIcon={<RiDownloadLine />} variant="ghost">
                        Download
                      </Button>
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
}
