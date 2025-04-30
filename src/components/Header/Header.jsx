import React, { useState, useEffect } from "react";
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
import icon01 from "/src/assets/01-icon.png"; // Importando a imagem

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Se estiver scrollando e o menu estiver aberto, fecha o menu
      if (currentScrollPos !== prevScrollPos && menuOpen) {
        setMenuOpen(false);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    // Adiciona o event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen, prevScrollPos]);
  
  const navLinkProps = {
    smooth: true,
    duration: 500,
    spy: true,
    offset: -100,
    onClick: () => setMenuOpen(false)
  };

  return (
    <HeaderContainer>
      <Nav>
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
            <img src={icon01} alt="Logo 01" /> 
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
        
        <MobileOnly>
          <Logo>
            <img src={icon01} alt="Logo 01" /> 
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