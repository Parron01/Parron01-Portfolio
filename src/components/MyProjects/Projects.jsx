import React, { useState, useEffect } from "react";
import { FaHandPointer, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectGrid,
  ProjectCard,
  ProjectContent,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechItem,
  ProjectLink,
  GitHubIcon,
  Tooltip,
  CardTouchIndicator,
  TapText,
  // Componentes de paginação
  ProjectsGridContainer,
  PaginationContainer,
  PrevArrow,
  NextArrow,
  PaginationIndicator,
  PageDot
} from "./Projects.styles";

import { projectsData, techIconMap } from "../../data/portfolioData";
import { usePortfolioData } from "../../hooks/usePortfolioData.jsx"; // Adicionando a importação do hook

const Projects = () => {
  const PROJECTS_PER_PAGE = 2; // Número de projetos por página
  
  const [activeTooltip, setActiveTooltip] = useState({ projectId: null, techIndex: null });
  const [showIndicator, setShowIndicator] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Estados para paginação
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanging, setIsChanging] = useState(false);
  const [slideDirection, setSlideDirection] = useState(null);
  
  // Importar estado de página-alvo e projeto destacado do contexto
  const { targetProjectPage, setTargetProjectPage, highlightedProject } = usePortfolioData();
  
  // Calcular número total de páginas
  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE);

  useEffect(() => {
    // Track window resize for responsive behavior
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show indicator initially and then hide after 2 seconds
  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setShowIndicator(false);
    }, 2000);

    // Set up interval to show indicator again every 10 seconds
    const indicatorInterval = setInterval(() => {
      setShowIndicator(true);
      setTimeout(() => {
        setShowIndicator(false);
      }, 2000);
    }, 7000);

    // Clean up timeouts/intervals on unmount
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(indicatorInterval);
    };
  }, []);

  const handleTechClick = (projectId, techIndex) => {
    if (activeTooltip.projectId === projectId && activeTooltip.techIndex === techIndex) {
      setActiveTooltip({ projectId: null, techIndex: null });
    } else {
      setActiveTooltip({ projectId, techIndex });
    }
  };

  const handleCardClick = (link) => {
    // Redirecionamento para qualquer projeto que tenha um link válido
    if (link && link.trim() !== '') {
      window.open(link, "_blank");
    }
    // Não faz nada se o link não existir ou for vazio
  };

  // Funções de navegação entre páginas
  const animatePageChange = (direction, newPage) => {
    setSlideDirection(direction);
    setIsChanging(true);
    
    setTimeout(() => {
      setCurrentPage(newPage);
      
      // Reset da animação após a mudança de conteúdo
      setTimeout(() => {
        setIsChanging(false);
        setSlideDirection(null);
      }, 50);
    }, 300);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      animatePageChange('right', currentPage - 1);
      setActiveTooltip({ projectId: null, techIndex: null });
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      animatePageChange('left', currentPage + 1);
      setActiveTooltip({ projectId: null, techIndex: null });
    }
  };

  const handlePageDotClick = (pageNumber) => {
    if (pageNumber !== currentPage) {
      const direction = pageNumber > currentPage ? 'left' : 'right';
      animatePageChange(direction, pageNumber);
      setActiveTooltip({ projectId: null, techIndex: null });
    }
  };
  
  // Função para obter projetos da página atual
  const getCurrentPageProjects = () => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    return projectsData.slice(startIndex, endIndex);
  };

  const isMobile = windowWidth <= 1100;

  // Efeito para monitorar mudança na página-alvo (quando um projeto for selecionado)
  useEffect(() => {
    if (targetProjectPage && targetProjectPage !== currentPage) {
      const direction = targetProjectPage > currentPage ? 'left' : 'right';
      animatePageChange(direction, targetProjectPage);
      
      // Resetar o estado depois de navegar
      setTargetProjectPage(null);
    }
  }, [targetProjectPage]);

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Meus Projetos</ProjectsTitle>
      
      <ProjectsGridContainer>
        {/* Controles de paginação */}
        {totalPages > 1 && (
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
              disabled={currentPage === totalPages}
              aria-label="Próxima página"
            >
              <FaChevronRight />
            </NextArrow>
          </PaginationContainer>
        )}
        
        {/* Grid de projetos com animação de transição */}
        <ProjectGrid
          $isChanging={isChanging}
          $slideDirection={slideDirection}
        >
          {getCurrentPageProjects().map((project, index) => (
            <div key={project.id} style={{ position: 'relative' }}>
              {/* Indicador de toque como overlay, apenas se houver link */}
              {showIndicator && isMobile && project.link && project.link.trim() !== '' && (
                <CardTouchIndicator aria-hidden="true">
                  <FaHandPointer />
                  <TapText>Clique para acessar projeto</TapText>
                </CardTouchIndicator>
              )}
              
              <ProjectCard 
                $reverse={index % 2 !== 0}
                $index={index}
                onClick={() => handleCardClick(project.link)}
                $isClickable={project.link && project.link.trim() !== ''}
                $highlighted={project.id === highlightedProject}
              >
                <ProjectImage 
                  src={project.image} 
                  alt={project.title} 
                  $reverse={index % 2 !== 0} 
                />
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.technologies.map((techName, techIndex) => {
                      const tech = techIconMap[techName];
                      const Icon = tech.icon;
                      return (
                        <TechItem 
                          key={techIndex} 
                          color={tech.color} 
                          title={techName}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTechClick(project.id, techIndex);
                          }}
                        >
                          <Icon />
                          <Tooltip $visible={activeTooltip.projectId === project.id && activeTooltip.techIndex === techIndex}>
                            {techName}
                          </Tooltip>
                        </TechItem>
                      );
                    })}
                  </TechStack>
                  {/* Renderiza o botão do GitHub apenas se houver um link */}
                  {(project.githubLink || project.link) && (
                    <ProjectLink 
                      href={project.githubLink || project.link} 
                      target="_blank"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(project.githubLink || project.link, "_blank");
                      }}
                    >
                      <GitHubIcon />
                      Acesse o {project.githubLink ? "repositório" : "projeto"}
                    </ProjectLink>
                  )}
                </ProjectContent>
              </ProjectCard>
            </div>
          ))}
        </ProjectGrid>
        
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
      </ProjectsGridContainer>
    </ProjectsContainer>
  );
};

export default Projects;
