import { gql } from "@apollo/client";

export const GET_FAQS = gql`
  query GET_FAQS {
    faqsList: pageBy(uri: "/faqs/") {
      slug
      faqs {
        faq {
          question
          answer
        }
      }
    }
  }
`;
