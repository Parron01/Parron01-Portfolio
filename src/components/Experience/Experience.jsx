import React, { useState, useEffect, useRef } from "react";
import { 
  FaTools
} from "react-icons/fa";
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
  TechButton,
  TechPopup,
  TechItem,
  CompanyInfoContainer,
} from "./Experience.styles";
import { experiencesData, techIconMap } from "../../data/portfolioData";

const Experience = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const popupRef = useRef(null);
  const techButtonsRef = useRef({});
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const handleTechButtonClick = (e, id) => {
    e.stopPropagation(); // Prevent event bubbling
    const rect = e.currentTarget.getBoundingClientRect();
    
    setPopupPosition({
      top: rect.bottom + 10,
      left: isMobile ? rect.right - 200 : rect.left,
    });
    
    setActivePopup(activePopup === id ? null : id);
  };
  
  const handleTechButtonHover = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    setPopupPosition({
      top: rect.bottom + 10,
      left: isMobile ? rect.right - 200 : rect.left,
    });
    
    setActivePopup(id);
  };
  
  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Only close if activePopup is open AND click is outside popup AND outside buttons
      if (activePopup) {
        const clickedOnPopup = popupRef.current && popupRef.current.contains(e.target);
        const clickedOnButton = Object.values(techButtonsRef.current).some(
          btn => btn && btn.contains(e.target)
        );
        
        if (!clickedOnPopup && !clickedOnButton) {
          setActivePopup(null);
        }
      }
    };
    
    // Use mousedown instead of click for better mobile experience
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [activePopup]);

  // Close popup when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (activePopup) {
        setActivePopup(null);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activePopup]);

  // Handle popup click to prevent propagation
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <ExperienceContainer id="experience">
      <ContentWrapper>
        <ExperienceTitle>
          Minha <span>Experiência de Trabalho</span>
        </ExperienceTitle>
        
        {/* Central timeline line */}
        <TimelineLine />
        
        {experiencesData.map((exp, index) => (
          <ExperienceRow key={exp.id}>
            <LeftColumn>
              <CompanyInfoContainer>
                <div>
                  <ExperienceCompany>{exp.company}</ExperienceCompany>
                  <ExperienceDate>{exp.date}</ExperienceDate>
                </div>
                <TechButton 
                  ref={el => techButtonsRef.current[exp.id] = el}
                  onMouseEnter={(e) => !isMobile && handleTechButtonHover(e, exp.id)}
                  onMouseLeave={() => !isMobile && setActivePopup(null)}
                  onClick={(e) => handleTechButtonClick(e, exp.id)}
                >
                  <FaTools />
                </TechButton>
              </CompanyInfoContainer>
            </LeftColumn>

            <TimelinePoint color={exp.color} />

            <RightColumn>
              <ExperienceRole>{exp.role}</ExperienceRole>
              <ExperienceDescription>{exp.description}</ExperienceDescription>
            </RightColumn>
          </ExperienceRow>
        ))}
      </ContentWrapper>
      
      {/* Popup rendered outside the main content flow */}
      {activePopup && (
        <TechPopup 
          ref={popupRef}
          onClick={handlePopupClick}
          style={{ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }}
        >
          <h4>Tecnologias:</h4>
          {experiencesData.find(exp => exp.id === activePopup).technologies.map((techName, idx) => {
            const tech = techIconMap[techName];
            const Icon = tech.icon;
            return (
              <TechItem key={idx} color={tech.color}>
                <span className="tech-icon"><Icon /></span>
                <span className="tech-name">{techName}</span>
              </TechItem>
            );
          })}
        </TechPopup>
      )}
    </ExperienceContainer>
  );
};

export default Experience;
