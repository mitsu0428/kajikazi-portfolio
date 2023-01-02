import "../styles/globals.css";
import "../styles/reset.min.css";
import React from "react";
import type { AppProps } from "next/app";
import HearderComponents from "./components/HeaderComponents";
import FooterComponents from "./components/FooterComponents";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <HearderComponents />
      <Component {...pageProps} />
      <FooterComponents />
    </>
  );
};

export default App;
