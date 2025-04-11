import styled, { keyframes } from "styled-components";
import { FaGithub } from "react-icons/fa";

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 0;
`;

export const ProjectsTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #171717;
  margin-bottom: 2rem;
`;

export const ProjectGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 75%;
  max-width: 1200px;
`;

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  50% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-5px); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

export const CardTouchIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 12px 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1rem;
  z-index: 20; 
  animation: ${pulseAnimation} 1s infinite ease-in-out;
  pointer-events: none; 
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  max-width: 80%; 
  text-align: center;
  
  
  @media (max-width: 1100px) {
    width: auto;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 0.9rem;
  }
`;

export const TapText = styled.span`
  font-weight: 500;
  white-space: nowrap;
`;

export const ProjectCard = styled.div`
  display: flex;
  align-items: stretch;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgb(47, 47, 47);
  width: 67%;
  margin-right: ${({ $index }) => ($index % 2 === 0 ? 'auto' : '0')};
  margin-left: ${({ $index }) => ($index % 2 !== 0 ? 'auto' : '0')};
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')};
  position: relative;

  &:hover {
    transform: ${({ $isClickable }) => ($isClickable ? 'scale(1.02)' : 'none')};
    box-shadow: ${({ $isClickable }) => ($isClickable ? '0 5px 15px rgba(0, 0, 0, 0.2)' : '2px 2px 10px rgba(0, 0, 0, 0.1)')};
  }
  
  &:active {
    transform: ${({ $isClickable }) => ($isClickable ? 'scale(0.98)' : 'none')};
  }

  ${({ $reverse }) =>
    $reverse &&
    `
    flex-direction: row-reverse;
  `}

  @media (max-width: 1100px) {
    flex-direction: column;
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const ProjectContent = styled.div`
  flex: 0 0 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  @media (max-width: 1100px) {
    width: 100%;
    flex: auto;
    padding: 1.5rem;
    align-items: center; 
    text-align: center; 
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #171717;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0.5rem 0;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin: 1rem 0;
  position: relative;
  
  @media (max-width: 1100px) {
    justify-content: center; 
  }
`;

export const TechItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${(props) => props.color};
  transition: transform 0.2s ease;
  cursor: pointer;
  position: relative;
  
  &:hover {
    transform: scale(1.2);
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  transition: opacity 0.2s;
  margin-bottom: 5px;
  z-index: 10;
  
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

export const ProjectLink = styled.a`
  background-color: #333;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  max-width: 250px;
  text-decoration: none;
  position: relative; 
  z-index: 10;
  
  &:hover {
    background-color: #171717;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const GitHubIcon = styled(FaGithub)`
  font-size: 1.2rem;
`;
  
export const ProjectImage = styled.img`
  flex: 0 0 50%;
  object-fit: cover;
  width: 50%;
  height: auto;

  ${({ $reverse }) => $reverse && `
    order: ${$reverse ? '2' : '1'};
  `}

  @media (max-width: 1100px) {
    width: 100%;
    height: 300px;
    order: 1;
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;
