import React, { useState } from "react";
import { Link } from "react-scroll";
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
  
  // Configurações comuns para todos os links de navegação
  const navLinkProps = {
    smooth: true,
    duration: 500,
    spy: true,
    offset: -100, // Ajustar conforme necessário para compensar o header fixo
    onClick: () => setMenuOpen(false) // Fechar menu móvel após clicar
  };

  return (
    <HeaderContainer>
      <Nav>
        {/* Layout para Desktop */}
        <LeftNavGroup>
          <NavItem>
            <Link to="introduction" {...navLinkProps} activeClass="active">
              <NavButton $active={false}>Início</NavButton>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="skills" {...navLinkProps} activeClass="active">
              <NavButton $active={false}>Habilidades</NavButton>
            </Link>
          </NavItem>
        </LeftNavGroup>
        
        <DesktopLogo>
          <Logo>
            <span>01</span>
          </Logo>
        </DesktopLogo>
        
        <RightNavGroup>
          <NavItem>
            <Link to="experience" {...navLinkProps} activeClass="active">
              <NavButton $active={false}>Experiência</NavButton>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="projects" {...navLinkProps} activeClass="active">
              <NavButton $active={false}>Meus Projetos</NavButton>
            </Link>
          </NavItem>
        </RightNavGroup>
        
        {/* Layout para Mobile */}
        <MobileOnly>
          <Logo>
            <span>01</span>
          </Logo>
          <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </MenuToggle>
        </MobileOnly>
        
        <NavLinks open={menuOpen}>
          <NavItem>
            <Link to="introduction" {...navLinkProps} activeClass="active">
              <NavButton $active={false}>Início</NavButton>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="skills" {...navLinkProps} activeClass="active">
              <NavButton $active={false}>Habilidades</NavButton>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="experience" {...navLinkProps} activeClass="active">
              <NavButton $active={false}>Experiência</NavButton>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="projects" {...navLinkProps} activeClass="active">
              <NavButton $active={false}>Meus Projetos</NavButton>
            </Link>
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;