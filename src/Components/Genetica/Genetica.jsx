import React from 'react';
import styled from 'styled-components';
import Tag from '../Elementos/Tag';
import { useState, useEffect } from 'react';
import Breadcrumbs from '../Elementos/Breadcrumbs';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Utils/Firebase';


//Contenedores
const GeneticaContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-auto-rows: auto; 
  grid-column-start: 1;
  gap: 20px; 
  
  position: relative;
`;
const GeneticaScrollableWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto; 
  grid-column: 3/span 17;
  gap: 20px; 
  padding: 20px 50px 20px 50px;
  position: relative;
  overflow-y: auto;
  height: 810px;
  
   
   &::-webkit-scrollbar {
    width: 10px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #873636; 
    border-radius: 8px; 
  }

  &::-webkit-scrollbar-track {
    background: #888; 
    border-radius: 10px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;



const Genetica = () => {
    const [vacas, setVacas] = useState([]);

    useEffect(() => {
        const fetchVacas = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'vacas'));
                const vacasData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setVacas(vacasData);
                console.log("Vacas obtenids correctamente:", vacasData);
            } catch (error) {
                console.error("Error al obtener la colección vacas:", error);
            }
        };

        fetchVacas();
    }, []);
    return (<>
        <GeneticaContainer>
            <Breadcrumbs $imagen="breadcrumb1.jpeg" textobreadcrumb="Genetica"/>
            
            
            <Tag
                $bordercolor="black"
                $fontcolor="black"
                $backgroundcolor="transparent"
                subtitulo="Toros padres"
                
            />
            
            <GeneticaScrollableWrapper>
            
           

            </GeneticaScrollableWrapper>
        </GeneticaContainer>
    </>)
}

export default Genetica;