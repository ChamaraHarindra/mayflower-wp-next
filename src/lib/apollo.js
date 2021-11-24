import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "http://13.229.238.78/graphql",
	cache: new InMemoryCache(),
});
