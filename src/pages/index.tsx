import React from "react";
import styled from "styled-components";
import TopPageMovie from "./components/TopPageMovie";
import SeoSettings from "./components/SeoSettings";
import SnsShare from "./components/SnsShare";
import ConceptContents from "./components/ConceptContents";
import PortfolioComponents from "./components/PortfolioComponents";

export const Home = () => {
  return (
    <Container>
      <SeoSettings
        pageTitle={"梶原捷季のポートフォリオサイト"}
        pageDescription={
          "梶原捷季のポートフォリオサイト | デジタルクリエイター | SNS運用"
        }
        pagePath={"https://kajikazi.com"}
        pageImg={"https://kajikazi.com"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <main>
        <TopPageMovie />
        <SnsShare />
        <ConceptContents />
        <PortfolioComponents />
      </main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
`;
