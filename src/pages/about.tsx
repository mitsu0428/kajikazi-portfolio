import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaPhotoVideo } from "react-icons/fa";

const about = () => {
  return (
    <Container>
      <Container>
        <SubTitle>Profile</SubTitle>
        <Text>Hayato Kajiwara / digital creator / photographer</Text>
        <Text>Captures what it feels like.</Text>
        <Text>
          <MapIcon />
          in Tokyo, Japan
        </Text>
      </Container>
      <Hr />
      <Container>
        <SubTitle>Job</SubTitle>
        <Text>株式会社third phase</Text>
        <Text>
          <JobIcon />
          digital creator
        </Text>
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
  margin-left: 32px;
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

const MapIcon = styled(FaMapMarkerAlt)`
  margin-right: 8px;
`;

const JobIcon = styled(FaPhotoVideo)`
  margin-right: 8px;
`;
