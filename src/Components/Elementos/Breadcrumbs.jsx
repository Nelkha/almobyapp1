import styled from "styled-components";
import Tag from "./Tag";

const BreadcrumbContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-column: 1/span 20;
  gap: 20px;  
  position: relative;
  background-image: url(${(props) => `${import.meta.env.BASE_URL}images/breadcrumbs/${props.$imagen}`});
  background-repeat: no-repeat;
  background-size: cover; 
  background-position:top center;
  height:288px;
  
`;
const BreadcrumbWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  grid-column: 1/span 20;
  
  
`;

const Breadcrumbs = ({ $imagen, textobreadcrumb }) => {
  return (
    <>
      <BreadcrumbContainer $imagen={$imagen}>
        <BreadcrumbWrapper>
          <Tag
            $bordercolor="white"
            $fontcolor="white"
            $backgroundcolor="transparent"
            subtitulo={textobreadcrumb}
          />
        </BreadcrumbWrapper>
      </BreadcrumbContainer>
    </>
  );
};

export default Breadcrumbs;