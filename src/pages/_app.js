import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/";
import MainLayout from "../components/Layout/MainLayout/MainLayout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
