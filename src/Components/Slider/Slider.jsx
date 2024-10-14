import React from 'react';
import styled from 'styled-components';
import { Logo,LogoImage,CompanyName } from '../Header/Header';

const SliderWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr auto; 
  width: 100%; 
  align-items: center;
  align-content: center;
  background-image: url(images/slider.jpeg);
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: center; 
  min-height: 972px;
  position: relative; 
  margin: 0; 
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


 
 &::before {
    content: ''; 
    position: absolute; 
    bottom: 99%; 
    left: 0; 
    width: 100%; 
    height: 70px; 
    background-color: #873636;
    z-index: 2; 
    
    
  }
  
  

  /* Solo muestra el pseudo-elemento en el primer y tercer FlapItem */
  &:nth-child(1)::before { 
    display: block; 
    clip-path: polygon(0 100%, 0 0%, 50% 0%, 100% 100%, 100% 100%); 
  }

  &:nth-child(2)::before { 
    display: none; 
  }

  &:nth-child(3)::before {
    display: block; 
    clip-path: polygon(0 100%, 100% 100%, 100% 0%, 50% 0%);
    
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