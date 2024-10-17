import React from 'react';
import styled from 'styled-components';
import Tag from "../Elementos/Tag";
import ShortDescriptionImg from '../Elementos/ShortDescriptionImg';

//Contenedores
const NosotrosWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-auto-rows: auto; 
  grid-column-start: 1;
  
  gap: 20px; 
  padding: 20px 0 20px 0;
  position: relative;
`;
const MapContainer = styled.div`
  grid-column:3/8;
  grid-row:4 ;
  padding-top:10px;
  border-top:8px solid black;
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    height: 534px;
    border: 1px gray solid;
    border-bottom-left-radius: 40px;
    
  }
  
`;

//Elementos
const NosotrosTitle = styled.h2`
grid-column: 1 / span 20; 
  text-align: center;
  justify-self: center;
  grid-row-start: 2;
  font-size: 2.5rem;
  position: absolute;
  opacity: 60%;
  top: -20px;
 
`;

const NosotrosText = styled.p`
  text-align: center;
  padding-top: 20px;
  grid-column: 3/span 15;
  grid-row: 3;
  font-size: 1.6rem;
 line-height: 1.5;
 opacity: 80%;
`;
const Nosotros = () => {
    return (<>
        <NosotrosWrapper id="sobre-nosotros">
            <Tag subtitulo="Nosotros" />
            <NosotrosTitle>Nombre Cabania</NosotrosTitle>
            <NosotrosText>Sed ut perspiciatis unde omnis iste
                 natus error sit voluptatem accusantium doloremque 
                 laudantium, totam rem aperiam, eaque ipsa quae ab 
                 illo inventore veritatis et quasi architecto beatae 
                 vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
                 quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                 consequuntur magni dolores eos qui ratione voluptatem sequi 
                 nesciunt. Neque porro quisquam est, qui dolorem ipsum quia 
                 dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore
                   magnam aliquam quaerat voluptatem. 
            </NosotrosText>
            <MapContainer>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27701.847196009374!2d-58.059250799999994!3d-29.785421799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945292f82aa21261%3A0x10119094b42b01e3!2zQ3VydXrDuiBDdWF0acOhLCBDb3JyaWVudGVz!5e0!3m2!1ses-419!2sar!4v1728944753503!5m2!1ses-419!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
            </MapContainer>
            <ShortDescriptionImg/>

        </NosotrosWrapper>
    </>)
}

export default Nosotros;