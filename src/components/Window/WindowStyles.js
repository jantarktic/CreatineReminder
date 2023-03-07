import styled from "styled-components";

export const WindowContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const WindowDiv = styled.div`
  display: flex;
  background: #C0C0C0;
  overflow: hidden;
  padding: 0 0 0.75em 0;
  margin: 0 15px 10px 15px;
  border: solid;
  border-top-color: #fff;
  border-left-color: #fff;
  border-bottom-color: #0E0E0E;
  border-right-color: #0E0E0E;
  box-shadow: 2px 2px 5px gray;
  width: 650px;
  `

export const WindowDetails = styled.div`
  display: flex;
  background: #02009A;
  padding: 0.75em;
  width: 100%;
  align-items: start;
  color: inherit;
  text-decoration: none;
`;

export const WindowName = styled.p`
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 2px;
  align-self: center;
  justify-self: start;
  text-align: start;
  display: flex;
  align-items: center;
  color: #fff;
`;

export const WindowCross = styled.img`
  grid-column: 2/2;
  width: 3.55em;
  height: 3.55em;
  border-radius: 50%;
  object-fit: cover;
  &:hover {
    filter: brightness(0.9);
  }
`;