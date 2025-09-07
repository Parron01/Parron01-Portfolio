import { FaJava, FaReact, FaPython, FaNodeJs, FaDatabase, FaGit, 
  FaGithub, FaDocker, FaCode, FaJs, FaWindowMaximize, FaLeaf, FaServer } from "react-icons/fa";
import { SiSpringboot, SiVuedotjs, SiTailwindcss, SiGo, SiNginx, SiTypescript, SiAngular } from "react-icons/si";
import { AiFillCiCircle } from "react-icons/ai";
import projeto1Image from "/src/assets/projeto1.png";
import projeto2Image from "/src/assets/projeto2.png";
import projeto3Image from "/src/assets/projeto3.png";
import portfolioImage from "/src/assets/projeto4.png";

// Map de tecnologias com seus respectivos ícones e cores
export const techIconMap = {
  "Java": { icon: FaJava, color: "#F89820", category: "Backend" },
  "React": { icon: FaReact, color: "#61DAFB", category: "Frontend" },
  "PostgreSQL": { icon: FaDatabase, color: "#336791", category: "Database" },
  "Git": { icon: FaGit, color: "#F05032", category: "DevOps" },
  "GitHub": { icon: FaGithub, color: "#181717", category: "DevOps" },
  "Docker": { icon: FaDocker, color: "#2496ED", category: "DevOps" },
  "DockerHub": { icon: FaDocker, color: "#0DB7ED", category: "DevOps" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F", category: "Backend" },
  "Python": { icon: FaPython, color: "#FFD43B", category: "Backend" },
  "Node.js": { icon: FaNodeJs, color: "#68A063", category: "Backend" },
  "Banco de Dados": { icon: FaDatabase, color: "#4DB33D", category: "Database" },
  "JavaScript": { icon: FaJs, color: "#F7DF1E", category: "Frontend" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  "C#": { icon: FaCode, color: "#239120", category: "Backend" },
  ".NET": { icon: FaWindowMaximize, color: "#512BD4", category: "Backend" },
  "ASP.NET MVC": { icon: FaCode, color: "#0090F1", category: "Backend" },
  "Vue.js": { icon: SiVuedotjs, color: "#4FC08D", category: "Frontend" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38B2AC", category: "Frontend" },
  "Go": { icon: SiGo, color: "#00ADD8", category: "Backend" },
  "CI/CD": { icon: AiFillCiCircle, color: "#FF6347", category: "DevOps" },
  "VPS": { icon: FaServer, color: "#6B8E23", category: "DevOps" },
  "Nginx": { icon: SiNginx, color: "#009639", category: "DevOps" },
  "Kotlin": { icon: FaCode, color: "#7F52FF", category: "Backend" },
  "Angular": { icon: SiAngular, color: "#DD0031", category: "Frontend" },
};

// Define categories for filtering
export const techCategories = [
  { id: "all", name: "Todas" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Banco de Dados" },
  { id: "devops", name: "DevOps" }
];

// Dados dos projetos
export const projectsData = [
  {
    id: 1,
    title: "Estoque de Produtos",
    description:
      "Sistema para gerenciamento de estoque com controle de produtos, lotes, data de validade, exportação para Excel e histórico de alterações.",
    image: projeto3Image,
    link: "https://estoque.parron01.com",
    githubLink: "https://github.com/Parron01/GerenciadorEstoque",
    technologies: ["Go", "Vue.js", "PostgreSQL", "GitHub", "Docker", "DockerHub", "Tailwind CSS", "TypeScript"]
  },
  {
    id: 2,
    title: "Consulta de Contratos Públicos",
    description:
      "Aplicação web para consulta de contratos públicos via API do PNCP, com backend em Java e frontend em React. Para mais detalhes, acesse o repositório no GitHub.",
    image: projeto1Image,
    link: "https://nuti.parron01.com",
    githubLink: "https://github.com/Parron01/TestePraticoNUTI",
    technologies: ["Java", "React", "PostgreSQL", "GitHub", "Docker", "DockerHub", "Spring Boot", "JavaScript"]
  },
  {
    id: 3,
    title: "Plataforma de Pagamento",
    description:
      "Sistema de pagamentos inspirado em teste prático do PicPay, com autenticação JWT e controle de transações. Mais informações disponíveis no repositório do GitHub.",
    image: projeto2Image,
    link: "https://simpleapp.parron01.com/login",
    githubLink: "https://github.com/Parron01/SimpleAppFullStack-TestePratico",
    technologies: ["Java", "React", "PostgreSQL", "GitHub", "Docker", "DockerHub", "Spring Boot", "TypeScript"]
  },
  {
    id: 4,
    title: "Esse Portfólio",
    description:
      "Projeto desenvolvido em React para centralizar todos os meus projetos, experiências, currículo e informações profissionais. Durante sua construção, obtive experiência com deploy em VPS, configuração de estrutura Docker, Nginx, GitHub Actions e todo o fluxo de CI/CD necessário para deploy automatizado.",
    image: portfolioImage,
    link: "",
    githubLink: "",
    technologies: ["React", "JavaScript", "Docker", "DockerHub", "CI/CD", "VPS", "Nginx", "GitHub"]
  }
  
];

// Dados das experiências
export const experiencesData = [
  {
    id: 1,
    company: "InfoCorp",
    date: "Agosto 2022 - Janeiro 2024",
    role: "Back End Developer",
    description:
      "Na empresa junior da UFMT, do bloco do Instituto de Computação, eu atuei como desenvolvedor Back End em Java com Spring Boot, PostgreSQL e GitHub.",
    color: "#4169E1",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "GitHub"]
  },
  {
    id: 2,
    company: "Grupo Optimus",
    date: "Julho 2024 - Setembro 2024",
    role: "Estagiário Full Stack",
    description:
      "Atuei como desenvolvedor Full Stack com Java e Spring Boot com PostgreSQL e React com JavaScript, MUI.",
    color: "#4169E1",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "JavaScript","Python"]
  },
  {
    id: 3,
    company: "NUTI - IC",
    date: "Outubro 2024",
    role: "Estagiário Full Stack",
    description:
      "Atuei como desenvolvedor Full Stack com C# na plataforma .NET com front-end integrado em estrutura ASP.NET MVC.",
    color: "#4169E1",
    technologies: ["C#", ".NET", "ASP.NET MVC","GitHub", "JavaScript"]
  },
  {
    id: 4,
    company: "Goat Ibex",
    date: "Julho 2025 - Atual",
    role: "Desenvolvedor Júnior Full-Stack",
    description:
      "Área de BPO financeiro. • Criação de novas interfaces/funcionalidades do Banco de Dados ao FrontEnd • Resolução de bugs e aprimoramento do sistema. ",
    color: "#4169E1",
    technologies: ["Kotlin", "Angular", "PostgreSQL"]
  },

    /*ADICIONAR NOVAS EXPERIENCIAS ABAIXO, SEGUINDO A NUMERAÇÃO DOS IDS PARA CORRETA ORDENAÇÃO */
];