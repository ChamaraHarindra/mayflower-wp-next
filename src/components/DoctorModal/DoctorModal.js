import { useDisclosure } from "@chakra-ui/react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function DoctorModal({
  DrName,
  DrImage,
  DrDetails,
  DrDepartment,
  DrExperience,
  DrPatients,
  DrRating,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {DrName}
          <Text fontSize="md">{DrDepartment}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            <Box>
              <Image src={DrImage} alt={DrName} />
              <Flex justifyContent="space-between">
                <Box>
                  <Text fontSize="sm">Patients</Text>
                  <Text fontSize="xl">{DrPatients}</Text>
                </Box>
                <Box>
                  <Text fontSize="sm">Experience</Text>
                  <Text fontSize="xl">{DrExperience}</Text>
                </Box>
                <Box>
                  <Text fontSize="sm">Rating</Text>
                  <Text fontSize="xl">{DrRating}</Text>
                </Box>
              </Flex>
              <Button>Book Now</Button>
            </Box>
            <Text>{DrDetails}</Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
