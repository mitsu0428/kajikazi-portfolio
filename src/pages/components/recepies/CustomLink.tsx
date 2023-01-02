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
  color: white;
`;

const CustomLink = styled(Link)`
  display: inline-block;
  border: none;
  outline: none;
  padding: 0.75em 1.5em;
  margin: 0;
  text-decoration: none;
  background: transparent;
  color: white;
  font-family: sans-serif;
  font-size: 1em;
  cursor: pointer;

  &:active {
    transform: translateY(1px);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: 0.3s;
  }

  &:hover:before {
    opacity: 0.1;
  }
`;
