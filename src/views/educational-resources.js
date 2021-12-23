import { Box, Flex, Icon, Text, Link } from "@chakra-ui/react";
import CardImg from "../components/CardImg/CardImg";
import { RiExternalLinkLine } from "react-icons/ri";

export default function EducationalResources({ externalResources }) {
  const resources =
    externalResources?.externalResources?.externalSources?.resources;

  return (
    <Box className="container" my={10}>
      <Box className="row">
        {resources?.map((item) => (
          <Box className="col-md-4" key={item.resourceLink} mb={7}>
            <CardImg
              src={`/educational-resources/${item?.resourceImage?.slug}.jpg`}
            >
              <Text color="white" fontSize="xl" fontWeight="bold">
                {item.resourceLabel}
              </Text>

              <Link
                href={`https://${item.resourceLink}`}
                target="_blank"
                color="whiteAlpha.700"
                _hover={{ color: "white" }}
              >
                <Flex align="center">
                  <Text>{item.resourceLink}</Text>
                  <Icon ml="10px" as={RiExternalLinkLine} />
                </Flex>
              </Link>
            </CardImg>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
