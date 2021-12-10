import { useEffect, useState } from "react";
// import {
//   Stack,
//   HStack,
//   VStack,
//   Box,
//   Flex,
//   Icon,
//   Text,
//   Link,
//   Button,
//   Image,
//   StackDivider,
//   Tag,
//   TagLabel,
//   TagLeftIcon,
//   TagRightIcon,
//   TagCloseButton,
//   Avatar,
// } from "@chakra-ui/react";
import Heading from "../components/Heading/Heading";
import SubHeroBanner from "../components/SubHeroBanner/SubHeroBanner";
import { isEmpty } from "lodash";

import client from "../lib/apollo";
import { GET_PAGE } from "../queries/pages/get-page";
import { GET_PAGES_URI } from "../queries/pages/get-pages";
import { useRouter } from "next/router";
import { sanitize } from "../utils/miscellaneous";
import {
  FALLBACK,
  handleRedirectsAndReturnData,
  isCustomPageUri,
} from "../utils/slug";
import MainLayout from "../components/Layout/MainLayout/MainLayout";

export default function Pages({ data }) {
  //   console.log("data from slug", data);

  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <MainLayout data={data}>
      <SubHeroBanner h1={data.page.title} bg="/sub-banner-1.png" />
      {isMounted && data?.page?.content ? (
        <div
          className="index"
          dangerouslySetInnerHTML={{
            __html: sanitize(data?.page?.content ?? {}),
          }}
        />
      ) : null}
    </MainLayout>
  );
}

export async function getStaticProps({ params }) {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: params?.slug.join("/"),
    },
  });

  const defaultProps = {
    props: {
      data: data || {},
    },
    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };

  return handleRedirectsAndReturnData(defaultProps, data, errors, "page");
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
    fallback: FALLBACK,
  };
}
