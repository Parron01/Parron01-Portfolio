import styled, { keyframes } from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

// Wrapper para posicionar o grid e os controles de paginação
export const ProjectsGridContainer = styled.div`
  position: relative;
  width: 75%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${props => props.$isChanging ? '0' : '1'};
  transform: translateX(${props => props.$slideDirection === 'right' ? '-20px' : props.$slideDirection === 'left' ? '20px' : '0'});
`;

// Container de paginação sem altura fixa
export const PaginationContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none; // Para que não interfira nos cliques do grid
  z-index: 5;
`;

export const PaginationArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.disabled ? '#e0e0e0' : '#4169E1'};
  color: ${props => props.disabled ? '#999' : 'white'};
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 1.2rem;
  box-shadow: ${props => props.disabled ? 'none' : '0 2px 5px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;
  pointer-events: auto; // Para que as setas sejam clicáveis
  position: absolute;
  top: 50%; // Centraliza verticalmente
  transform: translateY(-50%);
  
  &:hover:not(:disabled) {
    background: ${props => props.disabled ? '#e0e0e0' : '#2a4db9'};
    box-shadow: ${props => props.disabled ? 'none' : '0 4px 8px rgba(0, 0, 0, 0.15)'};
  }
  
  &:active:not(:disabled) {
    transform: translateY(-50%) scale(0.95);
  }
  
  &:focus {
    outline: none;
  }
`;

export const PrevArrow = styled(PaginationArrow)`
  left: -50px;
`;

export const NextArrow = styled(PaginationArrow)`
  right: -50px;
`;

export const PaginationIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 2rem;
`;

export const PageDot = styled.div`
  width: ${props => props.$active ? '30px' : '20px'};
  height: ${props => props.$active ? '8px' : '6px'};
  border-radius: 3px;
  background: ${props => props.$active ? '#4169E1' : '#ccc'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.$active ? '#4169E1' : '#aaa'};
  }
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

// Nova animação para destacar o card do projeto
const pulseHighlight = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(65, 105, 225, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(65, 105, 225, 0); }
  100% { box-shadow: 0 0 0 0 rgba(65, 105, 225, 0); }
`;

export const CardTouchIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  z-index: 10;
  pointer-events: none;
  animation: ${fadeInOut} 2s ease-in-out forwards;
  
  svg {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: white;
  }
`;

export const TapText = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  padding: 0 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
`;

export const ProjectCard = styled.div`
  display: flex;
  align-items: stretch;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${props => props.$highlighted 
    ? '0 0 0 2px #4169E1' 
    : '2px 2px 10px rgba(0, 0, 0, 0.1)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgb(47, 47, 47);
  width: 67%;
  margin-right: ${({ $index }) => ($index % 2 === 0 ? 'auto' : '0')};
  margin-left: ${({ $index }) => ($index % 2 !== 0 ? 'auto' : '0')};
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')};
  position: relative;
  animation: ${props => props.$highlighted ? pulseHighlight : 'none'} 2s infinite;
  background: ${props => props.$highlighted ? 'rgba(65, 105, 225, 0.1)' : 'white'};

  &:hover {
    transform: ${({ $isClickable }) => ($isClickable ? 'scale(1.02)' : 'none')};
    box-shadow: ${({ $isClickable, $highlighted }) => 
      $highlighted 
        ? '0 0 0 2px #4169E1' 
        : ($isClickable ? '0 5px 15px rgba(0, 0, 0, 0.2)' : '2px 2px 10px rgba(0, 0, 0, 0.1)')};
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
  
  @media (max-width: 768px) {
    padding-top: 0.5rem; /* Add a bit of top padding to the card itself */
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
  
  @media (max-width: 768px) {
    padding-top: 2rem; /* Increased top padding for mobile */
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #171717;
  
  @media (max-width: 768px) {
    margin-top: 0.5rem; /* Add margin at the top on small screens */
  }
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

export const ProjectButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
  
  @media (max-width: 1100px) {
    align-items: center;
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

export const LinkedInPostButton = styled.a`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 36px;
  height: 36px;
  background-color: #0077B5;
  color: white;
  border-radius: 36px;
  display: flex;
  align-items: center;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 119, 181, 0.3);
  transition: all 0.3s ease;
  z-index: 15;
  opacity: 0.9;
  overflow: hidden;
  padding: 0;
  justify-content: center; /* Always centered in default state */
  
  /* Mobile styles - always expanded and positioned higher */
  @media (max-width: 768px) {
    width: 80px;
    justify-content: flex-start;
    padding-left: 8px;
    top: 0.6rem; /* Positioned higher on mobile */
  }
  
  /* Tablet styles - always expanded */
  @media (min-width: 769px) and (max-width: 1100px) {
    width: 80px;
    justify-content: flex-start;
    padding-left: 8px;
  }
  
  /* Desktop hover styles */
  @media (min-width: 1101px) {
    &:hover {
      width: 80px;
      opacity: 1;
      background-color: #005885;
      box-shadow: 0 4px 12px rgba(0, 119, 181, 0.4);
      justify-content: flex-start;
      padding-left: 8px;
    }
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const LinkedInIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; /* Fixed width that matches the parent button width */
  min-width: 36px; /* Ensures it doesn't shrink */
  height: 36px;
`;

export const LinkedInPostText = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.3s ease;
  overflow: hidden;
  
  /* Desktop styles */
  @media (min-width: 1101px) {
    opacity: 0;
    max-width: 0;
    
    ${LinkedInPostButton}:hover & {
      opacity: 1;
      max-width: 40px; /* Reduced from 50px */
      margin-left: -4px; /* Reduced from -5px */
    }
  }
  
  /* Mobile styles - always visible */
  @media (max-width: 1100px) {
    opacity: 1;
    max-width: 40px; /* Reduced from 50px */
    margin-left: -4px; /* Reduced from -5px */
  }
`;

export const LinkedInTooltip = styled.div`
  position: absolute;
  background-color: #333;
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  top: 100%;
  right: 0;
  margin-top: 8px;
  white-space: nowrap;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '-5px')});
  transition: all 0.2s ease;
  z-index: 20;
  
  &:before {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 12px;
    border: 5px solid transparent;
    border-bottom-color: #333;
  }
`;

export const GitHubIcon = styled(FaGithub)`
  font-size: 1.2rem;
`;

export const LinkedInIcon = styled(FaLinkedin)`
  font-size: 1rem;
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
