import styled from "styled-components";

export const IntroductionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12rem 0 2rem 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 75%;
  max-width: 1200px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  max-width: 50%;
  padding-top: 20px;
  
  @media (max-width: 1100px) {
    max-width: 80%;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #171717;

  @media (max-width: 1100px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export const Name = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #4169E1;

  @media (max-width: 1100px) {
    font-size: 4rem;
    text-align: center;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0 1.5rem;
  
  @media (max-width: 1100px) {
    width: 100%;
    align-items: center;
  }
`;

export const TitleWord = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #171717;
  line-height: 1;
  text-align: ${props => props.align || "left"};
  
  @media (max-width: 1100px) {
    font-size: 7rem;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    font-size: 4rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #171717;
  margin: 1.5rem 0;
  line-height: 1.6;
  
  @media (max-width: 1100px) {
    font-size: 1.5rem;
    max-width: 80%;
  }
`;

export const HireMeButton = styled.a`
  background-color: #4169E1;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #3154b0;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  font-size: 2.5rem;
  color: #171717;
  transition: color 0.3s ease;

  &:hover {
    color: #4169E1;
  }
`;

export const ProfileImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #4169E1;

  @media (max-width: 1100px) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
   
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;
