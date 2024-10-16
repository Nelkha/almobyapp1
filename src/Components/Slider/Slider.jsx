import React from 'react';
import styled from 'styled-components';
import { Logo,LogoImage,CompanyName } from '../Header/Header';
import { Subtitulo } from '../Elementos/Titulo';
import { CenterCol, LeftCol, RightCol } from '../Elementos/Wrappers';
import BottonLargo from '../Elementos/BottonLargo';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



const SliderWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(20,1fr); 
  width: 100%; 
  align-items: center;
  align-content: center;
  background-image: url(${(props) => `${import.meta.env.BASE_URL}images/slider.jpeg`});
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
  height: 160px;
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
const Quote=styled.p`
font-size: 1.5rem;
color: white;
border-left: 4px solid white;
background: transparent;
max-width: 265px;
padding-left: 20px;
position: absolute;
left: 50px;
top:-5px;
text-align: center;
`

const BotonCentral = styled.button`
width: 382px;
height: 60px;
font-weight: 300;
border: #873636 3px solid;
cursor: pointer;
color: white;
font-size: 1.5rem;
align-self: center;
background-color: transparent;
border-radius: 45px;

`
const ContainerCentral = styled.div`
width: 100%;
text-align: center;
grid-column:1/20;

`
const Slider = () => {
  return (
    <SliderWrapper>
     <ContainerCentral>
     <BotonCentral>1er Remate Anual</BotonCentral>
      </ContainerCentral>
      <Flap>
        <FlapItem>
        <Quote>

          
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor”
        </Quote>
        </FlapItem>
        <FlapItem>
        <Logo>
        <LogoImage src={`${import.meta.env.BASE_URL}images/logo.png`}/>
        <CenterCol>
        <CompanyName>Nombre Cabania</CompanyName>
        <Subtitulo  >Genética Superior</Subtitulo>
        </CenterCol>
      
      </Logo>
        </FlapItem>
        <FlapItem>
        <RightCol $top="-20px"> 
          <BottonLargo colorborde="white" color="white" icono={FaWhatsapp} texto="11912345678" />
          <BottonLargo colorborde="white" color="white" icono={MdOutlineMailOutline} texto="hola@gmail.com" />
          <BottonLargo colorborde="white" color="white" icono={FaLocationDot} texto="Corrientes, arg" />
       
          
          </RightCol>
        </FlapItem>
      </Flap>
    </SliderWrapper>
  );
};

export default Slider;