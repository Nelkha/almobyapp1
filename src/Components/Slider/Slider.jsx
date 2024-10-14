import React from 'react';
import styled from 'styled-components';
import { Logo,LogoImage,CompanyName } from '../Header/Header';

const SliderWrapper = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr auto; 
  align-items: center;
  align-content: center;
  background-image: url(images/slider.jpeg);
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: center; 
  min-height: 972px;
  position: relative; 
`;

const Flap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
  width: 100%; 
  
  background: #873636; 
  height: 100px;
  position: absolute; 
  bottom: 0; 
  left: 0; 
  z-index: 1; 
 
    
    
`;

const FlapItem = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  height: 100%; 
  color: white; 
  position: relative; 


 /* Pseudo-elemento para el rectángulo verde */
 &::before {
    content: ''; /* Necesario para mostrar el pseudo-elemento */
    position: absolute; 
    bottom: 99%; 
    left: 0; 
    width: 100%; 
    height: 70px; 
    background-color: #873636;
    z-index: 2; 
    clip-path: path('M0 100 C 40 0, 60 0, 100 100 L 0 100 Z')
  
  }

  /* Solo muestra el pseudo-elemento en el primer y tercer FlapItem */
  &:nth-child(1)::before { 
    display: block; 
  }

  &:nth-child(2)::before { 
    display: none; 
  }

  &:nth-child(3)::before {
    display: block; 
  }
`;

const Slider = () => {
  return (
    <SliderWrapper>
      <Flap>
        <FlapItem>
          <h2>Slider 1</h2>
        </FlapItem>
        <FlapItem>
        <Logo>
        <LogoImage src='/images/logo.png'/>
        
        <CompanyName>Nombre Cabania</CompanyName>
      </Logo>
        </FlapItem>
        <FlapItem>
          <h2>Slider 3</h2>
        </FlapItem>
      </Flap>
    </SliderWrapper>
  );
};

export default Slider;