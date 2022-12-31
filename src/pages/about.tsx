import React from "react";
import styled from "styled-components";

function about() {
  return (
    <BasicContainer>
      <BasicSubContainer>
        <Paragraph>梶原　捷季</Paragraph>
      </BasicSubContainer>
      <BasicContainer>
        <Paragraph>1999年生まれ。東京都出身。現在は株式会社third</Paragraph>
      </BasicContainer>
      <BasicContainer>
        <Paragraph>phaseでデジタルクリエイターとして働いています。</Paragraph>
      </BasicContainer>
      <BasicContainer>
        <Paragraph>
          2023年卒業予定の青山学院大学SCCSにて、デジタルクリエイターとしての学びを積んでいます。
        </Paragraph>
      </BasicContainer>
      <BasicContainer>
        <Paragraph>2020年にAdobe Certified Professional</Paragraph>
      </BasicContainer>
      <BasicContainer>
        <Paragraph>IllustratorとPhotoshopを取得しました。</Paragraph>
      </BasicContainer>
    </BasicContainer>
  );
}

export default about;

const BasicContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BasicSubContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  font-size: 1rem;
`;
