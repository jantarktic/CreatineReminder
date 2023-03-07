import styled from "styled-components";

export const WindowContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const WindowDiv = styled.div`
  display: grid;
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
  display: grid;
  grid-template-columns: 2;
  background: #02009A;
  padding: 0.75em;
  width: 100%;
  align-items: start;
  color: inherit;
  text-decoration: none;
`;

export const WindowName = styled.p`
  font-size: 1em;
  grid-column: 1/2;
  letter-spacing: 2px;
  align-self: center;
  justify-self: start;
  text-align: start;
  display: flex;
  align-items: center;
  color: #fff;
`;

export const WindowCross = styled.img`
  display: flex;
  width: 2em;
  height: 2em;
  grid-column: 2/2;
  background: #C0C0C0;
  padding: 3px;
  border: solid;
  border-top-color: #fff;
  border-left-color: #fff;
  border-bottom-color: #0E0E0E;
  border-right-color: #0E0E0E;
  justify-self: end;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const WindowText = styled.div`
  font-size: 0.9em;
  letter-spacing: 2px;
  padding: 1em;
  text-align: center;`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;`