import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 80px;
    margin: 0 auto;
    background-color: #171717;
    border-radius: 3rem;
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    z-index: 1000;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 2rem;
  
  @media (max-width: 1100px) {
    width: 75%;
    margin: 0;
    justify-content: space-between;
  }
`;

export const LeftNavGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 7rem; 
    justify-content: flex-end;

    @media (max-width: 1800px) {
        gap: 6rem;
    }
    @media (max-width: 1700px) {
        gap: 5rem;
    }
    @media (max-width: 1600px) {
        gap: 3rem;
    }
    @media (max-width: 1450px) {
        gap: 0.7rem;
    }
    @media (max-width: 1300px) {
        gap: 0rem;
    }
    @media (max-width: 1100px) {
        display: none;
    }
`;

export const RightNavGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 7rem; 
    justify-content: flex-start;
    
    @media (max-width: 1800px) {
        gap: 6rem;
    }
    @media (max-width: 1700px) {
        gap: 5rem;
    }
    @media (max-width: 1600px) {
        gap: 3rem;
    }
    @media (max-width: 1450px) {
        gap: 1.5rem;
    }
    @media (max-width: 1300px) {
        gap: 0rem;
    }
    @media (max-width: 1100px) {
        display: none;
    }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  
  img {
    width: 5rem; 
    height: 5rem;
    margin-left: 0.5rem;
  }
`;

export const DesktopLogo = styled.div`
  display: block;
  
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: none;

  @media (max-width: 1100px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 5.75rem;
    right: 0;
    background: #171717;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    z-index: 100;
    list-style: none;
    gap: 2rem;
  }
`;

export const NavItem = styled.li`
  text-align: center;
`;

export const NavButton = styled.button`
    background: ${({ $active }) => ($active ? "#4169E1" : "transparent")};
    color: ${({ $active }) => ($active ? "white" : "#ffffff")};
    font-size: 1.27rem; 
    font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: ${({ $active }) => ($active ? "black" : "#ffffff")};
        background: ${({ $active }) => ($active ? "#4169E1" : "#2e2e2e")};
    }
    .active & {
        background: #4169E1;
        color: white;
        font-weight: bold;
    }
`;

export const MenuToggle = styled.div`
  display: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;

  @media (max-width: 1100px) {
    display: block;
  }
`;

export const MobileOnly = styled.div`
  display: none;
  
  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

