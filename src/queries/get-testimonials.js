import { gql } from "@apollo/client";

export const GET_TESTIMONIALS = gql`
  query GET_TESTIMONIALS {
    testimonials: page(id: "cG9zdDoxMQ==") {
      slug
      testimonialCarousel {
        testimonials {
          clientName
          clientLocation
          comment
          clientImage {
            uri
          }
        }
      }
    }
  }
`;
