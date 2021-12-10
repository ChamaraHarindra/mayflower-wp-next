import App from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
