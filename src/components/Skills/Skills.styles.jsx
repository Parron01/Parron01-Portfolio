import styled, { keyframes } from "styled-components";

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

// Nova animação para destacar o card selecionado
const pulseHighlight = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(65, 105, 225, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(65, 105, 225, 0); }
  100% { box-shadow: 0 0 0 0 rgba(65, 105, 225, 0); }
`;

export const SkillCard = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.$highlighted ? 'rgba(65, 105, 225, 0.1)' : '#fff'};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: ${props => props.$highlighted 
    ? '0 0 0 2px #4169E1' 
    : '2px 2px 10px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  z-index: 1;
  animation: ${props => props.$highlighted ? pulseHighlight : 'none'} 2s infinite;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background: ${props => props.$highlighted ? 'rgba(65, 105, 225, 0.1)' : '#fafafa'};
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

// Novos estilos para o popup com abas
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

  @media (max-width: 480px) {
    min-width: 250px;
    max-width: 280px;
    left: 50% !important;
    transform: translateX(-50%);
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

// Navegação por abas
export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
`;

export const Tab = styled.button`
  flex: 1;
  padding: 10px;
  background: ${props => props.$active ? '#4169E1' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#333'};
  border: none;
  cursor: pointer;
  font-weight: ${props => props.$active ? '600' : '400'};
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$active ? '#4169E1' : '#f0f0f0'};
  }

  &:first-child {
    border-bottom-left-radius: ${props => props.$rounded ? '4px' : '0'};
  }

  &:last-child {
    border-bottom-right-radius: ${props => props.$rounded ? '4px' : '0'};
  }
`;

export const TechPopupSection = styled.div`
  padding: 0 20px; // Removido padding-top para título colar no header
  max-height: ${props => props.$scrollable ? '180px' : 'auto'}; /* máximo height */
  overflow-y: ${props => props.$scrollable ? 'auto' : 'visible'};
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 15px;
  }

  /* Estilizando a barra de rolagem */
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }
`;

export const TechPopupSectionTitle = styled.h4`
  margin: 0;
  padding: 10px 0;
  font-size: 1rem;
  color: #4169E1;
  position: sticky;
  top: 0;
  background: white;
  z-index: 2;
  border-bottom: 1px solid #eee;
`;

export const TechPopupItem = styled.div`
  padding: 6px 0;
  font-size: 0.9rem;
  color: #444;
  margin-top: 5px; // Adicionado pequeno espaçamento do título
  
  &:not(:last-child) {
    border-bottom: 1px dotted #eee;
  }
  
  &.clickable-item {
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 8px 6px;
    border-radius: 4px;
    
    &:hover {
      background-color: #f5f5f5;
      transform: translateX(3px);
      color: #4169E1;
    }
    
    &:active {
      transform: translateX(1px);
    }
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
  left: -20px;
`;

export const NextArrow = styled(PaginationArrow)`
  right: -20px;
`;

export const PaginationIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 1.5rem;
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

// Wrapper para posicionar o grid e os controles de paginação
export const SkillsGridContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Novos estilos para filtros de categoria
export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
`;

export const FilterButton = styled.button`
  background: ${props => props.$active ? '#4169E1' : '#f8f8f8'};
  color: ${props => props.$active ? 'white' : '#333'};
  border: 2px solid ${props => props.$active ? '#4169E1' : '#e0e0e0'};
  border-radius: 50px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$active 
    ? '0 4px 8px rgba(65, 105, 225, 0.2)' 
    : '0 2px 4px rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    background: ${props => props.$active ? '#3154b0' : '#eaeaea'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

export const FilterIcon = styled.span`
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 1.1rem;
  }
`;

export const CategoryBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${props => {
    switch (props.$category?.toLowerCase()) {
      case 'frontend': return '#61DAFB';
      case 'backend': return '#F89820';
      case 'database': return '#336791';
      case 'devops': return '#2496ED';
      default: return '#aaaaaa';
    }
  }};
  color: white;
  font-size: 0.7rem;
  padding: 3px 8px;
  border-radius: 12px;
  font-weight: bold;
  opacity: 0.9;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;