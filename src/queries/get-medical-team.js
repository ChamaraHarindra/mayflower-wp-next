import { gql } from "@apollo/client";

export const GET_MEDICAL_TEAM = gql`
  query GET_MEDICAL_TEAM {
    medicalTeamList: pageBy(uri: "/medical-team/") {
      slug
      medicalTeam {
        tabLabels {
          tabLabelName
        }
        doctors {
          bio
          department
          fieldGroupName
          id
          location
          name
          profilePicture {
            slug
          }
        }
      }
    }
  }
`;
