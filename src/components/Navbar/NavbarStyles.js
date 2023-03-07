import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: "#377E80";
  margin-bottom: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  z-index: 50;
  width: 100%;
  transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled.div`
  color: #404040;
  justify-self: flex-start;
  text-decoration: none;
  font-size: 2rem;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  z-index: 50;
  @media screen and (max-width: 780px) {
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;
  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.span`
  color: #404040;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  letter-spacing: 2px;
  height: 100%;
  &:hover {
    color: #E0E0E0;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #E0E0E0;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;