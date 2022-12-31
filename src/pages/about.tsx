import React from "react";
import styled from "styled-components";

const about = () => {
  return (
    <Container>
      <Container>
        <SubTitle>Profile</SubTitle>
        <Text>Hayato Kajiwara</Text>
        <Text>1999.05.22</Text>
        <Text>Tokyo</Text>
      </Container>
      <Hr />
      <Container>
        <SubTitle>Job</SubTitle>
        <Text>株式会社third phase</Text>
        <Text>デジタルクリエイター</Text>
      </Container>
      <Hr />
      <Container>
        <SubTitle>Education</SubTitle>
        <Text>Aoyama Gakuin University - SCCS -</Text>
      </Container>
      <Hr />
      <Container>
        <SubTitle>Skills</SubTitle>
        <Text>Adobe Certified Professional</Text>
        <Text>Illustrator | Photoshop</Text>
      </Container>
      <Hr />
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
  font-size: 36px;
  font-weight: 700;
  margin-top: 32px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 32px;
`;

const Hr = styled.hr`
  border-width: 0 0 1px;
  border-image: linear-gradient(
      90deg,
      hsla(0, 0%, 35%, 0),
      hsla(0, 0%, 35%, 0.5) 50%,
      hsla(0, 0%, 35%, 0) 100%
    )
    0 0 100%;
  border-style: solid;
`;
