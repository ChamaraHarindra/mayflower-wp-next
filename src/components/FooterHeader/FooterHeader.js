import { Text } from "@chakra-ui/react";

export default function FooterHeader(props) {
  return (
    <>
      <Text color="brandBlue.700" fontSize="18px" fontWeight="bold" mb="5">
        {props.text}
      </Text>
    </>
  );
}
