import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from './Firebase';

// Datos de las vacas
const vacas = [
    {
        raza: 'Angus',
        peso: 650,
        pelo: 'Negro',
        fechaNacimiento: '2020-03-15',
        descripcionCorta: 'Carne jugosa y de alta calidad',
        genealogiaCorta: `Padre: Angus Grande\nMadre: Leche Dorada\nAbuela: Brillo del Campo\nBisabuela: Esperanza Verde`,
        nombreEstancia: 'Estancia La Esperanza'
    },
    {
        raza: 'Hereford',
        peso: 700,
        pelo: 'Marrón y blanco',
        fechaNacimiento: '2021-05-20',
        descripcionCorta: 'Vaca de carne excelente',
        genealogiaCorta: `Hija de Hereford Famoso\nMadre: Tierra Frondosa\nAbuela: Luz del Amanecer\nBisabuela: Valle Verde`,
        nombreEstancia: 'Estancia El Paraíso'
    },
    {
        raza: 'Braford',
        peso: 720,
        pelo: 'Marrón y blanco',
        fechaNacimiento: '2022-02-10',
        descripcionCorta: 'Resistencia y buena carne',
        genealogiaCorta: `Padre: Braford Noble\nMadre: Aroma de Vida\nAbuela: Tierra Amiga\nBisabuela: Cielo Brillante`,
        nombreEstancia: 'Estancia Los Dos Hermanos'
    },
    {
        raza: 'Angus',
        peso: 780,
        pelo: 'Negro',
        fechaNacimiento: '2019-04-18',
        descripcionCorta: 'Producción de carne de alta calidad',
        genealogiaCorta: `Madre: Angus Bella\nPadre: Fuerza Tradicional\nAbuela: Valle Verde\nBisabuela: Luz de Estrella`,
        nombreEstancia: 'Estancia El Descanso'
    },
    {
        raza: 'Hereford',
        peso: 700,
        pelo: 'Marrón y blanco',
        fechaNacimiento: '2020-08-22',
        descripcionCorta: 'Resistente a enfermedades',
        genealogiaCorta: `Hija de Hereford Estrella\nMadre: Tierra de Sabor\nAbuela: Luz de Estrella\nBisabuela: Valle Frondoso`,
        nombreEstancia: 'Estancia La Montaña'
    },
    {
        raza: 'Braford',
        peso: 690,
        pelo: 'Marrón y blanco',
        fechaNacimiento: '2021-01-11',
        descripcionCorta: 'Carne jugosa y de alta calidad',
        genealogiaCorta: `Padre: Braford Fuerte\nMadre: Aroma de Leche\nAbuela: Brillo de Sol\nBisabuela: Tierra Fructífera`,
        nombreEstancia: 'Estancia La Gracia'
    },
    {
        raza: 'Angus',
        peso: 760,
        pelo: 'Negro',
        fechaNacimiento: '2021-06-15',
        descripcionCorta: 'Excelente adaptabilidad',
        genealogiaCorta: `Madre: Angus Noble\nPadre: Luz del Camino\nAbuela: Esperanza Brillante\nBisabuela: Sabiduría del Campo`,
        nombreEstancia: 'Estancia Los Susurros'
    },
    {
        raza: 'Hereford',
        peso: 670,
        pelo: 'Marrón y blanco',
        fechaNacimiento: '2020-03-13',
        descripcionCorta: 'Vaca de carne excelente',
        genealogiaCorta: `Hija de Hereford Famoso\nMadre: Tierra de Sabor\nAbuela: Luz de Estrella\nBisabuela: Valle Frondoso`,
        nombreEstancia: 'Estancia El Sol Naciente'
    },
    {
        raza: 'Braford',
        peso: 720,
        pelo: 'Marrón y blanco',
        fechaNacimiento: '2021-02-28',
        descripcionCorta: 'Resistencia y buena carne',
        genealogiaCorta: `Padre: Braford Fuerte\nMadre: Aroma de Vida\nAbuela: Tierra Amiga\nBisabuela: Cielo Brillante`,
        nombreEstancia: 'Estancia Los Dos Hermanos'
    },
    {
        raza: 'Angus',
        peso: 520,
        pelo: 'Marrón claro',
        fechaNacimiento: '2019-08-17',
        descripcionCorta: 'Leche de alto rendimiento',
        genealogiaCorta: `Madre: Angus Brillante\nAbuela: Aroma Suave\nBisabuela: Luz de Campo\nTatarabuela: Brisa de Verano`,
        nombreEstancia: 'Estancia La Palmera'
    },
    {
        raza: 'Braford',
        peso: 730,
        pelo: 'Dorado',
        fechaNacimiento: '2020-09-01',
        descripcionCorta: 'Carne tierna y sabrosa',
        genealogiaCorta: `Hija de Braford Famoso\nMadre: Sol Brillante\nAbuela: Tierra Noble\nBisabuela: Sombra Verde`,
        nombreEstancia: 'Estancia El Sur'
    }
];

export const subirVacas = async () => {
    const vacasCollection = collection(db, 'vacas');
    const snapshot = await getDocs(vacasCollection);

   
    if (snapshot.empty) {
        for (const vaca of vacas) {
            const docRef = doc(vacasCollection, vaca.nombreEstancia + "_" + vaca.raza + "_" + vaca.fechaNacimiento); // Crear un ID único para cada vaca
            await setDoc(docRef, vaca);
        }
        console.log('Documentos subidos correctamente.');
    } else {
        console.log('La colección de vacas ya existe. No se subirán nuevos documentos.');
    }
};
