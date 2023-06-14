import "@/assets/vendor/bootstrap/css/bootstrap.css";
import "@/assets/vendor/font-awesome/css/font-awesome.css";
import "@/styles/globals.css";

import Layout from "@/Layout";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
