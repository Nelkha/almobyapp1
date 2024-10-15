
import React from 'react';
import styled from 'styled-components';


const HeaderWrapper = styled.header`
  display: grid;
  
  grid-template-columns: 1fr auto; 
  align-items: center;
  align-content: center;
  padding: 20px;
  background-color: #873636;
  height: 85px;
  color: white;
  position: relative;
  z-index: 1;
`;

const Logo = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px; 
  
 
`;


const LogoImage = styled.img`
  position: relative;
 background: ${props => props.$bgColor || 'transparent'};
  height: 95px; 
  width: auto; 
  border-radius: 50%; 
  bottom: ${props => props.$bottomPos || 0};

`;


const CompanyName = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const Nav = styled.nav`
  ul {
    display: grid;
    grid-auto-flow: column; 
    gap: 15px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <LogoImage $bottomPos="-15%" $bgColor="#873636" src={`${import.meta.env.BASE_URL}images/logo.png`}  />
        
        <CompanyName>Nombre Cabania</CompanyName>
      </Logo>
      <Nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#genetica">Genetica</a></li>
          <li><a href="#Remates">Remates</a></li>
          <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
export { Logo,CompanyName,LogoImage};