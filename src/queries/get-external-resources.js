import { gql } from "@apollo/client";

export const GET_RESOURCES = gql`
  query GET_RESOURCES {
    externalResources: pageBy(uri: "/educational-resources/") {
      slug
      externalSources {
        resources {
          resourceImage {
            slug
          }
          resourceLabel
          resourceLink
        }
      }
    }
  }
`;
