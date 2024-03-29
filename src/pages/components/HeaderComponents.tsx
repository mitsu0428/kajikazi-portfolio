import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import PropsLink from "./recepies/CustomLink";

const HearderComponents = (): JSX.Element => {
  const [isTopPage, setIsTopPage] = React.useState(false);

  //URLを取得する
  const router = useRouter();
  const path = router.pathname;

  React.useEffect(() => {
    if (path === "/") {
      setIsTopPage(true);
    } else {
      setIsTopPage(false);
    }
  }, [path]);

  return isTopPage ? (
    <HeaderMain>
      <Link href="/">
        <Logo
          src="/kajitop.svg"
          width={50}
          height={50}
          alt="Kajiwara Hayatoのロゴ"
        />
      </Link>
      <PropsLink toPage="/about" toPageName="About" />
    </HeaderMain>
  ) : (
    <HearderSub>
      <Link href="/">
        <Logo
          src="/kajitop.svg"
          width={50}
          height={50}
          alt="Kajiwara Hayatoのロゴ"
        />
      </Link>
      <PropsLink toPage="/" toPageName="Home" />
    </HearderSub>
  );
};

export default HearderComponents;

const HeaderMain = styled.header`
  position: absolute;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

const HearderSub = styled.header`
  width: 100%
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

const Logo = styled(Image)`
  border-radius: 8px;
`;
