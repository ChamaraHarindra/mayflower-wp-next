import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://mfwpb.elifeamerica.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
