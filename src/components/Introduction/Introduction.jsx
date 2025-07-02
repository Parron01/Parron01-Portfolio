import React from "react";
import {
  IntroductionContainer,
  Content,
  TextContainer,
  TitleContainer,
  TitleWord,
  Subtitle,
  Name,
  Description,
  HireMeButton,
  SocialIcons,
  SocialIcon,
  ProfileImage,
  ImageContainer,
} from "./Introduction.styles";
import profilePic from "/src/assets/profile.png"; 
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Introduction = () => {
  return (
    <IntroductionContainer id="introduction">
      <Content>
        {/* Texto e informações */}
        <TextContainer>
          <Subtitle>Olá, eu sou</Subtitle>
          <Name>Andre Parron</Name>
          <TitleContainer>
            <TitleWord $align="left">Software</TitleWord>
            <TitleWord $align="right">Developer</TitleWord>
          </TitleContainer>
          <Description>
            Formado em Ciência da Computação, 23 anos. <br />
            Atuo na área de desenvolvimento de software tanto no Frontend como no Backend.
          </Description>
          <HireMeButton 
            href="https://drive.google.com/file/d/14C6v-B7y9VJqNuhdAhbLI3ELH8Xvjujb/view" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Currículo
          </HireMeButton>
        </TextContainer>

        {/* Imagem de perfil e ícones sociais */}
        <ImageContainer>
          <ProfileImage src={profilePic} alt="Foto de Andre Parron" />
          
          {/* Ícones sociais */}
          <SocialIcons>
            <SocialIcon href="https://github.com/Parron01" target="_blank">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/andre_parron" target="_blank">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/parron01" target="_blank">
              <FaLinkedin />
            </SocialIcon>
          </SocialIcons>
        </ImageContainer>
      </Content>
    </IntroductionContainer>
  );
};

export default Introduction;
