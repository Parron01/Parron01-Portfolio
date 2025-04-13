import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  SkillsContainer,
  ContentWrapper,
  SkillsTitle,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillInfo,
  SkillName,
  SkillProjects,
  TechPopup,
  TechPopupHeader,
  TechPopupTitle,
  TechPopupClose,
  TechPopupSection,
  TechPopupSectionTitle,
  TechPopupItem,
  TechPopupNoItems,
  // Novos componentes para abas
  TabsContainer,
  Tab,
  // Componentes de paginação
  SkillsGridContainer,
  PaginationContainer,
  PrevArrow,
  NextArrow,
  PaginationIndicator,
  PageDot
} from "./Skills.styles";

import { usePortfolioData } from "../../hooks/usePortfolioData.jsx"; // Usando .jsx para evitar confusão

const ITEMS_PER_PAGE = 6; // 2 linhas com 3 colunas = 6 itens por página

/**
 * Componente de exibição das habilidades técnicas, ordenadas por frequência de uso
 * @returns {React.ReactElement} Componente de habilidades
 */
const Skills = () => {
  const { 
    techItems, 
    isLoading, 
    highlightedTech, 
    findTechPage,
    navigateToExperience,
    navigateToProject 
  } = usePortfolioData();
  const [activePopup, setActivePopup] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanging, setIsChanging] = useState(false);
  const [slideDirection, setSlideDirection] = useState(null);
  const [activeTab, setActiveTab] = useState('projects'); // Estado para controlar a aba ativa: 'projects' ou 'experiences'
  const popupRef = useRef(null);
  const cardRefs = useRef({});

  // Calcular o número total de páginas
  const totalPages = Math.ceil(techItems.length / ITEMS_PER_PAGE);

  // Fechar popup ao fazer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (activePopup) {
        setActivePopup(null);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePopup]);

  // Fechar popup ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activePopup && popupRef.current && !popupRef.current.contains(e.target)) {
        const isCardClick = Object.values(cardRefs.current).some(
          ref => ref && ref.contains(e.target)
        );
        
        if (!isCardClick) {
          setActivePopup(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activePopup]);

  // Efeito para navegar até a tecnologia destacada
  useEffect(() => {
    if (highlightedTech && techItems.length > 0) {
      // Encontrar a página onde a tecnologia está
      const techPage = findTechPage(highlightedTech);
      
      // Se a tecnologia foi encontrada e está em uma página diferente
      if (techPage > 0 && techPage !== currentPage) {
        // Navegar para a página correta
        const direction = techPage > currentPage ? 'left' : 'right';
        animatePageChange(direction, techPage);
      }
    }
  }, [highlightedTech, techItems]);

  /**
   * Manipula clique no card de habilidade mostrando popup com detalhes
   * @param {Event} e - Evento do clique
   * @param {Object} tech - Objeto com dados da tecnologia selecionada
   */
  const handleSkillClick = (e, tech) => {
    e.stopPropagation();
    
    const rect = e.currentTarget.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    
    // Calcular posição do popup relativa à viewport
    let left = rect.left;
    const top = rect.bottom + 10;
    
    // Verificar se o popup vai sair da tela pela direita
    const popupWidth = 300;
    if (left + popupWidth > windowWidth) {
      left = windowWidth - popupWidth - 20;
    }
    
    if (activePopup && activePopup.name === tech.name) {
      setActivePopup(null);
    } else {
      setPopupPosition({ top, left });
      setActivePopup(tech);
      // Reset para a primeira aba ao abrir novo popup
      setActiveTab('projects');
    }
  };

  /**
   * Retorna os itens de tecnologia para a página atual
   * Mantém a ordenação por frequência de uso (maior para menor)
   * @returns {Array} Lista de tecnologias para a página atual
   */
  const getCurrentPageItems = () => {
    // techItems já está ordenado por count do maior para o menor
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return techItems.slice(startIndex, endIndex);
  };

  const animatePageChange = (direction, newPage) => {
    setSlideDirection(direction);
    setIsChanging(true);
    
    setTimeout(() => {
      setCurrentPage(newPage);
      
      // Reset animation after content change
      setTimeout(() => {
        setIsChanging(false);
        setSlideDirection(null);
      }, 50);
    }, 300);
  };

  // Navigation functions
  const prevPage = () => {
    if (currentPage > 1) {
      animatePageChange('right', currentPage - 1);
      setActivePopup(null);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      animatePageChange('left', currentPage + 1);
      setActivePopup(null);
    }
  };

  const handlePageDotClick = (pageNumber) => {
    if (pageNumber !== currentPage) {
      const direction = pageNumber > currentPage ? 'left' : 'right';
      animatePageChange(direction, pageNumber);
      setActivePopup(null);
    }
  };

  /**
   * Manipula o clique em um item de projeto ou experiência no popup
   */
  const handleItemClick = (e, itemType, itemId) => {
    e.stopPropagation();
    setActivePopup(null);
    
    if (itemType === 'experience') {
      navigateToExperience(itemId);
    } else if (itemType === 'project') {
      navigateToProject(itemId);
    }
  };

  /**
   * Alterna entre abas no popup
   * @param {string} tab - Nome da aba ('projects' ou 'experiences')
   */
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (isLoading) {
    return (
      <SkillsContainer id="skills">
        <ContentWrapper>
          <SkillsTitle>Habilidades</SkillsTitle>
          <p>Carregando...</p>
        </ContentWrapper>
      </SkillsContainer>
    );
  }

  return (
    <SkillsContainer id="skills">
      <ContentWrapper>
        <SkillsTitle>Habilidades</SkillsTitle>
        
        <SkillsGridContainer>
          {/* Container de paginação envolve o grid */}
          <PaginationContainer>
            <PrevArrow 
              onClick={prevPage} 
              disabled={currentPage === 1}
              aria-label="Página anterior"
            >
              <FaChevronLeft />
            </PrevArrow>
            
            <NextArrow 
              onClick={nextPage} 
              disabled={currentPage === totalPages || totalPages === 0}
              aria-label="Próxima página"
            >
              <FaChevronRight />
            </NextArrow>
          </PaginationContainer>
          
          {/* Grid de habilidades */}
          <SkillsGrid 
            $isChanging={isChanging}
            $slideDirection={slideDirection}
          >
            {getCurrentPageItems().map((tech) => (
              <SkillCard 
                key={tech.name}
                ref={el => cardRefs.current[tech.name] = el}
                onClick={(e) => handleSkillClick(e, tech)}
                role="button"
                tabIndex={0}
                $highlighted={tech.name === highlightedTech}
              >
                <SkillIcon color={tech.color}>
                  {tech.icon && <tech.icon />}
                </SkillIcon>
                <SkillInfo>
                  <SkillName>{tech.name}</SkillName>
                  <SkillProjects color={tech.color}>
                    {tech.count} {tech.count === 1 ? "Projeto" : "Projetos"}
                  </SkillProjects>
                </SkillInfo>
              </SkillCard>
            ))}
          </SkillsGrid>
          
          {/* Indicadores de página */}
          {totalPages > 1 && (
            <PaginationIndicator>
              {Array.from({ length: totalPages }).map((_, index) => (
                <PageDot 
                  key={index} 
                  $active={currentPage === index + 1} 
                  onClick={() => handlePageDotClick(index + 1)}
                />
              ))}
            </PaginationIndicator>
          )}
        </SkillsGridContainer>
      </ContentWrapper>
      
      {/* Tech Popup com abas */}
      {activePopup && (
        <TechPopup 
          ref={popupRef}
          style={{ 
            top: `${popupPosition.top}px`, 
            left: `${popupPosition.left}px`,
            position: 'fixed',
            zIndex: 9999
          }}
        >
          <TechPopupHeader>
            <TechPopupTitle>Tecnologia: {activePopup.name}</TechPopupTitle>
            <TechPopupClose onClick={() => setActivePopup(null)}>×</TechPopupClose>
          </TechPopupHeader>
          
          {/* Sistema de abas */}
          <TabsContainer>
            <Tab 
              $active={activeTab === 'projects'} 
              onClick={() => handleTabChange('projects')}
            >
              Projetos
            </Tab>
            <Tab 
              $active={activeTab === 'experiences'} 
              onClick={() => handleTabChange('experiences')}
            >
              Experiências
            </Tab>
          </TabsContainer>
          
          {/* Conteúdo da aba projetos */}
          {activeTab === 'projects' && (
            <TechPopupSection $scrollable={activePopup.projects.length > 3}>
              <TechPopupSectionTitle>Projetos:</TechPopupSectionTitle>
              {activePopup.projects.length > 0 ? (
                activePopup.projects.map(project => (
                  <TechPopupItem 
                    key={project.id}
                    onClick={(e) => handleItemClick(e, 'project', project.id)}
                    className="clickable-item"
                    style={{ cursor: 'pointer' }}
                  >
                    {project.title}
                  </TechPopupItem>
                ))
              ) : (
                <TechPopupNoItems>Nenhum projeto encontrado</TechPopupNoItems>
              )}
            </TechPopupSection>
          )}
          
          {/* Conteúdo da aba experiências */}
          {activeTab === 'experiences' && (
            <TechPopupSection $scrollable={activePopup.experiences.length > 3}>
              <TechPopupSectionTitle>Experiências:</TechPopupSectionTitle>
              {activePopup.experiences.length > 0 ? (
                activePopup.experiences.map(exp => (
                  <TechPopupItem 
                    key={exp.id} 
                    onClick={(e) => handleItemClick(e, 'experience', exp.id)}
                    className="clickable-item"
                    style={{ cursor: 'pointer' }}
                  >
                    {exp.company} - {exp.role}
                  </TechPopupItem>
                ))
              ) : (
                <TechPopupNoItems>Nenhuma experiência encontrada</TechPopupNoItems>
              )}
            </TechPopupSection>
          )}
        </TechPopup>
      )}
    </SkillsContainer>
  );
};

export default Skills;