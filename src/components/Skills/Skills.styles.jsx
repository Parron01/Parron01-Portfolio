import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
`;

export const ContentWrapper = styled.div`
  width: 75%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #171717;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(65, 105, 225, 0.34);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SkillCard = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 1100px) {
    padding: 1.25rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const SkillIcon = styled.div`
  font-size: 3.5rem;
  margin-right: 1.5rem;
  color: ${(props) => props.color || "#171717"};
  
  @media (max-width: 1100px) {
    font-size: 3rem;
    margin-right: 1.25rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-right: 1rem;
  }
`;

export const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SkillName = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #171717;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const SkillProjects = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.color};
  margin-top: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
