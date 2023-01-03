import React from "react";
import styled from "styled-components";

const ConceptContents = () => {
  return (
    <Container>
      <SubTitle>What I Think is ...</SubTitle>

      <Text>
        好きな<Color>色</Color> 好きな<Color>街</Color> 好きな
        <Color>空</Color>
        好きな<Color>店</Color> 好きな<Color>人</Color>
      </Text>
      <Text>人の心は、いろんな「好き」でできている</Text>
      <Text>
        それぞれの想いを 写真として 映像として ブランドや世界観を体現し
      </Text>
      <Text>人の心に届ける</Text>
      <Text>時間を超えて本当に良いものを 記録に残すこと</Text>
      <Text>時間とともに変わる世界を 記録に残すこと</Text>
      <Text>記録は記憶を鮮やかにする</Text>
      <Text>写真を見て懐かしい気持ちを思い出すように</Text>
      <Text>
        さぁ まだ想像したこともない <Color>カラフルな世界へ</Color>踏み出そう
      </Text>
    </Container>
  );
};

export default ConceptContents;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 画面の高さを占める */
  width: 100vw; /* 画面の幅を占める */
`;

const SubTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-top: 32px;
  text-align: center;
  color: transparent;
  background: linear-gradient(45deg, #dd2c00 0% 40%, #01579b 60% 100%);
  background-attachment: fixed;
  -webkit-background-clip: text;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 32px;
  text-align: center;
`;

const Color = styled.span`
  font-weight: 700;
  color: transparent;
  background: linear-gradient(45deg, #dd2c00 0% 40%, #01579b 60% 100%);
  background-attachment: fixed;
  -webkit-background-clip: text;
`;
