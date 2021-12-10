import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          {/* <script
            src="http://35.87.1.230/wp-includes/js/jquery/jquery.min.js?ver=3.6.0"
            defer
          ></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
