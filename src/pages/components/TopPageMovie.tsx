import React from "react";
import styled from "styled-components";

function TopPageMovie() {
  const [isSmartPhone, setIsSmartPhone] = React.useState(false);

  React.useEffect(() => {
    const ua = navigator.userAgent;
    if (
      ua.indexOf("iPhone") > 0 ||
      ua.indexOf("iPod") > 0 ||
      (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
    ) {
      setIsSmartPhone(true);
    } else if (ua.indexOf("iPad") > 0 || ua.indexOf("Android") > 0) {
      setIsSmartPhone(false);
    } else {
      setIsSmartPhone(false);
    }
  }, []);

  return (
    <Container>
      {isSmartPhone ? (
        <Video
          src="/KajiTopSp.mov"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
        />
      ) : (
        <Video
          src="/KajiTopPc.mp4"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
        />
      )}
    </Container>
  );
}

export default TopPageMovie;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 16px;
`;

const Video = styled.video`
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
  z-index: -1;
`;
