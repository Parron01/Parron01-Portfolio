import styled from "styled-components";

export const ExperienceContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem 0;
`;

export const ContentWrapper = styled.div`
  width: 75%;
  max-width: 1200px;
  position: relative;
`;

export const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #171717;
  margin-bottom: 3rem;
  text-align: center;

  span {
    color: #4169E1;
  }
`;

// Timeline central line that spans the entire section
export const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background-color: #ccc;
  top: 6rem;
  bottom: 0;
  z-index: 1;

  @media (max-width: 900px) {
    left: 15px;
    transform: none;
  }
`;

export const ExperienceRow = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 4rem;
  min-height: 120px;
  gap: 8rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 900px) {
    flex-direction: column;
    padding-left: 40px;
    margin-bottom: 5rem;
    gap: 1rem;
  }
`;

export const ExperienceNumber = styled.div`
  position: absolute;
  left: -80px;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border: 2px solid #4169E1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: #4169E1;
  margin-left: 5rem;
  
  @media (max-width: 1100px) {
    margin-left: 0;
    left: -60px;
    width: 50px;
    height: 50px;
    font-size: 2rem;
  }
  
  @media (max-width: 900px) {
    left: -45px;
    width: 40px;
    height: 40px;
    font-size: 1.8rem;
    top: 4rem;
    transform: none;
  }
  
  @media (max-width: 768px) {
    left: -30px;
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
  }
`;

export const LeftColumn = styled.div`
  width: calc(50% - 20px);
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  
  @media (max-width: 900px) {
    width: 100%;
    align-items: flex-start;
    text-align: left;
    padding-left: 3rem;
    padding-bottom: 0.5rem;
}
`;

export const RightColumn = styled.div`
  width: calc(50% - 20px);
  padding-left: 20px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  
  @media (max-width: 900px) {
      width: 100%;
      padding-left: 3rem;
    }
`;

export const ExperienceCompany = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #171717;
  margin: 0;
`;

export const ExperienceDate = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0.5rem 0 0 0;
`;

export const ExperienceRole = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #171717;
  margin: 0;
`;

export const ExperienceDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin: 0.5rem 0 0 0;
`;

export const TimelinePoint = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color || "#4169E1"};
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #ccc;
  z-index: 2;
  
  @media (max-width: 900px) {
    left: 15px;
    transform: translateY(-50%);
  }
`;
