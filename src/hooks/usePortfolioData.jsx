import React, { createContext, useContext, useState, useEffect } from "react";
import { projectsData, experiencesData, techIconMap } from "../data/portfolioData";

// Criação do contexto para armazenar e compartilhar os dados do portfólio
const PortfolioContext = createContext({});

export function PortfolioProvider({ children }) {
  // Estados para armazenar dados
  const [projects, setProjects] = useState(projectsData);
  const [experiences, setExperiences] = useState(experiencesData);
  const [techCounts, setTechCounts] = useState({});
  const [techItems, setTechItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Calcular estatísticas de tecnologias quando o componente montar
  useEffect(() => {
    calculateTechStats();
  }, []);

  // Função para calcular estatísticas de tecnologias
  function calculateTechStats() {
    setIsLoading(true);
    try {
      // Objeto para armazenar contagem de tecnologias
      const counts = {};
      // Objeto para armazenar detalhes sobre cada tecnologia
      const techDetails = {};

      // Processar projetos
      projects.forEach(project => {
        project.technologies.forEach(tech => {
          if (!counts[tech]) {
            counts[tech] = 0;
            techDetails[tech] = { projects: [], experiences: [] };
          }
          counts[tech]++;
          techDetails[tech].projects.push(project);
        });
      });

      // Processar experiências (cada experiência conta como um projeto na contagem)
      experiences.forEach(exp => {
        exp.technologies.forEach(tech => {
          if (!counts[tech]) {
            counts[tech] = 0;
            techDetails[tech] = { projects: [], experiences: [] };
          }
          // Incrementa a contagem (experiência também é considerada como projeto)
          counts[tech]++;
          techDetails[tech].experiences.push(exp);
        });
      });

      // Criar array de itens de tecnologia para exibição
      const items = Object.keys(counts).map(tech => {
        const icon = techIconMap[tech]?.icon || null;
        const color = techIconMap[tech]?.color || "#333";
        return {
          name: tech,
          icon,
          color,
          count: counts[tech],
          projects: techDetails[tech].projects,
          experiences: techDetails[tech].experiences
        };
      });

      setTechCounts(counts);
      setTechItems(items);
    } catch (error) {
      console.error("Erro ao calcular estatísticas de tecnologias:", error);
    } finally {
      setIsLoading(false);
    }
  }

  // Restante do código permanece igual...
  function getProjectsByTechnology(technology) {
    return projects.filter(project => 
      project.technologies.includes(technology)
    );
  }

  function getExperiencesByTechnology(technology) {
    return experiences.filter(exp => 
      exp.technologies.includes(technology)
    );
  }

  function addProject(newProject) {
    setProjects(prev => [...prev, { ...newProject, id: Date.now() }]);
    calculateTechStats();
  }

  function addExperience(newExperience) {
    setExperiences(prev => [...prev, { ...newExperience, id: Date.now() }]);
    calculateTechStats();
  }

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        experiences,
        techCounts,
        techItems,
        isLoading,
        getProjectsByTechnology,
        getExperiencesByTechnology,
        addProject,
        addExperience,
        calculateTechStats
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

// Hook personalizado para usar o contexto de Portfolio
export function usePortfolioData() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("usePortfolioData must be used within a PortfolioProvider");
  }

  return context;
}