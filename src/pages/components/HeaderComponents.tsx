/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

type Props = {
  isTopPage: boolean;
};

const HearderComponents = ({ isTopPage }: Props): JSX.Element => {
  return isTopPage ? (
    <HeaderMain>
      <Link href="/">
        <Logo
          src="/kajitop.svg"
          width={60}
          height={60}
          alt="Kajiwara Hayatoのロゴ"
        />
      </Link>
      <Container>
        <Link href="/about">
          <Text>About</Text>
        </Link>
      </Container>
    </HeaderMain>
  ) : (
    <HearderSub>
      <Link href="/">
        <Logo
          src="/kajitop.svg"
          width={60}
          height={60}
          alt="Kajiwara Hayatoのロゴ"
        />
      </Link>
      <Container>
        <Link href="/">
          <Text>Home</Text>
        </Link>
      </Container>
    </HearderSub>
  );
};

export default HearderComponents;

const HeaderMain = styled.header`
  position: absolute;
  z-index: 100;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HearderSub = styled.header`
  width: 100%
  z-index: 100;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-top: 32px;
  margin-left: 32px;
`;

const Logo = styled(Image)`
  margin-top: 32px;
`;
