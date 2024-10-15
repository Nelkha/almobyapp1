import styled from 'styled-components';
const FooterContainer=styled.footer`
display: grid;
grid-template-columns: repeat(20,1fr);
min-height: 240px;
background: #873636;
grid-auto-rows: auto; 
grid-column:1/20;
gap: 20px; 
padding: 20px 0 20px 0;
position: relative;
`;

const Footer=() => {
return(<>
<FooterContainer></FooterContainer>
</>)

}
export default Footer;