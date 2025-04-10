import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FooterContainer,
  FooterTop,
  FooterNav,
  FooterSocials,
  FooterEmail,
  FooterBottom,
  Logo,
  SocialIcon,
  EmailButton,
  EmailIcon,
  SuccessIcon,
  CopyrightText,
  ToastNotification,
} from "./Footer.styles";

import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaCheck } from "react-icons/fa";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const email = "andreparoon@gmail.com";

  // Configurações comuns para todos os links de navegação
  const navLinkProps = {
    smooth: true,
    duration: 500,
    offset: -100 // Ajustar conforme necessário
  };

  const copyToClipboard = () => {
    // Use the Clipboard API if available
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
        .then(() => {
          setCopied(true);
          setShowToast(true);
          setTimeout(() => {
            setCopied(false);
            setShowToast(false);
          }, 3000);
        });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed"; // Avoid scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        setCopied(true);
        setShowToast(true);
        setTimeout(() => {
          setCopied(false);
          setShowToast(false);
        }, 3000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
      
      document.body.removeChild(textArea);
    }
  };

  return (
    <FooterContainer>
      <FooterTop>
        {/* Logo */}
        <Logo>
          <span>01</span> Andre
        </Logo>

        {/* Navegação */}
        <FooterNav>
          <Link to="introduction" {...navLinkProps}>Início</Link>
          <Link to="skills" {...navLinkProps}>Habilidades</Link>
          <Link to="experience" {...navLinkProps}>Experiência</Link>
          <Link to="projects" {...navLinkProps}>Meus Projetos</Link>
        </FooterNav>

        {/* Redes sociais */}
        <FooterSocials>
          <SocialIcon href="https://github.com/Parron01" target="_blank">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/andre_parron" target="_blank">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/andre-parron-45840a250/" target="_blank">
            <FaLinkedin />
          </SocialIcon>
        </FooterSocials>

        {/* Botão de E-mail */}
        <FooterEmail>
          <EmailButton onClick={copyToClipboard} type="button">
            {email} {copied ? <SuccessIcon /> : <EmailIcon />}
          </EmailButton>
        </FooterEmail>
      </FooterTop>

      {/* Rodapé inferior */}
      <FooterBottom>
        <CopyrightText>
          © 2025 <strong>Andre Parron Aranda</strong> - Software Developer
        </CopyrightText>
      </FooterBottom>
      
      {showToast && (
        <ToastNotification>
          <FaCheck /> Email copiado para área de transferência!
        </ToastNotification>
      )}
    </FooterContainer>
  );
};

export default Footer;