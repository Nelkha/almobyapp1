import styled from "styled-components";


const TablaContainer = styled.div`
  display: flex;
  width: 70%;
  grid-column: ${({ gridColumn }) => gridColumn || 'span 1'}; 
  grid-row: ${({ gridRow }) => gridRow || 'auto'}; 
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;


const Solapa = styled.div`
 align-content: center;
  background-color: #873636;
  color: white;
  padding: 10px;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
`;


const Tabla = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background-color: #f9f9f9;
`;


const Fila = styled.tr`
  &:nth-child(even) {
    background-color: #efefef; 
  }
`;

const Celda = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

// Componente principal
const FichaTecnica = ({ gridRow, gridColumn,fecha,peso,pelo }) => {
  return (
    <TablaContainer gridRow={gridRow} gridColumn={gridColumn}>
      <Solapa>Ficha Técnica</Solapa>
      <Tabla>
        <tbody>
          <Fila>
            <Celda>Fecha de nacimiento</Celda>
            <Celda>{fecha}</Celda>
          </Fila>
          <Fila>
            <Celda>Peso</Celda>
            <Celda>{peso}</Celda>
          </Fila>
          <Fila>
            <Celda>Pelo</Celda>
            <Celda>{pelo}</Celda>
          </Fila>
        </tbody>
      </Tabla>
    </TablaContainer>
  );
};

export default FichaTecnica;