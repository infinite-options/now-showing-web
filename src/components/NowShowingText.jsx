import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import ACFilmstripFont from "../assets/fonts/ACFilmstrip.otf";

const StyledFont = createGlobalStyle`
     @font-face {
    font-family: "ACFilmstrip";
    src: url(${ACFilmstripFont}) format("opentype");
  }

`;
const NowShowingText = styled.h2`
  font-family: "ACFilmstrip", sans-serif;
  font-weight: 400;
  font-size: 64px;
  text-align: center;
  color: #ffc319;
`;

export const NowShowingHeader = () => {
  return (
    <>
      <StyledFont />
      <NowShowingText>Now Showing</NowShowingText>
    </>
  );
};
