import styled, { keyframes, css } from "styled-components";

// Animação para fade in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Nova animação para destacar a experiência selecionada
const pulseHighlight = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(65, 105, 225, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(65, 105, 225, 0); }
  100% { box-shadow: 0 0 0 0 rgba(65, 105, 225, 0); }
`;

export const ExperienceContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem 0;
  background: #F8F8F8;
  position: relative; /* For absolute positioning of popup */
  overflow: visible; /* Ensure popup can appear outside */
`;

export const ContentWrapper = styled.div`
  width: 75%;
  max-width: 1200px;
  position: relative;
`;

export const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #171717;
  margin-bottom: 3rem;
  text-align: center;

  span {
    color: #4169E1;
  }
`;

// Timeline central line that spans the entire section
export const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background-color: #ccc;
  top: 6rem;
  bottom: 0;
  z-index: 1;

  @media (max-width: 900px) {
    left: 15px;
    transform: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
  }
`;

export const ExperienceRow = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 4rem;
  min-height: 120px;
  gap: 8rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 900px) {
    flex-direction: column;
    padding-left: 40px;
    margin-bottom: 5rem;
    gap: 1rem;
  }
  
  /* Animação para novos elementos */
  animation: ${fadeIn} 0.5s ease-out;
  
  /* Estilo e animação para experiências destacadas */
  ${props => props.$highlighted && css`
    background-color: rgba(65, 105, 225, 0.1);
    border-radius: 10px;
    box-shadow: 0 0 0 2px #4169E1;
    animation: ${pulseHighlight} 2s infinite;
    padding: 1.5rem;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    width: calc(100% + 3rem);
  `}
  
  @media (max-width: 900px) {
    ${props => props.$highlighted && css`
      margin-left: -0.5rem;
      width: calc(100% + 1rem);
    `}
  }
`;

export const LeftColumn = styled.div`
  width: calc(50% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin-left: 60px;
  position: relative;
  
  @media (max-width: 900px) {
    width: 100%;
    margin-left: 40px;
    align-items: flex-start;
    text-align: left;
    padding-bottom: 0.5rem;
  }
`;

export const RightColumn = styled.div`
  width: calc(50% - 20px);
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  
  @media (max-width: 900px) {
      width: 100%;
      padding-left: 3rem;
    }
`;

export const ExperienceCompany = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #171717;
  margin: 0;
`;

export const ExperienceDate = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0.5rem 0 0 0;
`;

export const ExperienceRole = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #171717;
  margin: 0;
`;

export const ExperienceDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin: 0.5rem 0 0 0;
`;

export const TimelinePoint = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color || "#4169E1"};
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #ccc;
  z-index: 2;
  
  @media (max-width: 900px) {
    left: 15px;
    transform: translateY(-50%);
  }
`;

export const CompanyInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 15px;
`;

export const TechButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: #4169E1;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  
  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.05);
  }
  
  svg {
    font-size: 24px;
  }
`;

export const TechPopup = styled.div`
  position: fixed;
  z-index: 9999;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 15px 20px;
  min-width: 200px;
  width: fit-content;
  box-sizing: border-box;
  transform: translateZ(0);
  pointer-events: auto;
  
  h4 {
    margin: 0 0 10px 0;
    font-size: 16px;
    color: #333;
    font-weight: 600;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: 15px;
    width: 10px;
    height: 10px;
    background-color: white;
    transform: rotate(45deg);
  }
  
  @media (max-width: 900px) {
    &:before {
      left: auto;
      right: 15px;
    }
  }
`;

export const TechItem = styled.div`
  padding: 8px;
  margin-bottom: 5px;
  font-size: 15px;
  color: ${props => props.color || '#333'};
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease, transform 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
    transform: translateX(3px);
  }
  
  &:active {
    transform: translateX(1px);
  }
  
  .tech-icon {
    margin-right: 10px;
    color: ${props => props.color || '#333'};
    display: flex;
    align-items: center;
  }
  
  .tech-icon svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }
  
  .tech-name {
    font-weight: 500;
  }
`;

// Botão para expandir experiências anteriores
export const ShowMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: #4169E1;
  border: 2px solid #4169E1;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin: 0 auto 2rem auto;
  transition: all 0.3s ease;
  position: relative;
  z-index: 5;
  
  &:hover {
    background-color: #4169E1;
    color: white;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  svg {
    margin-right: 8px;
  }
`;

// Contêiner para o botão mostrar mais
export const ShowMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
`;
