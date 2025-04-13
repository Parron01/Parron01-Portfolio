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

const Projects = () => {
  const PROJECTS_PER_PAGE = 2; // Número de projetos por página
  
  const [activeTooltip, setActiveTooltip] = useState({ projectId: null, techIndex: null });
  const [showIndicator, setShowIndicator] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Estados para paginação
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanging, setIsChanging] = useState(false);
  const [slideDirection, setSlideDirection] = useState(null);
  
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
    }, 10000);

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
    // Só redireciona se for o projeto da Plataforma de Pagamento
    if (link && link.includes('simpleapp.parron01.com')) {
      window.open(link, "_blank");
    }
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
            <ProjectCard 
              key={project.id}
              $reverse={index % 2 !== 0}
              $index={index}
              onClick={() => handleCardClick(project.link)}
              $isClickable={project.link.includes('simpleapp.parron01.com')}
            >
              {showIndicator && isMobile && (
                <CardTouchIndicator aria-hidden="true">
                  <FaHandPointer />
                  <TapText>Clique para acessar projeto</TapText>
                </CardTouchIndicator>
              )}
              
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
                  Acesse o repositório
                </ProjectLink>
              </ProjectContent>
            </ProjectCard>
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
