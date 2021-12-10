import { RiPhoneFill } from "react-icons/ri";
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
import Head from "next/head";

export default function Header({ headerMenu, header, pageTitle }) {
  return (
    <>
      <Head>
        <title>
          {header.siteTitle} - {pageTitle}
        </title>
      </Head>
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
            {headerMenu?.edges?.length
              ? headerMenu?.edges?.slice(0, 4).map((item) => (
                  <Text fontSize="sm" key={item?.node?.id} fontWeight="500">
                    <Link href={item?.node?.path} mx="2">
                      {item?.node?.label}
                    </Link>
                  </Text>
                ))
              : null}
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
              <Image src={header.siteLogoUrl} alt={header.siteTitle} />
            </Link>
          </Box>
          {headerMenu?.edges?.length ? (
            <Box className="col-md-auto">
              <HStack spacing="15px">
                {headerMenu?.edges?.slice(4, 11).map((menu) => (
                  <Menu key={menu?.node?.id} id={menu?.node?.id} isLazy>
                    <MenuButton
                      variant={
                        menu?.node?.id === "cG9zdDo4OA==" ||
                        menu?.node?.id === "cG9zdDo4Nw=="
                          ? "roundedBlue"
                          : "link"
                      }
                      fontWeight="600"
                      as={menu?.node?.childItems?.edges?.length ? Button : Link}
                      rightIcon={
                        menu?.node?.childItems?.edges?.length ? (
                          <ChevronDownIcon />
                        ) : (
                          ""
                        )
                      }
                      href={
                        menu?.node?.childItems?.edges?.length
                          ? null
                          : menu?.node?.path
                      }
                    >
                      {menu?.node?.label}
                    </MenuButton>

                    {menu?.node?.childItems?.edges?.length ? (
                      <MenuList>
                        {menu?.node?.childItems?.edges?.map((childMenuItem) => (
                          <MenuItem key={childMenuItem?.node?.id}>
                            <Link href={childMenuItem?.node?.path}>
                              <Text fontSize="sm" color="brandBlue.700">
                                {childMenuItem?.node?.label}
                              </Text>
                            </Link>
                          </MenuItem>
                        ))}
                      </MenuList>
                    ) : null}
                  </Menu>
                ))}
              </HStack>
            </Box>
          ) : null}
        </Box>
      </Box>
    </>
  );
}
