import React from "react";
import styled from "styled-components";

const about = () => {
  return (
    <Container>
      <SubContainer>
        <Paragraph>梶原 捷季</Paragraph>
      </SubContainer>
      <Container>
        <Paragraph>1999年生まれ。東京都出身。現在は株式会社third</Paragraph>
      </Container>
      <Container>
        <Paragraph>phaseでデジタルクリエイターとして働いています。</Paragraph>
      </Container>
      <Container>
        <Paragraph>
          2023年卒業予定の青山学院大学SCCSにて、デジタルクリエイターとしての学びを積んでいます。
        </Paragraph>
      </Container>
      <Container>
        <Paragraph>2020年にAdobe Certified Professional</Paragraph>
      </Container>
      <Container>
        <Paragraph>IllustratorとPhotoshopを取得しました。</Paragraph>
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

const SubContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  font-size: 1rem;
`;
