import React from "react";
import styled from "styled-components";
import Image from "next/image";

const creation = () => {
  return (
    <Container>
      <SubContainer>
        <ImageTag layout="fill" src="/static/10.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/18.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/20.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/18.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/10.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/16.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/20.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/22.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/10.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/16.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/20.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/18.jpg" alt="kaji-logo" />
      </SubContainer>
    </Container>
  );
};

export default creation;

const ImageTag = styled(Image)`
  position: relative !important;
  width: 100% !important;
  height: unset !important;
`;

const Container = styled.div`
  width: 100%;
  column-count: 3;
  @media (max-width: 1024px) {
    column-count: 2;
  }
  @media (max-width: 768px) {
    column-count: 1;
  }
`;

const SubContainer = styled.div`
  break-inside: avoid;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
`;
