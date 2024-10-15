import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Utils/Firebase';
import Tag from "../Elementos/Tag";

const EquipoContainer = styled.section`
  display: grid;
 
  grid-template-columns: repeat(20, 1fr);
  grid-auto-rows: auto; 
  grid-column-start: 1;
  gap: 20px; 
  padding: 20px 0 20px 0;
  position: relative;
`;

const EquipoWrapper = styled.div`
  display: grid;
  
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto; 
  grid-column-start: 4;
  gap: 20px; 
`;

const EmpleadoCard = styled.div`
    height: 150px;
    background-color: #f0f0f0; 
    padding: 20px; 
    border-radius: 4px 40px 4px 4px; 
    background-image: url(${(props) => props.$backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px 40px 4px 4px; 
    box-shadow: 0px 1.85px 3.15px 0px #00000007;
    display: flex;
    flex-direction: column;
    justify-content: flex-end; 
    color: #fff; 
    box-shadow: 0px 1.85px 3.15px 0px #00000007;
    box-shadow: 0px 8.15px 6.52px 0px #0000000C;
    box-shadow: 0px 20px 13px 0px #0000000F;
    box-shadow: 0px 38.52px 25.48px 0px #00000013;
    box-shadow: 0px 64.81px 46.85px 0px #00000017;
    box-shadow: 0px 100px 80px 0px #0000001F;   
`;

const EmpleadoInfo = styled.div`
    background: rgba(0, 0, 0, 0.6); 
    padding: 10px;
    border-radius: 0 0 4px 4px; 
`;

const Equipo = () => {
    const [equipo, setEquipo] = useState([]);

    useEffect(() => {
        const fetchEquipo = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Empleados'));
                const equipoData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setEquipo(equipoData);
                console.log("Equipo obtenido correctamente:", equipoData);
            } catch (error) {
                console.error("Error al obtener la colección equipo:", error);
            }
        };

        fetchEquipo();
    }, []);

    return (
        <>
            <EquipoContainer>
                <Tag subtitulo="Equipo" />
                <EquipoWrapper>
                    {equipo.map((miembro) => (
                        <EmpleadoCard key={miembro.id} $backgroundImage={miembro.foto}>
                            <EmpleadoInfo>
                                <h3>{miembro.Nombre}</h3>
                                <p>{miembro.Puesto}</p>
                            </EmpleadoInfo>
                        </EmpleadoCard>
                    ))}
                </EquipoWrapper>
            </EquipoContainer>
        </>
    );
}

export default Equipo;