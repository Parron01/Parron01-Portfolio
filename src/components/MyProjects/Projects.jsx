import React, { useState, useEffect } from "react";
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
} from "./Projects.styles";

import { FaHandPointer } from "react-icons/fa";
import { projectsData, techIconMap } from "../../data/portfolioData";

const Projects = () => {
  const [activeTooltip, setActiveTooltip] = useState({ projectId: null, techIndex: null });
  const [showIndicator, setShowIndicator] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const isMobile = windowWidth <= 1100;

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Meus Projetos</ProjectsTitle>
      <ProjectGrid>
        {projectsData.map((project, index) => (
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
    </ProjectsContainer>
  );
};

export default Projects;
