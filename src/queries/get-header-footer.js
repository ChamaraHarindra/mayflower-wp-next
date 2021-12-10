import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

export const HeaderFooter = `footerMenu: menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
  edges {
    node {
      ...MenuFragment
    }
  }
}
headerMenu: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
  edges {
    node {
      ...MenuFragment
      childItems {
        edges {
          node {
            ...MenuFragment
          }
        }
      }
    }
  }
}
header: getHeader {
  favicon
  siteLogoUrl
  siteTagLine
  siteTitle
}
footer: getFooter {
  copyrightText
  sidebarOne
  sidebarTwo
  socialLinks {
    iconName
    iconUrl
  }
}`;

export const GET_HEADER_FOOTER = gql`
query GET_HEADER_FOOTER {
  ${HeaderFooter}
}
  ${MenuFragment}
`;
