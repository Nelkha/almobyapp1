import styled from 'styled-components';
const CopyrightContainer=styled.div`
background-color: white;
display: grid;

grid-template-columns: repeat(20,1fr);
grid-column: 1/20;
gap: 20px; 
padding: 0 20px 0 20px;
position: relative;
text-align: center;
align-items: center;
`
const CopyrightText = styled.p`
  display: flex;
  grid-column: 1 / span 20; 
  margin: 0;
  justify-content: center;
  align-items: center;
  ` 

const CopyrightImg = styled.img`
  width: 176px;
`;
const Copyright=() =>{
return(
    <>
    <CopyrightContainer>
    <CopyrightText>
        © Todos los derechos reservados. Developed by
        <CopyrightImg src={`${import.meta.env.BASE_URL}images/copyright.png`}  />
      </CopyrightText>
      </CopyrightContainer>
    </>
);

}
export default Copyright;