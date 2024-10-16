import React from 'react';
import styled from 'styled-components';


const BottonConBorde = styled.button`
  display: flex;
justify-content: space-evenly;
align-items: center;
  width: 191px;
  height: 41px;
  background: transparent;
  border: ${props => props.$colorborde || "black"} solid 2px;
  border-radius: 45px;
  padding: 0 15px;
  color: ${props => props.color || 'black'};
  margin-bottom: 10px;
  z-index: 10;
  cursor: ${props => props.type}
`;

const BottonLargo = ({ icono: Icono, texto, color, colorborde,type }) => {
  return (
    <BottonConBorde $colorborde={colorborde} color={color} type={type}>
      <Icono />
      <span>{texto}</span>
    </BottonConBorde>
  );
};


export default BottonLargo;