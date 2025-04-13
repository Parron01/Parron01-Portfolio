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
  // Novos estados para rastrear itens destacados
  const [highlightedExperience, setHighlightedExperience] = useState(null);
  const [highlightedProject, setHighlightedProject] = useState(null);
  // Estado para controlar a expansão de experiências antigas
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  // Estado para rastrear a página atual de projetos
  const [targetProjectPage, setTargetProjectPage] = useState(null);

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

  /**
   * Destaca uma experiência específica na seção de Experience
   * @param {number} expId - ID da experiência a ser destacada
   */
  function highlightExperience(expId) {
    setHighlightedExperience(expId);
    
    // Reset highlight after animation completes
    setTimeout(() => {
      setHighlightedExperience(null);
    }, 3000);
  }

  /**
   * Destaca um projeto específico na seção de Projects
   * @param {number} projectId - ID do projeto a ser destacado
   */
  function highlightProject(projectId) {
    setHighlightedProject(projectId);
    
    // Reset highlight after animation completes
    setTimeout(() => {
      setHighlightedProject(null);
    }, 3000);
  }

  /**
   * Encontra a página onde um projeto específico está localizado
   * @param {number} projectId - ID do projeto
   * @returns {number} Número da página (começando em 1) ou -1 se não encontrado
   */
  function findProjectPage(projectId) {
    if (!projectId || !projects.length) return -1;
    
    const projectIndex = projects.findIndex(project => project.id === projectId);
    if (projectIndex === -1) return -1;
    
    // Calcular a página com base no índice e itens por página (2)
    return Math.floor(projectIndex / 2) + 1;
  }

  /**
   * Verifica se uma experiência está nas experiências visíveis (últimas 3)
   * @param {number} expId - ID da experiência
   * @returns {boolean} - True se está entre as experiências visíveis
   */
  function isExperienceVisible(expId) {
    if (showAllExperiences) return true;
    
    const exp = experiences.find(exp => exp.id === expId);
    if (!exp) return false;
    
    // Verifica se está entre as 3 últimas experiências
    const visibleExps = experiences.slice(-3);
    return visibleExps.some(e => e.id === expId);
  }

  /**
   * Navega para uma experiência específica
   * @param {number} expId - ID da experiência
   */
  function navigateToExperience(expId) {
    // Expande as experiências se necessário
    if (!isExperienceVisible(expId)) {
      setShowAllExperiences(true);
    }
    
    // Dá tempo para a renderização e depois faz scroll
    setTimeout(() => {
      const experienceSection = document.getElementById("experience");
      if (experienceSection) {
        experienceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Destaca a experiência após o scroll
        highlightExperience(expId);
      }
    }, 100);
  }

  /**
   * Navega para um projeto específico
   * @param {number} projectId - ID do projeto
   */
  function navigateToProject(projectId) {
    const projectPage = findProjectPage(projectId);
    if (projectPage > 0) {
      setTargetProjectPage(projectPage);
      
      // Dá tempo para a renderização e depois faz scroll
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Destaca o projeto após o scroll
          highlightProject(projectId);
        }
      }, 100);
    }
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
        highlightedExperience,
        highlightedProject,
        getProjectsByTechnology,
        getExperiencesByTechnology,
        addProject,
        addExperience,
        calculateTechStats,
        findTechPage,
        highlightTechnology,
        highlightExperience,
        highlightProject,
        showAllExperiences,
        setShowAllExperiences,
        targetProjectPage,
        setTargetProjectPage,
        findProjectPage,
        isExperienceVisible,
        navigateToExperience,
        navigateToProject
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