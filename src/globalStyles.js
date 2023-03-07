import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "MS Sans Serif", sans-serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const Section = styled.section`
  padding: ${(props) => props.$padding || "140px 0"};
  margin: ${(props) => props.$margin || ""};
  background: ${(props) => (!!props.$inverse ? "white" : "#377E80")};
  position: ${(props) => props.$position || ""};
  width: ${(props) => props.$width || "auto"};
  min-width: ${(props) => props.$minWidth || "auto"};
  max-width: ${(props) => props.$maxWidth || "auto"};
  height: ${(props) => (props.$height ? props : "auto")};
  max-height: ${(props) => props.$maxHeight || "auto"};
  min-height: ${(props) => props.$minHeight || "auto"};
  @media screen and (max-width: 768px) {
    padding: ${(props) => props.$smPadding || "70px 0"};
  }
`;

export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: #fff;
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export default GlobalStyle;