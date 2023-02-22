import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

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


          <title>SQL Query Generator</title>
          <link rel="icon" href="/favicon.ico" />
          {/* <!-- SEO --> */}
          <meta property="og:title" content="SQL Query Generator"/>
          <meta property="og:url" content="https://chienhsiang-hung.github.io/givemesql/"/>
          <meta property="og:image" content="https://github.com/chienhsiang-hung/chienhsiang-hung.github.io/raw/main/android-chrome-512x512.png"/>
          <meta name="keywords" content="SQL Query Generator"/>
          <meta property="og:description" name="description" content="SQL Query Generator"/>
          <meta name="author" content="Hung, Chien-Hsiang"/>
          <meta name="copyright" content=""/>
          <meta http-equiv="expires" content="0"/>
          <meta http-equiv="pragma" content="no-cache"/>
          <meta http-equiv="cache-control" content="no-cache"/>
          {/* <!-- GSC --> */}
          <meta name="google-site-verification" content="SyEY88jadkmY5tP6AMEBi5rqu2hNV4P81pJ6uTusYFM" />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-EB1W4TXEV1" />
          <Script strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EB1W4TXEV1', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
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
