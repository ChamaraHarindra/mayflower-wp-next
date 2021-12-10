import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
    components: {
      Tabs: {
        baseStyle: {
          tab: {
            color: "gray.600",
            _selected: {
              fontWeight: "bold",
              boxShadow: "none",
            },
          },
        },
      },
      Accordion: {
        baseStyle: {
          button: {
            paddingTop: 5,
            paddingBottom: 5,
            color: "blue.700",
            fontWeight: "bold",
          },
          panel: {
            paddingTop: 3,
            paddingBottom: 8,
          },
        },
      },
      Link: {
        // styles for the `a`
        baseStyle: {
          color: "blue.700",
          _hover: {
            textDecoration: "none",
            color: "blue.400",
          },
        },
        variants: {
          roundedGreen: {
            rounded: "full",
            bg: "brandGreen.700",
            color: "white",
            _hover: {
              bg: "brandGreen.500",
              color: "white",
            },
          },
          brandGreen: {
            bg: "brandGreen.700",
            color: "white",
            _hover: {
              bg: "brandGreen.500",
              color: "white",
            },
          },
          brandGreenGhost: {
            bg: "brandGreen.50",
            color: "brandGreen.700",
            _hover: {
              bg: "brandGreen.100",
              color: "brandGreen.800",
            },
          },
          ghostBlue: {
            rounded: "full",
            fontWeight: "bold",
            bg: "brandBlue.50",
            color: "brandBlue.700",

            _hover: {
              bg: "brandBlue.200",
              color: "brandBlue.700",
            },
          },
          roundedBlue: {
            rounded: "full",
            bg: "brandBlue.700",
            color: "white",
            paddingLeft: 4,
            paddingRight: 4,
            minHeight: "40px",
            display: "flex",
            alignItems: "center",
            _hover: {
              bg: "brandBlue.500",
              color: "white",
            },
          },
        },
      },
      Button: {
        variants: {
          link: {
            color: "brandBlue.700",
            _hover: {
              textDecoration: "none",
              color: "blue.400",
            },
          },
          roundedGreen: {
            rounded: "full",
            bg: "brandGreen.700",
            color: "white",
            _hover: {
              bg: "brandGreen.500",
              color: "white",
            },
          },
          brandGreen: {
            bg: "brandGreen.700",
            color: "white",
            _hover: {
              bg: "brandGreen.500",
              color: "white",
            },
          },
          brandGreenGhost: {
            bg: "brandGreen.50",
            color: "brandGreen.700",
            _hover: {
              bg: "brandGreen.100",
              color: "brandGreen.800",
            },
          },
          ghostBlue: {
            rounded: "full",
            fontWeight: "bold",
            bg: "brandBlue.50",
            color: "brandBlue.700",
            _hover: {
              bg: "brandBlue.200",
              color: "brandBlue.700",
            },
          },
          roundedBlue: {
            rounded: "full",
            bg: "brandBlue.700",
            color: "white",
            _hover: {
              bg: "brandBlue.500",
              color: "white",
            },
          },
        },
      },
    },
    colors: {
      brandGreen: {
        50: "#e0feee",
        100: "#baf4d4",
        200: "#91ecba",
        300: "#68e4a0",
        400: "#3fdc86",
        500: "#27c36c",
        600: "#1b9754",
        700: "#0f6c3b",
        800: "#044222",
        900: "#001807",
      },
      brandBlue: {
        50: "#dff5ff",
        100: "#b4defd",
        200: "#87c8f7",
        300: "#5ab2f3",
        400: "#319cee",
        500: "#1d82d5",
        600: "#1265a7",
        700: "#084878",
        800: "#002b4a",
        900: "#000f1d",
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brandBlue",
    components: ["Button"],
  })
);

export default theme;
