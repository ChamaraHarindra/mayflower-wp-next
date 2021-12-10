// import Home from "../views/home/home";
import client from "../lib/apollo";
import { GET_PAGE } from "../queries/pages/get-page";
import MainLayout from "../components/Layout/MainLayout/MainLayout";
import { sanitize } from "../utils/miscellaneous";
import { handleRedirectsAndReturnData } from "../utils/slug";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function HomePage({ data }) {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <MainLayout data={data}>
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

export async function getStaticProps(context) {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: "/home/",
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
