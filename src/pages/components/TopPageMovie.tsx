import React from "react";

import styled from "styled-components";

function TopPageMovie() {
  return (
    <Container>
      <Video src="/kajitop.mp4" autoPlay loop muted></Video>
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
