import React from "react";
import styled from "styled-components";
import Image from "next/image";

const PortfolioComponents = () => {
  return (
    <Container>
      <SubContainer>
        <ImageTag layout="fill" src="/static/1.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/18.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/2.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/3.png" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/4.png" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/5.png" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/6.png" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/7.png" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/8.png" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/9.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/10.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/11.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/12.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/13.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/14.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/15.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/16.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/17.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/19.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/20.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/21.jpg" alt="kaji-logo" />
      </SubContainer>
      <SubContainer>
        <ImageTag layout="fill" src="/static/22.jpg" alt="kaji-logo" />
      </SubContainer>
    </Container>
  );
};

export default PortfolioComponents;

const Container = styled.div`
  width: 100%;
  padding: 16px;
  column-count: 3;
  @media (max-width: 1024px) {
    column-count: 2;
  }
  @media (max-width: 768px) {
    column-count: 1;
  }
  margin-top: 32px;
`;

const SubContainer = styled.div`
  break-inside: avoid;
  margin-top: 32px;
  margin-left: 16px;
  margin-right: 16px;
`;

const ImageTag = styled(Image)`
  position: relative !important;
  width: 100% !important;
  height: unset !important;
  border-radius: 8px;
`;
