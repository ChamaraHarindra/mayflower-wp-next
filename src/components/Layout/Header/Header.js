import { RiPhoneFill } from "react-icons/ri";
import { gql } from "@apollo/client";
import { client } from "../../../lib/apollo";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Header({ headerTopMenu }) {
  const topMenu = [
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Our Locations",
      url: "/our-locations",
    },
    {
      label: "Careers",
      url: "/careers",
    },
    {
      label: "Contact",
      url: "/contact",
    },
  ];

  const servicesMenu = [
    {
      label: "What We Offer",
      url: "/services/what-we-offer/",
    },
    {
      label: "Adolescent Care",
      url: "/services/adolescent-care/",
    },
    {
      label: "Cardiovascular Care",
      url: "/services/cardiovascular-care/",
    },
    {
      label: "Chronic Disease Management",
      url: "/services/chronic-disease-management/",
    },
    {
      label: "Flu Prevention",
      url: "/services/flu-prevention/",
    },
    {
      label: "General Primary Care",
      url: "/services/general-primary-care/",
    },
    {
      label: "Geriatric Care",
      url: "/services/geriatric-care/",
    },
    {
      label: "Men's Health",
      url: "/services/men-health/",
    },
    {
      label: "Office Procedure & Surgery",
      url: "/services/office-procedure-&-surgery/",
    },
    {
      label: "Pediatric Care",
      url: "/services/pediatric-care/",
    },
    {
      label: "Preventive Care",
      url: "/services/preventive-care/",
    },
    {
      label: "Women's Health",
      url: "/services/women-health/",
    },
  ];

  const patientInformationMenu = [
    {
      label: "Educational Resources",
      url: "/patient-information/educational-resources/",
    },
    {
      label: "Registration Forms",
      url: "/patient-information/registration-forms/",
    },
    {
      label: "FAQs",
      url: "/patient-information/faqs/",
    },
    {
      label: "Accepted Insurance",
      url: "/patient-information/accepted-insurance/",
    },
    {
      label: "Cash Prices",
      url: "/patient-information/cash-price/",
    },
  ];
  return (
    <>
      <Box
        py="2"
        className="container"
        borderBottomColor="gray.200"
        borderBottomWidth="1px"
        borderBottomStyle="solid"
      >
        <Box className="row justify-content-md-between align-items-center">
          <Box className="col-md-auto">
            <Flex align="center">
              <Icon color="brandBlue.700" mr="3" as={RiPhoneFill} />
              <Text color="brandBlue.700" fontWeight="bold" fontSize="sm">
                <Link href="tel:6263312209" mx="2">
                  626-331-2209
                </Link>
              </Text>
            </Flex>
          </Box>
          <Flex className="col-md-auto" align="center">
            {topMenu.map((item, i) => (
              <Text fontSize="sm" key={i} fontWeight="500">
                <Link href={item.url} mx="2">
                  {item.label}
                </Link>
              </Text>
            ))}
            <Button ml="2" size="sm" variant="roundedGreen">
              <Text fontWeight="bold" fontSize="sm">
                Log In
              </Text>
            </Button>
          </Flex>
        </Box>
      </Box>
      <Box className="container" py="2">
        <Box className="row justify-content-md-between align-items-center">
          <Box className="col-md-auto">
            <Link href="/">
              <Image src="/mayflower-logo.png" alt="Mayflower medical Group" />
            </Link>
          </Box>
          <Box className="col-md-auto">
            <HStack spacing="15px">
              <Menu id="services" isLazy>
                <MenuButton
                  variant="link"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Services
                </MenuButton>
                <MenuList>
                  {servicesMenu.map((item, i) => (
                    <MenuItem key={i}>
                      <Link href={item.url}>
                        <Text fontSize="sm" color="brandBlue.700">
                          {item.label}
                        </Text>
                      </Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Menu id="patientInformation" isLazy>
                <MenuButton
                  as={Button}
                  variant="link"
                  rightIcon={<ChevronDownIcon />}
                >
                  Patient Information
                </MenuButton>
                <MenuList>
                  {patientInformationMenu.map((item, i) => (
                    <MenuItem key={i}>
                      <Link href={item.url}>
                        <Text fontSize="sm">{item.label}</Text>
                      </Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Link href="/medical-team">
                <Button variant="link">Medical Team</Button>
              </Link>
              <Link href="#">
                <Button variant="roundedBlue">Make an Appointment</Button>
              </Link>
              <Link href="#">
                <Button variant="roundedBlue">Pay Your Bills</Button>
              </Link>
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

// export async function getStaticProps() {
//   const result = await client.query({
//     query: gql`
//       query getTopMenu {
//         menus(where: { id: 3 }) {
//           nodes {
//             databaseId
//             name
//             menuItems {
//               edges {
//                 node {
//                   label
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       headerTopMenu: result.data.menus,
//       // title: result.data.posts.nodes.title,
//       // content: result.data.posts.nodes.content,
//       // date: result.data.posts.nodes.date,
//       // uri: result.data.posts.nodes.uri,
//     },
//   };
// }
