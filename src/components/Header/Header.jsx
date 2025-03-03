import React, { useState } from "react";
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavItem,
  NavButton,
  MenuToggle,
  LeftNavGroup,
  RightNavGroup,
  MobileOnly,
  DesktopLogo
} from "./Header.styles";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        {/* Layout para Desktop */}
        <LeftNavGroup>
          <NavItem>
            <NavButton $active>Home</NavButton>
          </NavItem>
          <NavItem>
            <NavButton>Habilidades</NavButton>
          </NavItem>
        </LeftNavGroup>
        
        <DesktopLogo>
          <Logo>
            <span>01</span> Andre
          </Logo>
        </DesktopLogo>
        
        <RightNavGroup>
          <NavItem>
            <NavButton>Experiência</NavButton>
          </NavItem>
          <NavItem>
            <NavButton>Meus Projetos</NavButton>
          </NavItem>
        </RightNavGroup>
        
        {/* Layout para Mobile */}
        <MobileOnly>
          <Logo>
            <span>01</span> Andre
          </Logo>
          <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </MenuToggle>
        </MobileOnly>
        
        <NavLinks open={menuOpen}>
          <NavItem>
            <NavButton $active>Home</NavButton>
          </NavItem>
          <NavItem>
            <NavButton>Habilidades</NavButton>
          </NavItem>
          <NavItem>
            <NavButton>Experiência</NavButton>
          </NavItem>
          <NavItem>
            <NavButton>Meus Projetos</NavButton>
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
