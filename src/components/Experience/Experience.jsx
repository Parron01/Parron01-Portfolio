import React from "react";
import {
  ExperienceContainer,
  ContentWrapper,
  ExperienceTitle,
  TimelineLine,
  ExperienceRow,
  LeftColumn,
  RightColumn,
  TimelinePoint,
  ExperienceRole,
  ExperienceDescription,
  ExperienceCompany,
  ExperienceDate,
  ExperienceNumber,
} from "./Experience.styles";

const experiences = [
  {
    id: 1,
    company: "InfoCorp",
    date: "Agosto 2022 - Fevereiro 2024",
    role: "Back End Developer",
    description:
      "Na empresa junior da UFMT, do bloco do Instituto de Computação, eu atuei como desenvolvedor Back End em Java com Spring, PostgreSQL e GitHub.",
    color: "#4169E1",
  },
  {
    id: 2,
    company: "Grupo Optimus",
    date: "Julho 2024 - Setembro 2024",
    role: "Estagiário Full Stack",
    description:
      "Atuei como desenvolvedor Full Stack com Java e Spring com PostgreSQL e React com JavaScript, MUI.",
    color: "#4169E1",
  },
  {
    id: 3,
    company: "NUTI - IC",
    date: "Outubro 2024",
    role: "Estagiário Full Stack",
    description:
      "Atuei como desenvolvedor Full Stack com C# na plataforma .NET com front-end integrado em estrutura ASP.NET MVC.",
    color: "#4169E1",
  },
];

const Experience = () => {
  return (
    <ExperienceContainer>
      <ContentWrapper>
        <ExperienceTitle>
          Minha <span>Experiência de Trabalho</span>
        </ExperienceTitle>
        
        {/* Central timeline line */}
        <TimelineLine />
        
        {experiences.map((exp, index) => (
          <ExperienceRow key={exp.id}>
            {/* Experience number indicator */}
            <ExperienceNumber>{index + 1}</ExperienceNumber>
            
            <LeftColumn>
              <ExperienceCompany>{exp.company}</ExperienceCompany>
              <ExperienceDate>{exp.date}</ExperienceDate>
            </LeftColumn>

            <TimelinePoint color={exp.color} />

            <RightColumn>
              <ExperienceRole>{exp.role}</ExperienceRole>
              <ExperienceDescription>{exp.description}</ExperienceDescription>
            </RightColumn>
          </ExperienceRow>
        ))}
      </ContentWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
