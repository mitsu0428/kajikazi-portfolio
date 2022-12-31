import React from "react";
import styled from "styled-components";

function TopPageMovie() {
  const [isSmartPhone, setIsSmartPhone] = React.useState(false);

  React.useEffect(() => {
    const ua = navigator.userAgent;
    if (
      ua.indexOf("iPhone") > 0 ||
      ua.indexOf("Android") > 0 ||
      ua.indexOf("iPad") > 0
    ) {
      setIsSmartPhone(true);
    }
  }, []);

  return (
    <Container>
      {isSmartPhone ? (
        <Video src="/KajiTopSp.mov" autoPlay loop muted />
      ) : (
        <Video src="/KajiTopPc.mp4" autoPlay loop muted />
      )}
    </Container>
  );
}

export default TopPageMovie;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Video = styled.video`
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;
