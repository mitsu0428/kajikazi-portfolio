import React from "react";
import styled from "styled-components";

function FooterComponents() {
  return (
    <div>
      {" "}
      <BasicFooter>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{"Hayato Kajiwara"}
        </a>
      </BasicFooter>
    </div>
  );
}

export default FooterComponents;

const BasicFooter = styled.footer`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 32px;
  padding-bottom: 32px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
