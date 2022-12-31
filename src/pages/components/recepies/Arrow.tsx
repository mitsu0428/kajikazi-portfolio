import React from "react";
import styled from "styled-components";

const Arrow = () => {
  return <Line />;
};

export default Arrow;

const Line = styled.span`
  display: inline-block;
  width: 2px;
  height: 50px;
  background-color: black;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transform: translateY(-100%);
    -webkit-animation: animate 3s linear infinite;
    animation: animate 3s linear infinite;
  }

  @keyframes animate {
    // 線が縦に伸びるように
    0% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @-webkit-keyframes animate {
    // 線が縦に伸びるように
    0% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;
