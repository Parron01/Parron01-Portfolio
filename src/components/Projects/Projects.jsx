import React, { useState } from "react";
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
} from "./Projects.styles";

import { FaJava, FaReact, FaDatabase, FaGithub, FaGit, FaDocker } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

// Dados dos projetos (facilitando expansão futura)
const projectsData = [
  {
    id: 1,
    title: "Consulta de Contratos Públicos",
    description:
      "Aplicação web para consulta de contratos públicos via API do PNCP, com backend em Java e frontend em React. Para mais detalhes, acesse o repositório no GitHub.",
    image: "/src/assets/projeto1.png",
    link: "https://github.com/Parron01/TestePraticoNUTI",
    techs: [
      { name: "Java", icon: <FaJava />, color: "#F89820" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "PostgreSQL", icon: <FaDatabase />, color: "#336791" },
      { name: "Git", icon: <FaGit />, color: "#F05032" },
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
    ],
  },
  {
    id: 2,
    title: "Plataforma de Pagamento",
    description:
      "Sistema de pagamentos inspirado no PicPay, com autenticação JWT e controle de transações. Mais informações disponíveis no repositório do GitHub.",
    image: "/src/assets/projeto2.png",
    link: "https://github.com/Parron01/SimpleAppFullStack-TestePratico",
    techs: [
      { name: "Java", icon: <FaJava />, color: "#F89820" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "PostgreSQL", icon: <FaDatabase />, color: "#336791" },
      { name: "Git", icon: <FaGit />, color: "#F05032" },
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
    ],
  },
];

const Projects = () => {
  const [activeTooltip, setActiveTooltip] = useState({ projectId: null, techIndex: null });

  const handleTechClick = (projectId, techIndex) => {
    if (activeTooltip.projectId === projectId && activeTooltip.techIndex === techIndex) {
      setActiveTooltip({ projectId: null, techIndex: null }); // Close tooltip if clicking the same tech
    } else {
      setActiveTooltip({ projectId, techIndex }); // Open tooltip for this tech
    }
  };

  return (
    <ProjectsContainer>
      <ProjectsTitle>Meus Projetos</ProjectsTitle>
      <ProjectGrid>
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.id}
            reverse={index % 2 !== 0}
            index={index}
          >
            <ProjectImage src={project.image} alt={project.title} reverse={index % 2 !== 0} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.techs.map((tech, techIndex) => (
                  <TechItem 
                    key={techIndex} 
                    color={tech.color} 
                    title={tech.name}
                    onClick={() => handleTechClick(project.id, techIndex)}
                  >
                    {tech.icon}
                    <Tooltip visible={activeTooltip.projectId === project.id && activeTooltip.techIndex === techIndex}>
                      {tech.name}
                    </Tooltip>
                  </TechItem>
                ))}
              </TechStack>
              <ProjectLink href={project.link} target="_blank">
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
