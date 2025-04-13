import { FaJava, FaReact, FaPython, FaNodeJs, FaDatabase, FaGit, 
  FaGithub, FaDocker, FaCode, FaJs, FaWindowMaximize, FaLeaf } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import projeto1Image from "/src/assets/projeto1.png";
import projeto2Image from "/src/assets/projeto2.png";

// Map de tecnologias com seus respectivos ícones e cores
export const techIconMap = {
  "Java": { icon: FaJava, color: "#F89820" },
  "React": { icon: FaReact, color: "#61DAFB" },
  "PostgreSQL": { icon: FaDatabase, color: "#336791" },
  "Git": { icon: FaGit, color: "#F05032" },
  "GitHub": { icon: FaGithub, color: "#181717" },
  "Docker": { icon: FaDocker, color: "#2496ED" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  "Spring": { icon: FaLeaf, color: "#6DB33F" },
  "Python": { icon: FaPython, color: "#FFD43B" },
  "Node.js": { icon: FaNodeJs, color: "#68A063" },
  "Banco de Dados": { icon: FaDatabase, color: "#4DB33D" },
  "JavaScript": { icon: FaJs, color: "#F7DF1E" },
  "C#": { icon: FaCode, color: "#239120" },
  ".NET": { icon: FaWindowMaximize, color: "#512BD4" },
  "ASP.NET MVC": { icon: FaCode, color: "#0090F1" },
};

// Dados dos projetos
export const projectsData = [
  {
    id: 1,
    title: "Consulta de Contratos Públicos",
    description:
      "Aplicação web para consulta de contratos públicos via API do PNCP, com backend em Java e frontend em React. Para mais detalhes, acesse o repositório no GitHub.",
    image: projeto1Image,
    link: "https://github.com/Parron01/TestePraticoNUTI",
    githubLink: "https://github.com/Parron01/TestePraticoNUTI",
    technologies: ["Java", "React", "PostgreSQL", "GitHub", "Docker", "Spring Boot"]
  },
  {
    id: 2,
    title: "Plataforma de Pagamento",
    description:
      "Sistema de pagamentos inspirado em teste prático do PicPay, com autenticação JWT e controle de transações. Mais informações disponíveis no repositório do GitHub.",
    image: projeto2Image,
    link: "https://simpleapp.parron01.com/login",
    githubLink: "https://github.com/Parron01/SimpleAppFullStack-TestePratico",
    technologies: ["Java", "React", "PostgreSQL", "GitHub", "Docker", "Spring Boot"]
  },
  {
    id: 3,
    title: "Plataforma de Pagamento",
    description:
      "Sistema de pagamentos inspirado em teste prático do PicPay, com autenticação JWT e controle de transações. Mais informações disponíveis no repositório do GitHub.",
    image: projeto2Image,
    link: "https://simpleapp.parron01.com/login",
    githubLink: "https://github.com/Parron01/SimpleAppFullStack-TestePratico",
    technologies: ["Java", "React", "PostgreSQL", "GitHub", "Docker", "Spring Boot"]
  },
];

// Dados das experiências
export const experiencesData = [
  {
    id: 1,
    company: "Empresa Fictícia A",
    date: "Janeiro 2021 - Maio 2021",
    role: "Desenvolvedor Frontend Jr.",
    description:
      "Atuei como desenvolvedor frontend implementando interfaces responsivas com React e JavaScript.",
    color: "#4169E1",
    technologies: ["React", "JavaScript", "Git"]
  },
  {
    id: 2,
    company: "Empresa Fictícia B",
    date: "Junho 2021 - Dezembro 2021",
    role: "Desenvolvedor Backend Jr.",
    description:
      "Trabalhei no desenvolvimento de APIs RESTful com Java e Spring Boot, integrando com bancos de dados PostgreSQL.",
    color: "#4169E1",
    technologies: ["Java", "Spring", "PostgreSQL", "GitHub"]
  },
  {
    id: 3,
    company: "InfoCorp",
    date: "Agosto 2022 - Janeiro 2024",
    role: "Back End Developer",
    description:
      "Na empresa junior da UFMT, do bloco do Instituto de Computação, eu atuei como desenvolvedor Back End em Java com Spring, PostgreSQL e GitHub.",
    color: "#4169E1",
    technologies: ["Java", "Spring", "PostgreSQL", "GitHub"]
  },
  {
    id: 4,
    company: "Grupo Optimus",
    date: "Julho 2024 - Setembro 2024",
    role: "Estagiário Full Stack",
    description:
      "Atuei como desenvolvedor Full Stack com Java e Spring com PostgreSQL e React com JavaScript, MUI.",
    color: "#4169E1",
    technologies: ["Java", "Spring", "PostgreSQL", "React", "JavaScript","Python"]
  },
  {
    id: 5,
    company: "NUTI - IC",
    date: "Outubro 2024",
    role: "Estagiário Full Stack",
    description:
      "Atuei como desenvolvedor Full Stack com C# na plataforma .NET com front-end integrado em estrutura ASP.NET MVC.",
    color: "#4169E1",
    technologies: ["C#", ".NET", "ASP.NET MVC","GitHub"]
  },

    /*ADICIONAR NOVAS EXPERIENCIAS ABAIXO, SEGUINDO A NUMERAÇÃO DOS IDS PARA CORRETA ORDENAÇÃO */
];