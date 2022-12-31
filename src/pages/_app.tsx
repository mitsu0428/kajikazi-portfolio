import "../styles/globals.css";
import "../styles/reset.min.css";
import React from "react";
import type { AppProps } from "next/app";
import CommonHeader from "./components/CommonHeader";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <CommonHeader />
    <Component {...pageProps} />
  </>
);

export default App;
