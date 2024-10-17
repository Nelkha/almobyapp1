import styled from "styled-components";

const Subtitulo=styled.h2`
   
    color:${({ color }) => color || 'white'}; 
    font-size: 20px;
    font-weight:100;
    
`

const LongTittle=styled.h3`
    color:${({ color }) => color || 'black'}; 
    width:${({ $width }) => $width || "100%"} ;
    font-size:2rem;
    font-weight: 100;
   padding-left: 0.8rem;
   padding-bottom: 0.5rem;
   border-bottom: 0.2rem solid black;
   grid-row: ${({ $row }) => $row};
`

const ParagraphStyle=styled.p`
    width:${({ $width }) => $width || "100%"} ;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 100;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-left: 0.8rem;
    grid-row: ${({ $row }) => $row};
`

export {Subtitulo,LongTittle,ParagraphStyle};