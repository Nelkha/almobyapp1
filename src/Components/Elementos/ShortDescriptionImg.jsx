import React from 'react';
import styled from 'styled-components';
const ShortDescriptionImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    grid-column: 9/10;
    grid-row: 4;
    overflow: hidden;
    border-top-right-radius: 80px;
    max-height: 540px;width: 540px;
    
  
`
const ShortDescriptionImgWrapper = styled.div`
  width: 100%;
  height: 360px;
  background-image: url(${(props) => `${import.meta.env.BASE_URL}${props.$image}`}); 
  background-size: cover;
 
`;
const ShortDescriptionImgTittle = styled.h3`
  color: #873636;
  width: 100%;
  font-size: 24px;
  
  ;
 
`;
const ShortDescriptionImgParagraph = styled.p`
color: black;
opacity: 80%;
font-size: 24px;
`
const ShortDescriptionImgContent = styled.div`
display: flex;
flex-direction: column;
max-width: 500px;
margin-top: 5px;
line-height: 36px;
`
const ShortDescriptionImg = () => {
    return (
        <ShortDescriptionImgContainer>
            <ShortDescriptionImgWrapper $image={"images/angus.jpeg"} />
            <ShortDescriptionImgContent>
                <ShortDescriptionImgTittle>Sed ut</ShortDescriptionImgTittle>
                <ShortDescriptionImgParagraph>Perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium, totam
                    rem aperiam, eaque ipsa quae ab illo inventore veritatis et.
                </ShortDescriptionImgParagraph>
            </ShortDescriptionImgContent>
        </ShortDescriptionImgContainer>
    );
};
export default ShortDescriptionImg;