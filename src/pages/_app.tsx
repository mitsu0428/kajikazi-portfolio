import "../styles/globals.css";
import "../styles/reset.min.css";
import React from "react";
import type { AppProps } from "next/app";
import HearderComponents from "./components/HeaderComponents";
import FooterComponents from "./components/FooterComponents";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  let isTopPage = false;
  if (Component.name === "Home") {
    isTopPage = true;
  } else {
    isTopPage = false;
  }
  return (
    <>
      <HearderComponents isTopPage={isTopPage} />
      <Component {...pageProps} />
      <FooterComponents />
    </>
  );
};

export default App;
