import { useDisclosure } from "@chakra-ui/react";
import {
  Box,
  Text,
  Image,
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
} from "@chakra-ui/react";
import CardImg from "../components/CardImg/CardImg";
// import DoctorModal from "../components/DoctorModal/DoctorModal";

export default function MedicalTeam({ medicalTeamData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box className="container">
        <Box className="row">
          <Box className="col-md-12">
            <Tabs>
              <TabList>
                {medicalTeamData?.medicalTeamList?.medicalTeam?.tabLabels.map(
                  (dept) => (
                    <Tab key={dept.tabLabelName}>
                      {_.startCase(dept?.tabLabelName)}
                    </Tab>
                  )
                )}
              </TabList>
              <TabPanels>
                {medicalTeamData?.medicalTeamList?.medicalTeam?.tabLabels.map(
                  (dept) => (
                    <TabPanel key={dept.tabLabelName}>
                      <Box className="row" mt={5}>
                        {medicalTeamData?.medicalTeamList?.medicalTeam?.doctors.map(
                          (doc, i) =>
                            dept?.tabLabelName === doc?.department && (
                              <Box
                                className="col-md-3 col-lg-2 col-6 col-sm-4"
                                key={i}
                              >
                                <CardImg
                                  src={`/medical-team/${doc?.profilePicture?.slug}.jpg`}
                                >
                                  <Text
                                    color="white"
                                    fontSize="md"
                                    fontWeight="bold"
                                  >
                                    {doc?.name}
                                  </Text>
                                  <Text color="whiteAlpha.700" fontSize="sm">
                                    {_.startCase(doc?.location)}
                                  </Text>
                                </CardImg>
                              </Box>
                            )
                        )}
                      </Box>
                    </TabPanel>
                  )
                )}
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </>
  );
}
