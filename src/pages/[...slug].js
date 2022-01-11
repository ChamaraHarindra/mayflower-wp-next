import { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import SubHeroBanner from "../components/SubHeroBanner/SubHeroBanner";
import { isEmpty } from "lodash";
import {
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  ListItem,
  UnorderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import client from "../lib/apollo";
// queries
import { GET_PAGE } from "../queries/pages/get-page";
import { GET_PAGES_URI } from "../queries/pages/get-pages";
import { GET_LOCATION_TABS } from "../queries/get-our-locations-tabs";
import { GET_RESOURCES } from "../queries/get-external-resources";
import { GET_FORMS } from "../queries/get-forms";
import { GET_FAQS } from "../queries/get-faqs";
import { GET_PROCEDURES_AND_VACCINES } from "../queries/get-procedures-and-vaccines";
import { GET_MEDICAL_TEAM } from "../queries/get-medical-team";
import { GET_CONTACT } from "../queries/get-contact";
// utils
import {
  FALLBACK,
  handleRedirectsAndReturnData,
  isCustomPageUri,
} from "../utils/slug";
import { useRouter } from "next/router";
import { sanitize } from "../utils/miscellaneous";
// components
import MainLayout from "../components/Layout/MainLayout/MainLayout";
// Views
import OurLocationTabs from "../views/our-locations";
import EducationalResources from "../views/educational-resources";
import RegistrationForms from "../views/registration-forms";
import Faqs from "../views/faqs";
import CashPrice from "../views/cash-price";
import MedicalTeam from "../views/medical-team";
import Contact from "../views/contact";

import NotFound from "../components/custom404";

export default function Pages({
  pageData,
  locationTabData,
  externalResources,
  registrationForms,
  faqContent,
  procedureData,
  medicalTeamData,
  contactData,
}) {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (isEmpty(pageData?.page?.title)) {
    console.log("hello");
    return (
      <MainLayout data={pageData}>
        <NotFound />
      </MainLayout>
    );
  } else {
    return (
      <MainLayout data={pageData}>
        {/* ======================================
        ==========================================
        Dynamic Page Content 
        ==========================================
        ====================================== */}
        <SubHeroBanner
          h1={pageData?.page?.title}
          bg={
            pageData?.page?.featuredImage?.node?.slug
              ? `/${pageData?.page?.featuredImage?.node?.slug}.jpg`
              : "/sub-banner-1.png"
          }
        />
        {isMounted && pageData?.page?.content ? (
          <div
            className="index"
            dangerouslySetInnerHTML={{
              __html: sanitize(pageData?.page?.content ?? {}),
            }}
          />
        ) : null}

        {/* ======================================
        ==========================================
        Custom Content with Advanced Custom Fields 
        ==========================================
        ====================================== */}

        {/* ======================================
        Our Locations Page
        ====================================== */}
        {isMounted &&
        locationTabData &&
        pageData?.page?.slug === locationTabData?.location_tabs?.slug ? (
          <OurLocationTabs locationTabData={locationTabData} />
        ) : null}

        {/* ======================================
        Educational Resources Page
        ====================================== */}
        {isMounted &&
        externalResources &&
        pageData?.page?.slug === externalResources?.externalResources?.slug ? (
          <EducationalResources externalResources={externalResources} />
        ) : null}

        {/* ======================================
        Registration Forms Page
        ====================================== */}
        {isMounted &&
        registrationForms &&
        pageData?.page?.slug === registrationForms?.forms?.slug ? (
          <RegistrationForms registrationForms={registrationForms} />
        ) : null}

        {/* ======================================
        FAQs Page
        ====================================== */}
        {isMounted &&
        faqContent &&
        pageData?.page?.slug === faqContent?.faqsList?.slug ? (
          <Faqs faqContent={faqContent} />
        ) : null}

        {/* ======================================
        Cash Price Page
        ====================================== */}
        {isMounted &&
        procedureData &&
        pageData?.page?.slug === procedureData?.cashPriceList?.slug ? (
          <CashPrice procedureData={procedureData} />
        ) : null}

        {/* ======================================
        Medical Team Page
        ====================================== */}
        {isMounted &&
        medicalTeamData &&
        pageData?.page?.slug === medicalTeamData?.medicalTeamList?.slug ? (
          <MedicalTeam medicalTeamData={medicalTeamData} />
        ) : null}

        {/* ======================================
        Contact Page
        ====================================== */}
        {isMounted &&
        contactData &&
        pageData?.page?.slug === contactData?.contactData?.slug ? (
          <>
            <Contact
              contactData={contactData}
              locationTabData={locationTabData}
            />
          </>
        ) : null}
      </MainLayout>
    );
  }
}

export async function getStaticProps({ params }) {
  // Get page content and header footer data
  const { data: pageData } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: params?.slug.join("/"),
    },
  });

  // get location data for our locations page
  const { data: locationTabData } = await client.query({
    query: GET_LOCATION_TABS,
  });

  // Educational resources page content
  const { data: externalResources } = await client.query({
    query: GET_RESOURCES,
  });

  //  Registration forms download page
  const { data: registrationForms } = await client.query({
    query: GET_FORMS,
  });
  //  get faqs
  const { data: faqContent } = await client.query({
    query: GET_FAQS,
  });

  //  get Cash Price Lists
  const { data: procedureData } = await client.query({
    query: GET_PROCEDURES_AND_VACCINES,
  });

  //  get Medical Team
  const { data: medicalTeamData } = await client.query({
    query: GET_MEDICAL_TEAM,
  });

  //  get Contact
  const { data: contactData } = await client.query({
    query: GET_CONTACT,
  });

  return {
    props: {
      pageData: pageData || {},
      locationTabData: locationTabData || {},
      externalResources: externalResources || {},
      registrationForms: registrationForms || {},
      faqContent: faqContent || {},
      procedureData: procedureData || {},
      medicalTeamData: medicalTeamData || {},
      contactData: contactData || {},
    },
    revalidate: 1,
  };
}

/**
 * Since the page name uses catch-all routes,
 * for example [...slug],
 * that's why params would contain slug which is an array.
 * For example, If we need to have dynamic route '/foo/bar'
 * Then we would add paths: [ params: { slug: ['foo', 'bar'] } } ]
 * Here slug will be an array is ['foo', 'bar'], then Next.js will statically generate the page at /foo/bar
 *
 * At build time next js will will make an api call get the data and
 * generate a page bar.js inside .next/foo directory, so when the page is served on browser
 * data is already present, unlike getInitialProps which gets the page at build time but makes an api
 * call after page is served on the browser.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required
 *
 * @returns {Promise<{paths: [], fallback: boolean}>}
 */
export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PAGES_URI,
  });

  const pathsData = [];

  data?.pages?.nodes &&
    data?.pages?.nodes.map((page) => {
      if (!isEmpty(page?.uri) && !isCustomPageUri(page?.uri)) {
        const slugs = page?.uri?.split("/").filter((pageSlug) => pageSlug);
        pathsData.push({ params: { slug: slugs } });
      }
    });

  return {
    paths: pathsData,
    fallback: "blocking",
  };
}
