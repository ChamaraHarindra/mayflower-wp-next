import React from "react";
import { Box, Flex, Icon, Text, Link, Button, Image } from "@chakra-ui/react";
import SubHeroBanner from "../../../components/SubHeroBanner/SubHeroBanner";

export default function OfficeProceduresSurgery() {
  return (
    <>
      <SubHeroBanner
        h1="Office Procedures & Surgery"
        bg="/office-services-banner.jpg"
      />
      <Box className="container">
        {/* side by side content */}
        <Box className="row align-items-center" py={10}>
          <Box className="col-md-5">
            <Image
              src="/services/office-services-1.png"
              alt="Office Procedure and Surgery"
              width="100%"
            />
          </Box>
          <Box className="col-md-7">
            <Text>
              At Mayflower Medical Group, our goal is to be your comprehensive
              healthcare provider. Rather than refer you to another provider for
              care, we offer a scope of in-office surgeries and procedures for
              the convenience and comfort of our patients.
              <br />
              <br />
              Some of the procedures and surgeries we offer in-office include:
              cryotherapy, echocardiography, injections, lacerations, sutures,
              lesions, cysts, warts, mole biopsy and excisions, nail removal,
              physical therapy and splinting and casting.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
