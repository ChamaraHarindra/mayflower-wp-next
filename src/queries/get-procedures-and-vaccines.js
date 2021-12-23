import { gql } from "@apollo/client";

export const GET_PROCEDURES_AND_VACCINES = gql`
  query GET_PROCEDURES_AND_VACCINES {
    cashPriceList: pageBy(uri: "/cash-prices/") {
      slug
      cashPrices {
        procedureTabLabels {
          tabLabel
        }
        physicalsFormsAndProceduresTableHeadings {
          tableHeading
        }
        vaccinesMedicationsAndInjectablesTableHeadings {
          tableHeading
        }
        physicalsFormsAndProcedures {
          costOfSupplies
          officeVisit
          procedure
          total
        }
        vaccinesMedicationsAndInjectables {
          costOfSupplies
          officeVisit
          total
          vaccines
        }
      }
    }
  }
`;
