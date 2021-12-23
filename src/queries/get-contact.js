import { gql } from "@apollo/client";

export const GET_CONTACT = gql`
  query GET_CONTACT {
    contactData: pageBy(uri: "/contact/") {
      slug
      contact {
        contactContent
        contactHeading {
          primary
          secondary
        }
        contactImage {
          mediaItemUrl
        }
      }
    }
  }
`;
