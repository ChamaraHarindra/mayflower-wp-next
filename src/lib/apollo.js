import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.PUBLIC_WORDPRESS_SITE_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
