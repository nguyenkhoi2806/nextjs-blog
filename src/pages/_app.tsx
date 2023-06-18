import "@/assets/vendor/bootstrap/css/bootstrap.min.css";
import "@/assets/vendor/font-awesome/css/font-awesome.css";
import "@/styles/globals.css";
import "@/styles/clean-blog.min.css";

import Layout from "@/Layout";

import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
      <Script src="/js/jqBootstrapValidation.js" strategy="afterInteractive" />
      <Script src="/js/clean-blog.js" strategy="afterInteractive" />
      <Script src="/js/contact_me.js" strategy="afterInteractive" />
    </>
  );
}
