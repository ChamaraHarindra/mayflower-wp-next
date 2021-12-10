import {
  Stack,
  HStack,
  VStack,
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  Image,
  StackDivider,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  Avatar,
} from "@chakra-ui/react";
import { RiMapPin2Fill } from "react-icons/ri";

export default function AddressBlock(props) {
  return (
    <Flex mr={props.mr} mb={props.mb}>
      <Icon color="brandGreen.700" mt={1} mr="3" as={RiMapPin2Fill} />
      <Box maxW={props.maxW}>
        <Text fontWeight="bold">{props.location}</Text>
        <Text wordBreak="break-all" whiteSpace="pre-wrap" mb={2}>
          {props.address}
        </Text>
        <Flex>
          <Text>Phone: </Text>
          <Text color="brandGreen.600">{props.phone}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
