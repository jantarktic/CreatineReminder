import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarStyles.js";

const Navbar = () => {

  const data =
  {
    to: "https://twitter.com/creatine_cycle",
    text: "@creatine_cycle",
    id: "twitter1",
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          Creatine Reminder
        </NavLogo>
        <NavMenu>
          <NavItem>
            <a href={data.to} target="_blank" rel="noopener noreferrer">
              <NavLinks>{data.text}</NavLinks>
            </a>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;