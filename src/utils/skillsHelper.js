/**
 * Calcula a frequência de uso de cada tecnologia nos projetos e experiências
 * @param {Array} projectsData - Array com os dados dos projetos
 * @param {Array} experiencesData - Array com os dados das experiências
 * @param {Object} techIconMap - Mapeamento de tecnologias para ícones e cores
 * @returns {Array} - Array de tecnologias ordenado por frequência
 */
export const calculateTechFrequency = (projectsData, experiencesData, techIconMap) => {
  // Objeto para contar ocorrências de cada tecnologia
  const techCount = {};
  
  // Objetos para rastrear projetos e experiências que usam cada tecnologia
  const techProjects = {};
  const techExperiences = {};
  
  // Inicializar arrays para cada tech
  Object.keys(techIconMap).forEach(tech => {
    techProjects[tech] = [];
    techExperiences[tech] = [];
  });
  
  // Contar tecnologias nos projetos
  projectsData.forEach(project => {
    project.technologies.forEach(tech => {
      // Incrementar contador
      techCount[tech] = (techCount[tech] || 0) + 1;
      
      // Adicionar projeto à lista desta tecnologia
      if (!techProjects[tech]) techProjects[tech] = [];
      techProjects[tech].push(project);
    });
  });
  
  // Contar tecnologias nas experiências
  experiencesData.forEach(exp => {
    exp.technologies.forEach(tech => {
      // Incrementar contador
      techCount[tech] = (techCount[tech] || 0) + 1;
      
      // Adicionar experiência à lista desta tecnologia
      if (!techExperiences[tech]) techExperiences[tech] = [];
      techExperiences[tech].push(exp);
    });
  });
  
  // Converter para array e ordenar por frequência (do maior para o menor)
  return Object.keys(techCount)
    .map(name => ({
      name,
      count: techCount[name],
      projects: techProjects[name] || [],
      experiences: techExperiences[name] || [],
      icon: techIconMap[name]?.icon,
      color: techIconMap[name]?.color
    }))
    .sort((a, b) => b.count - a.count);
};
