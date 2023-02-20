import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-EB1W4TXEV1" />
      {/* <!-- AdSense --> */}
      <Script id="Adsense-id" data-ad-client="ca-pub-5348991030538024"
        async strategy="afterInteractive"
        onError={ (e) => { console.error('Script failed to load', e) }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
