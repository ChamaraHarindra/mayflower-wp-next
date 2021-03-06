import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-header-footer";

export const GET_PAGE = gql`
        query GET_PAGE($uri: String) {
                ${HeaderFooter}
                page: pageBy(uri: $uri) {
                        id
                        title
                        content
                        slug
                        uri
                        featuredImage {
      node {
        slug
      }
    }
                }
	}
	${MenuFragment}
`;
