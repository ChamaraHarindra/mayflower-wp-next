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

export default function CashPrice({ procedureData }) {
  const cashPriceData = procedureData?.cashPriceList?.cashPrices;

  return (
    <Box className="container" my={10}>
      <Box className="row" mt="50px">
        <Box className="col-md-12">
          <Tabs colorScheme="green">
            <TabList>
              {cashPriceData?.procedureTabLabels.map((tabLabels, i) => (
                <Tab key={i}>{tabLabels.tabLabel}</Tab>
              ))}
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box className="row" mt="20px">
                  <Box className="col-md-12">
                    <Table variant="simple" size="sm">
                      <Thead>
                        <Tr>
                          {cashPriceData?.physicalsFormsAndProceduresTableHeadings.map(
                            (th, i) => (
                              <Th key={i}>{th.tableHeading}</Th>
                            )
                          )}
                        </Tr>
                      </Thead>
                      <Tbody>
                        {cashPriceData?.physicalsFormsAndProcedures.map(
                          (item, i) => (
                            <Tr key={i}>
                              <Td>{item.procedure}</Td>
                              <Td>{item.costOfSupplies}</Td>
                              <Td>{item.officeVisit}</Td>
                              <Td>{item.total}</Td>
                            </Tr>
                          )
                        )}
                      </Tbody>
                    </Table>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box className="row" mt="20px">
                  <Box className="col-md-12">
                    <Table variant="simple" size="sm">
                      <Thead>
                        <Tr>
                          {cashPriceData?.vaccinesMedicationsAndInjectablesTableHeadings.map(
                            (th, i) => (
                              <Th key={i}>{th.tableHeading}</Th>
                            )
                          )}
                        </Tr>
                      </Thead>
                      <Tbody>
                        {cashPriceData?.vaccinesMedicationsAndInjectables.map(
                          (item, i) => (
                            <Tr key={i}>
                              <Td>{item.vaccines}</Td>
                              <Td>{item.costOfSupplies}</Td>
                              <Td>{item.officeVisit}</Td>
                              <Td>{item.total}</Td>
                            </Tr>
                          )
                        )}
                      </Tbody>
                    </Table>
                  </Box>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
