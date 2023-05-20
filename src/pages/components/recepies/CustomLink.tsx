import React from "react";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  toPage: string;
  toPageName: string;
};

const PropsLink = ({ toPage, toPageName }: Props): JSX.Element => {
  return (
    <CustomText>
      <CustomLink href={toPage ?? ""}>{toPageName ?? ""}</CustomLink>
    </CustomText>
  );
};

export default PropsLink;

const CustomText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`;

const CustomLink = styled(Link)`
  display: inline-block;
  border: none;
  outline: none;
  text-decoration: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.8)
  font-family: sans-serif;
  font-size: 1em;
  cursor: pointer;

  &:active {
    transform: translateY(1px);
  }

  &:before {
    content: "";
    opacity: 0;
    transition: 0.3s;
  }

  &:hover:before {
    opacity: 0.1;
  }
`;
