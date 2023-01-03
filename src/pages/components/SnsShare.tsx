import React from "react";
import styled from "styled-components";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const SnsShare = () => {
  return (
    <Container>
      <Title>Color Your World</Title>
      <SnsShareButton>
        <UserName>Kajikazi / digital creator / photographer</UserName>
        <Instagram size={30} color={"#01579b"} />
        <UserMention>@Kajikazi__</UserMention>
      </SnsShareButton>
      <SnsShareButton>
        <UserName>Kajikazi</UserName>
        <Youtube size={30} color={"#01579b"} />
        <UserMention>@Kajikazi400</UserMention>
      </SnsShareButton>
      <SnsShareButton>
        <UserName>バリかじ</UserName>
        <Tiktok size={30} color={"#01579b"} />
        <UserMention>@balikaji</UserMention>
      </SnsShareButton>
    </Container>
  );
};

export default SnsShare;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 1000;
  margin-top: 32px;
  text-align: center;
  line-height: 0.95em;
  color: transparent;
  background: linear-gradient(45deg, #dd2c00 0% 40%, #01579b 60% 100%);
  background-attachment: fixed;
  -webkit-background-clip: text;
`;

const UserName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top: 32px;
  text-align: center;
  line-height: 0.95em;
  color: transparent;
  background: linear-gradient(45deg, #dd2c00 0% 40%, #01579b 60% 100%);
  background-attachment: fixed;
  -webkit-background-clip: text;
`;

const UserMention = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top: 32px;
  text-align: center;
  line-height: 0.95em;
  color: transparent;
  background: linear-gradient(45deg, #dd2c00 0% 40%, #01579b 60% 100%);
  background-attachment: fixed;
  -webkit-background-clip: text;
`;

const SnsShareButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin-top: 32px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  @media (min-width: 768px) {
    max-width: 600px;
  }
  @media (min-width: 1024px) {
    max-width: 800px;
  }
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Instagram = styled(FaInstagram)`
  margin-top: 32px;
`;

const Tiktok = styled(FaTiktok)`
  margin-top: 32px;
`;

const Youtube = styled(FaYoutube)`
  margin-top: 32px;
`;
