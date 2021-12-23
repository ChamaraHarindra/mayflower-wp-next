import { gql } from "@apollo/client";

export const GET_FORMS = gql`
  query GET_FORMS {
    forms: pageBy(uri: "/registration-forms/") {
      slug
      Forms {
        formList {
          formLanguage
          formLanguageImg {
            slug
          }
          formName
          formType
          uploadForm {
            mediaItemUrl
          }
        }
      }
    }
  }
`;
