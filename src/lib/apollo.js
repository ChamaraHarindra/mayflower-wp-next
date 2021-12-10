import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://35.87.1.230/graphql",
  cache: new InMemoryCache(),
});

export default client;
