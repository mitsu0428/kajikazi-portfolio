import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import MagicGrid from "magic-grid";

function creation() {
  const [grid, setGrid] = useState<MagicGrid | null>(null);
  useEffect(() => {
    const grid = new MagicGrid({
      container: "#grid",
      static: true,
      animate: true,
      gutter: 40,
      useMin: true,
    });
    grid.listen();
    setGrid(grid);
  }, []);
  return (
    <MainContainerArea id="grid">
      <SubContainerArea>
        <ImageArea layout="fill" src="/static/10.jpg" alt="kaji-logo" />
      </SubContainerArea>
      <SubContainerArea>
        <ImageArea layout="fill" src="/static/16.jpg" alt="kaji-logo" />
      </SubContainerArea>
      <SubContainerArea>
        <ImageArea layout="fill" src="/static/20.jpg" alt="kaji-logo" />
      </SubContainerArea>
      <SubContainerArea>
        <ImageArea layout="fill" src="/static/22.jpg" alt="kaji-logo" />
      </SubContainerArea>
      <SubContainerArea>
        <ImageArea layout="fill" src="/static/10.jpg" alt="kaji-logo" />
      </SubContainerArea>
      <SubContainerArea>
        <ImageArea layout="fill" src="/static/16.jpg" alt="kaji-logo" />
      </SubContainerArea>
      <SubContainerArea>
        <ImageArea layout="fill" src="/static/20.jpg" alt="kaji-logo" />
      </SubContainerArea>
      <SubContainerArea>
        <ImageArea layout="fill" src="/static/22.jpg" alt="kaji-logo" />
      </SubContainerArea>
      <SubContainerArea>
        <ImageArea layout="fill" src="/static/10.jpg" alt="kaji-logo" />
      </SubContainerArea>
      <SubContainerArea>
        <ImageArea layout="fill" src="/static/16.jpg" alt="kaji-logo" />
      </SubContainerArea>
      <SubContainerArea>
        <ImageArea layout="fill" src="/static/20.jpg" alt="kaji-logo" />
      </SubContainerArea>
      <SubContainerArea>
        <ImageArea layout="fill" src="/static/22.jpg" alt="kaji-logo" />
      </SubContainerArea>
    </MainContainerArea>
  );
}

export default creation;

const ImageArea = styled(Image)`
  position: relative !important;
  width: 50% !important;
  height: unset !important;
`;

const MainContainerArea = styled.div``;

const SubContainerArea = styled.div``;
