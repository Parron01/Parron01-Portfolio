import React from "react";
import {
  SkillsContainer,
  ContentWrapper,
  SkillsTitle,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillInfo,
  SkillName,
  SkillProjects,
} from "./Skills.styles";

import { FaJava, FaReact, FaPython, FaNodeJs, FaDatabase, FaGit } from "react-icons/fa";

const skillsData = [
  { id: 1, name: "Java", icon: <FaJava />, projects: 3, color: "#F89820" },
  { id: 2, name: "React", icon: <FaReact />, projects: 5, color: "#61DAFB" },
  { id: 3, name: "Python", icon: <FaPython />, projects: 4, color: "#FFD43B" },
  { id: 4, name: "Node.js", icon: <FaNodeJs />, projects: 6, color: "#68A063" },
  { id: 5, name: "Banco de Dados", icon: <FaDatabase />, projects: 2, color: "#4DB33D" },
  { id: 6, name: "Git", icon: <FaGit />, projects: 7, color: "#F05032" },
];

const Skills = () => {
  return (
    <SkillsContainer>
      <ContentWrapper>
        <SkillsTitle>Habilidades</SkillsTitle>
        <SkillsGrid>
          {skillsData.map((skill) => (
            <SkillCard key={skill.id}>
              <SkillIcon color={skill.color}>{skill.icon}</SkillIcon>
              <SkillInfo>
                <SkillName>{skill.name}</SkillName>
                <SkillProjects color={skill.color}>{skill.projects} Projetos</SkillProjects>
              </SkillInfo>
            </SkillCard>
          ))}
        </SkillsGrid>
      </ContentWrapper>
    </SkillsContainer>
  );
};

export default Skills;
