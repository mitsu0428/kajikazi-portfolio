import React from "react";
import styled from "styled-components";

const Gradation = () => {
  return <Container />;
};

export default Gradation;

const Container = styled.div`
  height: 100vh; /* 画面の高さを占める */
  width: 100vw; /* 画面の幅を占める */
  background: linear-gradient(
    to bottom,
    red,
    blue
  ); /* 上から下へのグラデーション */
  background-attachment: fixed; /* 背景をスクロールに追従させる */
`;
