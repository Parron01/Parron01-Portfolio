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

import { FaJava, FaReact, FaDatabase, FaGithub, FaDocker, FaHandPointer } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import projeto1Image from "/src/assets/projeto1.png";
import projeto2Image from "/src/assets/projeto2.png";

// Dados dos projetos (facilitando expansão futura)
const projectsData = [
  {
    id: 1,
    title: "Consulta de Contratos Públicos",
    description:
      "Aplicação web para consulta de contratos públicos via API do PNCP, com backend em Java e frontend em React. Para mais detalhes, acesse o repositório no GitHub.",
    image: projeto1Image,
    link: "https://github.com/Parron01/TestePraticoNUTI",
    techs: [
      { name: "Java", icon: <FaJava />, color: "#F89820" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "PostgreSQL", icon: <FaDatabase />, color: "#336791" },
      { name: "Git", icon: <FaGithub />, color: "#000000" },
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
    ],
  },
  {
    id: 2,
    title: "Plataforma de Pagamento",
    description:
      "Sistema de pagamentos inspirado no PicPay, com autenticação JWT e controle de transações. Mais informações disponíveis no repositório do GitHub.",
    image: projeto2Image,
    link: "https://github.com/Parron01/SimpleAppFullStack-TestePratico",
    techs: [
      { name: "Java", icon: <FaJava />, color: "#F89820" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "PostgreSQL", icon: <FaDatabase />, color: "#336791" },
      { name: "Git", icon: <FaGithub />, color: "#000000" },
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
    ],
  },
];

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
    window.open(link, "_blank");
  };

  const isMobile = windowWidth <= 1100;

  return (
    <ProjectsContainer>
      <ProjectsTitle>Meus Projetos</ProjectsTitle>
      <ProjectGrid>
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.id}
            $reverse={index % 2 !== 0}
            $index={index}
            onClick={() => handleCardClick(project.link)}
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
                {project.techs.map((tech, techIndex) => (
                  <TechItem 
                    key={techIndex} 
                    color={tech.color} 
                    title={tech.name}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      handleTechClick(project.id, techIndex);
                    }}
                  >
                    {tech.icon}
                    <Tooltip $visible={activeTooltip.projectId === project.id && activeTooltip.techIndex === techIndex}>
                      {tech.name}
                    </Tooltip>
                  </TechItem>
                ))}
              </TechStack>
              <ProjectLink 
                href={project.link} 
                target="_blank"
                onClick={(e) => e.stopPropagation()} // Prevent double navigation
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
