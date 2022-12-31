import React from "react";
import styled from "styled-components";

const about = () => {
  return (
    <Container>
      <Container>
        <SubTitle>梶原 捷季</SubTitle>
      </Container>
      <Container>
        <Text>1999年生まれ。東京都出身。現在は株式会社third</Text>
      </Container>
      <Container>
        <Text>phaseでデジタルクリエイターとして働いています。</Text>
      </Container>
      <Container>
        <Text>
          2023年卒業予定の青山学院大学SCCSにて、デジタルクリエイターとしての学びを積んでいます。
        </Text>
      </Container>
      <Container>
        <Text>2020年にAdobe Certified Professional</Text>
      </Container>
      <Container>
        <Text>IllustratorとPhotoshopを取得しました。</Text>
      </Container>
    </Container>
  );
};

export default about;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top: 32px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 32px;
`;
