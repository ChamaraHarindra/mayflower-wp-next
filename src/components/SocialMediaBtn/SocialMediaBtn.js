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
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

export default function SocialMediaBtn(props) {
  return (
    <Link
      bg="brandBlue.50"
      href={props.href}
      target="_blank"
      borderRadius="full"
      borderColor="brandBlue.600"
      borderWidth="2px"
      borderStyle="solid"
      w="50px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="50px"
      color="brandBlue.600"
      _hover={props._hover}
    >
      <Icon w="6" h="6" as={props.IconAs} />
    </Link>
  );
}
