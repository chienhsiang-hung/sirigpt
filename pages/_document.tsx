import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>SiriGPT</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Upgrade your Siri to SiriGPT."
          />
          <meta property="og:site_name" content="SiriGPT" />
          <meta
            property="og:description"
            content="Upgrade your Siri to SiriGPT."
          />
          <meta property="og:title" content="SiriGPT" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SiriGPT" />
          <meta
            name="twitter:description"
            content="Upgrade your Siri to SiriGPT."
          />
          <meta
            property="og:image"
            content="https://hsiang.eu.org/android-chrome-512x512.png"
          />
          <meta
            name="twitter:image"
            content="https://hsiang.eu.org/android-chrome-512x512.png"
          />

          {/* <!-- SEO --> */}
          <meta property="og:title" content="SiriGPT"/>
          <meta property="og:url" content="https://chienhsiang-hung.github.io/sirigpt/"/>
          <meta property="og:image" content="https://hsiang.eu.org/android-chrome-512x512.png"/>
          <meta name="keywords" content="SiriGPT"/>
          <meta property="og:description" name="description" content="SiriGPT"/>
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
