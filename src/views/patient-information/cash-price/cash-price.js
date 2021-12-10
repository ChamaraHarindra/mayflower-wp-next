import {
  Box,
  Flex,
  Icon,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Heading from "../../../components/Heading/Heading";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";

export default function CashPrice() {
  const procedures = [
    {
      procedure: "New Patient",
      cost_of_supplies: "n/a",
      office_visit: "$89.00",
      total: "$89.00",
    },
    {
      procedure: "Established Patient",
      cost_of_supplies: "n/a",
      office_visit: "$70.00",
      total: "$70.00",
    },
    {
      procedure: "Physical",
      cost_of_supplies: "$50.00",
      office_visit: "$70.00",
      total: "$120.00",
    },
    {
      procedure: "Physical with Pap Smear",
      cost_of_supplies: "$100.00",
      office_visit: "$70.00",
      total: "$170.00",
    },
    {
      procedure: "Well-woman Exam (Pap Smear)",
      cost_of_supplies: "$80.00",
      office_visit: "$70.00",
      total: "$150.00",
    },
    {
      procedure: "School Physical",
      cost_of_supplies: "$20.00",
      office_visit: "$70.00",
      total: "$90.00",
    },
    {
      procedure: "Work Physical 1 PAGE",
      cost_of_supplies: "$10.00",
      office_visit: "$70.00",
      total: "$80.00",
    },
    {
      procedure: "Work Physical 2 PAGES",
      cost_of_supplies: "$20.00",
      office_visit: "$70.00",
      total: "$90.00",
    },
    {
      procedure: "EDD Form",
      cost_of_supplies: "$20.00",
      office_visit: "$70.00",
      total: "$90.00",
    },
    {
      procedure: "Breathing Treatment",
      cost_of_supplies: "$45.00",
      office_visit: "$70.00",
      total: "$115.00",
    },
    {
      procedure: "Staple Removal",
      cost_of_supplies: "$90.00",
      office_visit: "$0.00",
      total: "$90.00",
    },
    {
      procedure: "Suture Removal",
      cost_of_supplies: "$90.00",
      office_visit: "$0.00",
      total: "$90.00",
    },
    {
      procedure: "EKG",
      cost_of_supplies: "$30.00",
      office_visit: "$70.00",
      total: "$100.00",
    },
    {
      procedure: "Ear Lavage",
      cost_of_supplies: "$50.00",
      office_visit: "$70.00",
      total: "$120.00",
    },
    {
      procedure: "UA",
      cost_of_supplies: "$30.00",
      office_visit: "$70.00",
      total: "$100.00",
    },
    {
      procedure: "Pregnancy Test",
      cost_of_supplies: "$30.00",
      office_visit: "$70.00",
      total: "$100.00",
    },
    {
      procedure: "Suture Small Laceration/Abscess",
      cost_of_supplies: "$100.00",
      office_visit: "$70.00",
      total: "$170.00",
    },
    {
      procedure: "Moderate Laceration/Abscess",
      cost_of_supplies: "$150.00",
      office_visit: "$70.00",
      total: "$220.00",
    },
    {
      procedure: "Large Laceration/Abscess",
      cost_of_supplies: "$200.00",
      office_visit: "$70.00",
      total: "$270.00",
    },
  ];

  const vaccines = [
    {
      procedure: "B12",
      cost_of_supplies: "$15.00",
      office_visit: "n/a",
      total: "$15.00",
    },
    {
      procedure: "Depo",
      cost_of_supplies: "$120.00",
      office_visit: "$70.00",
      total: "$190.00",
    },
    {
      procedure: "Dtap",
      cost_of_supplies: "$40.00",
      office_visit: "$70.00",
      total: "$110.00",
    },
    {
      procedure: "Flu vaccine (trivalent)",
      cost_of_supplies: "$30.00",
      office_visit: "$70.00",
      total: "$100.00",
    },
    {
      procedure: "Flu vaccine (quadrivalent)",
      cost_of_supplies: "$40.00",
      office_visit: "$70.00",
      total: "$110.00",
    },
    {
      procedure: "Gardasil 9",
      cost_of_supplies: "$250.00",
      office_visit: "$70.00",
      total: "$320.00",
    },
    {
      procedure: "Hep A",
      cost_of_supplies: "$80.00",
      office_visit: "$70.00",
      total: "$150.00",
    },
    {
      procedure: "Hep B",
      cost_of_supplies: "$80.00",
      office_visit: "$70.00",
      total: "$150.00",
    },
    {
      procedure: "HIB",
      cost_of_supplies: "$20.00",
      office_visit: "$70.00",
      total: "$90.00",
    },
    {
      procedure: "MMR",
      cost_of_supplies: "$90.00",
      office_visit: "$70.00",
      total: "$160.00",
    },
    {
      procedure: "Pneumovax",
      cost_of_supplies: "$120.00",
      office_visit: "$70.00",
      total: "$190.00",
    },
    {
      procedure: "Prevnar-13",
      cost_of_supplies: "$230.00",
      office_visit: "$70.00",
      total: "$300.00",
    },
    {
      procedure: "TB Test",
      cost_of_supplies: "$15.00",
      office_visit: "$70.00",
      total: "$85.00",
    },
    {
      procedure: "TD",
      cost_of_supplies: "$50.00",
      office_visit: "$70.00",
      total: "$120.00",
    },
    {
      procedure: "TDAP",
      cost_of_supplies: "$45.00",
      office_visit: "$70.00",
      total: "$115.00",
    },
    {
      procedure: "Zoster Vax",
      cost_of_supplies: "$270.00",
      office_visit: "$70.00",
      total: "$340.00",
    },
    {
      procedure: "Ceftriaxone 500 mg",
      cost_of_supplies: "$30.00",
      office_visit: "$70.00",
      total: "$100.00",
    },
    {
      procedure: "Ceftriaxone 1 gm",
      cost_of_supplies: "$30.00",
      office_visit: "$70.00",
      total: "$100.00",
    },
    {
      procedure: "Solumedrol 125 mg",
      cost_of_supplies: "$30.00",
      office_visit: "$70.00",
      total: "$100.00",
    },
    {
      procedure: "Toradol 60 mg",
      cost_of_supplies: "$30.00",
      office_visit: "$70.00",
      total: "$100.00",
    },
  ];

  return (
    <>
      <SubHeroBanner h1="Cash Price" bg="/cash-price-banner.jpg" />
      <Box className="container" my={10}>
        <Box className="row">
          <Box className="col-md-12">
            <Heading primary="Our Pricing Info" secondary="best prices" />
            <Text>
              Cash prices offered require payment at the time of service and are
              available to only those patients without health insurance coverage
              for the service. Patients with HSA plans (high deductible PPOs)
              are not eligible for cash prices for covered services because an
              HSA is a part of a PPO insurance plan. Pap smear and pathology
              specimen readings are NOT included in cash pricing. You may
              receive a bill for these services from an outside party.
            </Text>
            <Box className="row" mt="50px">
              <Box className="col-md-12">
                <Tabs colorScheme="green">
                  <TabList>
                    <Tab>Physicals, Forms and Procedures</Tab>
                    <Tab>Vaccines, Medications and Injectables</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Box className="row" mt="20px">
                        <Box className="col-md-12">
                          <Table variant="simple" size="sm">
                            <Thead>
                              <Tr>
                                <Th>Physicals/Forms/Procedures</Th>
                                <Th>Cost of Supplies</Th>
                                <Th>Office Visit</Th>
                                <Th>Total</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {procedures.map((item, i) => (
                                <Tr key={i}>
                                  <Td>{item.procedure}</Td>
                                  <Td>{item.cost_of_supplies}</Td>
                                  <Td>{item.office_visit}</Td>
                                  <Td>{item.total}</Td>
                                </Tr>
                              ))}
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
                                <Th>Vaccine</Th>
                                <Th>Cost of Supplies</Th>
                                <Th>Office Visit</Th>
                                <Th>Total</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {vaccines.map((item, i) => (
                                <Tr key={i}>
                                  <Td>{item.procedure}</Td>
                                  <Td>{item.cost_of_supplies}</Td>
                                  <Td>{item.office_visit}</Td>
                                  <Td>{item.total}</Td>
                                </Tr>
                              ))}
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
        </Box>
      </Box>
    </>
  );
}
