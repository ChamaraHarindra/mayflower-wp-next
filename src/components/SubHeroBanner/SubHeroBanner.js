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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import ChevronRightIcon from "@chakra-ui/icons";
import Breadcrumbs from "nextjs-breadcrumbs";

export default function SubHeroBanner({ h1, children, bg }) {
  return (
    <Box
      h="265px"
      backgroundImage={bg}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      w="100%"
    >
      <Flex align="center" w="100%" h="100%">
        <Box className="container">
          <Box className="row">
            <Box className="col-md-12">
              <Text as="h1" fontSize="50px" fontWeight="900" color="white">
                {h1}
              </Text>
              <Breadcrumbs containerClassName="crumbs" rootLabel="Home" />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
