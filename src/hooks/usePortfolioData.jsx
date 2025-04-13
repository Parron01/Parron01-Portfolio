/**
 * Provedor de contexto e hook personalizado para gerenciar dados do portfólio
 * Fornece acesso aos projetos, experiências e estatísticas de tecnologias utilizadas
 */
import React, { createContext, useContext, useState, useEffect } from "react";
import { projectsData, experiencesData, techIconMap } from "../data/portfolioData";

// Criação do contexto para armazenar e compartilhar os dados do portfólio
const PortfolioContext = createContext({});

/**
 * Componente provedor que fornece dados do portfólio para a árvore de componentes
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Componentes filhos
 * @returns {React.ReactElement} Provedor de contexto com os dados do portfólio
 */
export function PortfolioProvider({ children }) {
  // Estados para armazenar dados
  const [projects, setProjects] = useState(projectsData);
  const [experiences, setExperiences] = useState(experiencesData);
  const [techCounts, setTechCounts] = useState({});
  const [techItems, setTechItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Novo estado para rastrear a tecnologia destacada
  const [highlightedTech, setHighlightedTech] = useState(null);

  // Calcular estatísticas de tecnologias quando o componente montar
  useEffect(() => {
    calculateTechStats();
  }, []);

  /**
   * Calcula estatísticas de uso de tecnologias nos projetos e experiências
   * Ordena as tecnologias da mais usada para a menos usada
   */
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

      // Processar experiências
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

      // Ordenar por contagem (do maior para o menor)
      const sortedItems = items.sort((a, b) => b.count - a.count);

      setTechCounts(counts);
      setTechItems(sortedItems);
    } catch (error) {
      console.error("Erro ao calcular estatísticas de tecnologias:", error);
    } finally {
      setIsLoading(false);
    }
  }

  // ... resto do código permanece igual
  
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

  /**
   * Encontra a página em que uma tecnologia específica aparece
   * @param {string} techName - Nome da tecnologia a ser encontrada
   * @returns {number} Número da página (começando de 1) ou -1 se não encontrada
   */
  function findTechPage(techName) {
    if (!techName || !techItems.length) return -1;
    
    const techIndex = techItems.findIndex(tech => tech.name === techName);
    if (techIndex === -1) return -1;
    
    // Calcular a página com base no índice e itens por página (6)
    return Math.floor(techIndex / 6) + 1;
  }

  /**
   * Destaca uma tecnologia específica na seção de Skills
   * @param {string} techName - Nome da tecnologia a ser destacada
   */
  function highlightTechnology(techName) {
    setHighlightedTech(techName);
    
    // Reset highlight after animation completes
    setTimeout(() => {
      setHighlightedTech(null);
    }, 3000);
  }

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        experiences,
        techCounts,
        techItems,
        isLoading,
        highlightedTech,
        getProjectsByTechnology,
        getExperiencesByTechnology,
        addProject,
        addExperience,
        calculateTechStats,
        findTechPage,
        highlightTechnology
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

/**
 * Hook personalizado para usar o contexto de Portfolio
 * @returns {Object} O contexto com dados e funções do portfólio
 * @throws {Error} Se usado fora de um PortfolioProvider
 */
export function usePortfolioData() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("usePortfolioData must be used within a PortfolioProvider");
  }

  return context;
}