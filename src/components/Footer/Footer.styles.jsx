import styled, { keyframes } from "styled-components";
import { FaEnvelope, FaCheck } from "react-icons/fa";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  padding: 2rem 0 0 0; /* Remove bottom padding */
  width: 100%;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 75%;
  max-width: 1200px;
  text-align: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #171717;
  display: flex;
  align-items: center;

  span {
    background-color: #4169e1;
    color: white;
    font-weight: bold;
    padding: 0.4rem 0.8rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: #171717;
    font-weight: 500;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
      color: #4169e1;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #171717;
  transition: color 0.3s ease;

  &:hover {
    color: #4169e1;
  }
`;

export const FooterEmail = styled.div`
  margin-top: 1rem;
`;

export const EmailButton = styled.button`
  background-color: #4169e1;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3154b0;
  }
`;

export const EmailIcon = styled(FaEnvelope)`
  font-size: 1.2rem;
`;

export const SuccessIcon = styled(FaCheck)`
  font-size: 1.2rem;
  color: #4ADE80; /* A bright green color */
`;

export const FooterBottom = styled.div`
  width: 100%;
  background-color: #444;
  padding: 1rem 0;
  text-align: center;
  margin-top: 2rem;
`;

export const CopyrightText = styled.p`
  color: white;
  font-size: 0.9rem;

  strong {
    color: #4169e1;
  }
`;

// Animation for toast appearance
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ToastNotification = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4ADE80;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${fadeIn} 0.3s ease-out;
  z-index: 1000;
  
  svg {
    font-size: 16px;
  }
`;
