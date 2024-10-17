import styled from "styled-components";
import Breadcrumbs from "../Elementos/Breadcrumbs";
import { useLocation, useParams } from 'react-router-dom';
import Tag from "../Elementos/Tag";
import { LeftCol } from "../Elementos/Wrappers";
import { LongTittle, ParagraphStyle } from "../Elementos/Titulo";
import FichaTecnica from "../Elementos/FichaTecnica";


//Contenedores
const VacaPageContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-auto-rows: auto; 
  grid-column-start: 1;
  gap: 20px; 
  position: relative;
`;
const VacaPageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column: span 20;
    padding: 20px 50px 20px 50px;
    position: relative;
`;
const VacaPageCard = styled.div`
  display: flex;
  align-content: flex-end;
  background-image: url(${(props) => `${import.meta.env.BASE_URL}${props.$imagen}`});;
  background-size: cover;
  background-position:center center;
  grid-column:span 1;
  width:100%;
  height:430px;
  border-top-left-radius:60px;
  position:relative;

`
const VacaPage = () => {
    const { id } = useParams();  
    const location = useLocation();  
    const vaca = location.state?.vaca;

    if (!vaca) {
        return <div>No se encontraron datos para esta vaca.</div>;
    }

    return (
        <VacaPageContainer>
            <Breadcrumbs $imagen="breadcrumb1.jpeg" textobreadcrumb="Genetica" />
            <Tag $bordercolor="black" $fontcolor="black" $backgroundcolor="transparent" subtitulo="Toros padres" />
            <VacaPageWrapper>
                <VacaPageCard $imagen={vaca.foto} />
                <LeftCol>
                    <LongTittle>{vaca.nombreEstancia}</LongTittle>
                    <ParagraphStyle>{vaca.descripcionCorta}</ParagraphStyle>
                    
                </LeftCol>
                <FichaTecnica fecha={vaca.fechaNacimiento} peso={vaca.peso} pelo={vaca.pelo}/>
                <LongTittle $width="70%" $row="3">Genealogía</LongTittle>
                <ParagraphStyle $width="70%" $row="4">{vaca.genealogiaCorta}</ParagraphStyle>
            </VacaPageWrapper>
        </VacaPageContainer>
    );
};
export default VacaPage;