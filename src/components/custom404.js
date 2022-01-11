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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box className="container" minH={"500px"}>
      <Box className="row align-items-center" my={12}>
        <Box className="col-md-6">
          <Text fontSize={"xxx-large"} fontWeight={"bold"}>
            Oops!
          </Text>
          <Text fontSize={"xx-large"} fontWeight={"500"} color={"#444"}>
            We can&apos;t seem to find the page you&apos;re looking for!
          </Text>
          <Text fontSize={"lg"} mt={3} fontWeight={"500"} color={"#666"}>
            Error Code: 404
          </Text>
          <Button mt={5} variant={"roundedGreen"} size={"lg"}>
            <Link href="/" color={"white"} _hover={{ color: "white" }}>
              Take Me to Home Page
            </Link>
          </Button>
        </Box>
        <Box className="col-md-6" display={"flex"} justifyContent={"center"}>
          <Image src="/404.jpg" height={"500px"} alt="Page Not Found!" />
        </Box>
      </Box>
    </Box>
  );
}
