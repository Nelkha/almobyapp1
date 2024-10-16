import React from 'react';
import styled from 'styled-components';
const TagTittle = styled.h3`
  min-width: 270px;
  max-width: 357px;
  height: 72px;
  padding: 7px;
  font-size: ${(props) => props.$fontsize || '3rem'};
  text-align: center;
  border-left: ${(props) => `${props.$borderthickness || '4px'} solid ${props.$bordercolor || 'white'}`};
  color: ${(props) => props.$fontcolor || "white"};
`;

const TagContainer = styled.div`
  display: flex;
  min-width: 334px;
  max-width: 357px;
  height: 142px;
  padding-left: 50px;
  grid-column: 1/span 5;
  align-items: center;
  background: ${(props) => props.$backgroundcolor || "#873636"};
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`;

const Tag = ({ $fontsize, subtitulo, $backgroundcolor, $fontcolor, $borderthickness, $bordercolor }) => {
  return (
    <>
      <TagContainer $backgroundcolor={$backgroundcolor}>
        <TagTittle 
          $fontcolor={$fontcolor} 
          $fontsize={$fontsize} 
          $borderthickness={$borderthickness} 
          $bordercolor={$bordercolor}
        >
          {subtitulo}
        </TagTittle>
      </TagContainer>
    </>
  );
}
export default Tag;