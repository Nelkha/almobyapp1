import React from 'react';
import styled from 'styled-components';


//Contenedores
const GeneticaWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-auto-rows: auto; 
  grid-column-start: 1;
  gap: 20px; 
  padding: 20px 0 20px 0;
  position: relative;
`;

const Genetica = () => {
    return (<>
        <GeneticaWrapper>
            AQUI ESTA LA SECCION GENETICA
        </GeneticaWrapper>
    </>)
}

export default Genetica;