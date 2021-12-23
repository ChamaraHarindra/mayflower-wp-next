import {
  Box,
  Flex,
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
} from "@chakra-ui/react";
import { RiDownloadLine } from "react-icons/ri";

export default function RegistrationForms({ registrationForms }) {
  const forms = registrationForms?.forms?.Forms?.formList;
  return (
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
                    {item.formName}
                  </Flex>
                </Td>
                <Td>{item.formType}</Td>
                <Td>
                  <Flex align="center">
                    <Image
                      src={`/flags/${item.formLanguageImg.slug}.png`}
                      w="15px"
                      h="15px"
                      mr="10px"
                      alt={item.formName}
                    />
                    {item.formLanguage}
                  </Flex>
                </Td>
                <Td>
                  <Link
                    href={`${item.uploadForm.mediaItemUrl}`}
                    target="_blank"
                  >
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
  );
}
