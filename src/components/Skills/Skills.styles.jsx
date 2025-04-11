import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
`;

export const ContentWrapper = styled.div`
  width: 75%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #171717;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(65, 105, 225, 0.34);
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${props => props.$isChanging ? '0' : '1'};
  transform: translateX(${props => props.$slideDirection === 'right' ? '-20px' : props.$slideDirection === 'left' ? '20px' : '0'});

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SkillCard = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background: #fafafa;
  }
  
  &:active {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 1100px) {
    padding: 1.25rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const SkillIcon = styled.div`
  font-size: 3.5rem;
  margin-right: 1.5rem;
  color: ${(props) => props.color || "#171717"};
  
  @media (max-width: 1100px) {
    font-size: 3rem;
    margin-right: 1.25rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-right: 1rem;
  }
`;

export const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SkillName = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #171717;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const SkillProjects = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.color};
  margin-top: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Novos estilos para o popup
export const TechPopup = styled.div`
  position: fixed;
  z-index: 9999;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 0;
  min-width: 280px;
  max-width: 350px;
  box-sizing: border-box;
  transform: translateZ(0);
  pointer-events: auto;
  
  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: 20px;
    width: 16px;
    height: 16px;
    background-color: white;
    transform: rotate(45deg);
    box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.04);
  }
`;

export const TechPopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #f9f9f9;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #eee;
`;

export const TechPopupTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #171717;
`;

export const TechPopupClose = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: #666;
  padding: 0 5px;
  
  &:hover {
    color: #171717;
  }
`;

export const TechPopupSection = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const TechPopupSectionTitle = styled.h4`
  margin: 0 0 10px 0;
  font-size: 1rem;
  color: #4169E1;
`;

export const TechPopupItem = styled.div`
  padding: 6px 0;
  font-size: 0.9rem;
  color: #444;
  
  &:not(:last-child) {
    border-bottom: 1px dotted #eee;
  }
`;

export const TechPopupNoItems = styled.div`
  color: #888;
  font-size: 0.85rem;
  font-style: italic;
  padding: 5px 0;
`;

// Adicionar novos estilos para paginação
export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 22rem;
  position: absolute;
  @media (max-width: 1100px) {
    height: 28rem;
  }
  @media (max-width: 768px) {
    height: 22rem;
  }
  @media (max-width: 600px) {
    height: 42rem;
  }
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
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  
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
  position: absolute;
  left: -30px; 
  top: 50%; 
  transform: translateY(-50%); 
  
  @media (max-width: 768px) {
    left: -30px; 
  }
`;

export const NextArrow = styled(PaginationArrow)`
  position: absolute;
  right: -30px; 
  top: 50%; 
  transform: translateY(-50%); 
  
  @media (max-width: 768px) {
    right: -30px; 
  }
`;

export const PaginationIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 1rem;
`;

export const PageDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.$active ? '#4169E1' : '#ccc'};
  transition: background 0.3s ease;
  cursor: pointer;
`;

// Wrapper para posicionar o grid e os controles de paginação
export const SkillsGridContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;