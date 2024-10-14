import React from 'react';
import styled from 'styled-components';
const TagTittle = styled.h3`
  width: 270px;
  height: 72px;
  padding:10px;
  font-size:3rem ;
  text-align: center;
  border-left: 4px solid white;
  color: white;
  `;
const TagContainer = styled.div`
  display: flex;
  width:334px ;
  height: 142px;
  padding-left: 50px;
  grid-column: 1/span 5;

  align-items: center;
  background:#873636;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  `

const Tag = (Props) => {
  return (
    <>
      <TagContainer>
        <TagTittle >{Props.subtitulo}</TagTittle>
      </TagContainer>

    </>
  );
}
export default Tag;