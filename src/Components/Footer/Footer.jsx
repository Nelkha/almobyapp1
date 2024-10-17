import styled from 'styled-components';
import SocialMedia from '../Elementos/SocialMedia';
import { LeftCol } from '../Elementos/Wrappers';
import BottonLargo from '../Elementos/BottonLargo';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
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
const FooterWrapper = styled.div`
    display: flex;
    grid-column: 1/span 20;
    justify-content: space-between;
    padding: 0 50px;
   align-items: center;
`

const Footer=() => {
return(<>
<FooterContainer id="contacto">
   <FooterWrapper>
   <LeftCol>
    <BottonLargo colorborde="transparent" color="white" icono={BsFillTelephoneFill} texto="+012 345 6789"/>
    <BottonLargo colorborde="transparent" color="white" icono={MdOutlineMailOutline} texto="hola@gmail.com" />
   </LeftCol>
   <SocialMedia/>
   </FooterWrapper>
   
</FooterContainer>
</>)

}
export default Footer;