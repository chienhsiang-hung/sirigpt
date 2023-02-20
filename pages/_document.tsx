import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your SQL Query in seconds."
          />
          <meta property="og:site_name" content="GiveMeSQL" />
          <meta
            property="og:description"
            content="Generate your SQL Query in seconds."
          />
          <meta property="og:title" content="SQL Query Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SQL Query Generator" />
          <meta
            name="twitter:description"
            content="Generate your SQL Query in seconds."
          />
          <meta
            property="og:image"
            content="https://github.com/chienhsiang-hung/chienhsiang-hung.github.io/raw/main/android-chrome-512x512.png"
          />
          <meta
            name="twitter:image"
            content="https://github.com/chienhsiang-hung/chienhsiang-hung.github.io/raw/main/android-chrome-512x512.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
