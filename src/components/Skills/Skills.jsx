import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaLaptopCode, FaServer, FaDatabase, FaCogs, FaFilter } from "react-icons/fa";
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
  PageDot,
  // Novos componentes para filtro de categorias
  FilterContainer,
  FilterButton,
  FilterIcon,
  CategoryBadge
} from "./Skills.styles";

import { usePortfolioData } from "../../hooks/usePortfolioData.jsx";
import { techCategories, techIconMap } from "../../data/portfolioData.js";

const ITEMS_PER_PAGE = 6;

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
  const [activeTab, setActiveTab] = useState('projects');
  // Estado para filtro de categoria
  const [activeCategory, setActiveCategory] = useState("all");
  
  const popupRef = useRef(null);
  const cardRefs = useRef({});

  // Filtra as tecnologias por categoria
  const filteredTechItems = techItems.filter(tech => {
    if (activeCategory === "all") return true;
    return tech.name in techIconMap && 
      techIconMap[tech.name].category?.toLowerCase() === activeCategory.toLowerCase();
  });

  // Calcular o número total de páginas após filtro
  const totalPages = Math.ceil(filteredTechItems.length / ITEMS_PER_PAGE);

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
    if (highlightedTech && filteredTechItems.length > 0) {
      // Verificar se a tecnologia está no filtro atual
      const techExists = filteredTechItems.some(tech => tech.name === highlightedTech);
      
      if (techExists) {
        // Encontrar a página onde a tecnologia está
        const techIndex = filteredTechItems.findIndex(tech => tech.name === highlightedTech);
        if (techIndex >= 0) {
          const techPage = Math.floor(techIndex / ITEMS_PER_PAGE) + 1;
          
          // Se a tecnologia foi encontrada e está em uma página diferente
          if (techPage !== currentPage) {
            // Navegar para a página correta
            const direction = techPage > currentPage ? 'left' : 'right';
            animatePageChange(direction, techPage);
          }
        }
      } else {
        // Se a tecnologia não está no filtro atual, mudar para 'all'
        setActiveCategory("all");
        // Resetar página para 1 com animação
        if (currentPage !== 1) {
          animatePageChange('right', 1);
        }
      }
    }
  }, [highlightedTech, filteredTechItems, activeCategory]);

  // Reset para página 1 quando o filtro mudar
  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [activeCategory]);

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

  // Obter ícone para categoria
  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case "frontend": return <FaLaptopCode />;
      case "backend": return <FaServer />;
      case "database": return <FaDatabase />;
      case "devops": return <FaCogs />;
      default: return <FaFilter />;
    }
  };

  /**
   * Retorna os itens de tecnologia filtrados para a página atual
   * @returns {Array} Lista de tecnologias para a página atual
   */
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredTechItems.slice(startIndex, endIndex);
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

  const handleCategoryChange = (category) => {
    if (activeCategory !== category) {
      setActivePopup(null);
      setActiveCategory(category);
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
        
        {/* Filtros de categoria */}
        <FilterContainer>
          {techCategories.map(category => (
            <FilterButton 
              key={category.id}
              $active={activeCategory === category.id}
              onClick={() => handleCategoryChange(category.id)}
            >
              <FilterIcon>{getCategoryIcon(category.id)}</FilterIcon>
              {category.name}
            </FilterButton>
          ))}
        </FilterContainer>
        
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
                {tech.name in techIconMap && (
                  <CategoryBadge $category={techIconMap[tech.name].category}>
                    {techIconMap[tech.name].category}
                  </CategoryBadge>
                )}
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
            
            {/* Mensagem se não houver tecnologias no filtro atual */}
            {filteredTechItems.length === 0 && (
              <div style={{ 
                gridColumn: '1 / -1', 
                textAlign: 'center',
                padding: '2rem',
                color: '#666'
              }}>
                Nenhuma tecnologia encontrada nesta categoria.
              </div>
            )}
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