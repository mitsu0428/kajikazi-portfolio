import React from "react";
import Head from "next/head";
import styled from "styled-components";
import TopPageMovie from "./components/TopPageMovie";
import Arrow from "./components/recepies/Arrow";
import CreationComponents from "./components/CreationComponents";
import { FaTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export const Home = () => {
  return (
    <Container>
      <Head>
        <title>梶原捷季のポートフォリオサイト</title>
        <meta
          name="梶原捷季のポートフォリオサイト"
          content="梶原捷季のポートフォリオサイト"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopPageMovie />
        <Container>
          <Title>Color Yout World</Title>
          <Instagram size={30} color={"#595959"} />
          <Twitter size={30} color={"#595959"} />
          <Tiktok size={30} color={"#595959"} />
          <Youtube size={30} color={"#595959"} />
        </Container>
        <Arrow />
        <Container>
          <SubTitle>What I Think is ...</SubTitle>
          <Text>
            好きな色 好きな街 好きな空 好きな店 好きな人
            人の心は、いろんな「好き」でできている
          </Text>
          <Text>
            それぞれの想いを 写真として 映像として ブランドや世界観を体現し
            人の心に届ける
          </Text>
          <Text>
            時間を超えて本当に良いものを 記録に残すこと 時間とともに変わる世界を
            記録に残すこと
          </Text>
          <Text>
            記録は記憶を鮮やかにする 写真を見て懐かしい気持ちを思い出すように
          </Text>
          <Text>さぁ まだ想像したこともない カラフルな世界へ踏み出そう</Text>
        </Container>
        <CreationComponents />
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
  padding: 0 0.5rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-top: 32px;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top: 32px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 32px;
  text-align: center;
`;

const Instagram = styled(FaInstagram)`
  margin-top: 32px;
`;

const Twitter = styled(FaTwitter)`
  margin-top: 32px;
`;

const Tiktok = styled(FaTiktok)`
  margin-top: 32px;
`;

const Youtube = styled(FaYoutube)`
  margin-top: 32px;
`;
