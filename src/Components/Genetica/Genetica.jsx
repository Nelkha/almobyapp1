import React from 'react';
import styled from 'styled-components';
import Tag from '../Elementos/Tag';
import { useState, useEffect } from 'react';
import Breadcrumbs from '../Elementos/Breadcrumbs';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Utils/Firebase';
import { FaChevronRight } from "react-icons/fa6";


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
  grid-column: 1/span 20;
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
const GeneticaVacaCard=styled.div`
  display: flex;
  align-content: flex-end;
  background-image: url(${(props) => `${import.meta.env.BASE_URL}${props.$imagen}`});;
  background-size: cover;
  grid-column:span 1;
  width:100%;
  height:250px;
  border-bottom-left-radius:60px;
  position:relative;

`
const EstanciaOverlay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.4); 
  color: white;
  width: 100%;
  position: absolute;
  bottom: 0; 
  font-size: 1.3rem;
  transition: background-color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.6); 
    cursor: pointer;
  }

  span {
    text-decoration: none;
  }

  span:hover {
    text-decoration: underline; 
  }
`;
const BotonRaza = styled.button`
  padding: 10px 20px;
  grid-column: span 3;
  border: 2px solid #873636; 
  background-color: white;
  color: #873636;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #873636;
    color: white;
  }
  
  &:focus {
    outline: none;
  }
  
  &.active {
    background-color: #873636;
    color: white;
  }
`;


const Genetica = () => {
    const [vacas, setVacas] = useState([]);
    const [razaSeleccionada, setRazaSeleccionada] = useState(null);

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

    const handleRazaClick = (raza) => {
     
      if (razaSeleccionada === raza) {
          setRazaSeleccionada(null);
      } else {
          setRazaSeleccionada(raza);
      }
  };

 const handleMostrarTodas = () => {
        setRazaSeleccionada(null);
    };
  const vacasFiltradas = razaSeleccionada 
      ? vacas.filter(vaca => vaca.raza === razaSeleccionada) 
      : vacas;
    return (<>
        <GeneticaContainer>
            <Breadcrumbs $imagen="breadcrumb1.jpeg" textobreadcrumb="Genetica"/>
            
            
            <Tag
                $bordercolor="black"
                $fontcolor="black"
                $backgroundcolor="transparent"
                subtitulo="Toros padres"
                
            />
            <BotonRaza 
                onClick={handleMostrarTodas}
                className={razaSeleccionada === null ? 'active' : ''}
            >
                Mostrar Todas
            </BotonRaza>
            <BotonRaza 
              onClick={() => handleRazaClick('Hereford')} 
              className={razaSeleccionada === 'Hereford' ? 'active' : ''}
            >
              Hereford
            </BotonRaza>
            <BotonRaza 
              onClick={() => handleRazaClick('Angus')} 
              className={razaSeleccionada === 'Angus' ? 'active' : ''}
            >
              Angus
            </BotonRaza>
            <BotonRaza 
              onClick={() => handleRazaClick('Braford')} 
              className={razaSeleccionada === 'Braford' ? 'active' : ''}
            >
              Braford
            </BotonRaza>
         
            <GeneticaScrollableWrapper>
            {vacasFiltradas.map(vaca => (
       <GeneticaVacaCard key={vaca.id}$imagen={vaca.foto} >
        <EstanciaOverlay>{vaca.nombreEstancia}<FaChevronRight /></EstanciaOverlay>
       </GeneticaVacaCard>
      ))}
            </GeneticaScrollableWrapper>
        </GeneticaContainer>
    </>)
}

export default Genetica;