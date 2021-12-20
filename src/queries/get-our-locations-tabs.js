import { gql } from "@apollo/client";

export const GET_LOCATION_TABS = gql`
  query GET_LOCATION_TABS {
    location_tabs: pageBy(uri: "/our-locations/") {
      locationList {
        location {
          locationName
        }
        locationInfo {
          address
          content
          fax
          googleMapDirectionsLink
          googleMapLink
          hours
          location
          locationImage {
            slug
          }
          tags {
            tagLabel
          }
          phone
          yelpLink
        }
      }
    }
  }
`;
