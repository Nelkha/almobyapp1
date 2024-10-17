# Almoby Ganaderia

Almoby es una plataforma web dedicada a la ganadería, diseñada para presentar una variedad de animales de manera atractiva y funcional. Esta aplicación permite a los usuarios explorar diferentes razas, características y datos relevantes sobre los animales, todo en un entorno intuitivo y visualmente agradable.

## Tecnologías Usadas

Para el desarrollo del frontend, se utilizaron las siguientes tecnologías:

- **React (Vite)**: Utilizando Vite para un desarrollo más rápido y eficiente con React.
- **React Router**: Para manejar la navegación entre diferentes secciones de la aplicación de forma fluida.
- **Styled Components**: Para aplicar estilos a los componentes de manera modular y mantenible.
- **CSS Grid y Flexbox**: Para lograr un diseño responsivo y adaptativo que se ajusta a diferentes tamaños de pantalla.
- **React Transition Group**: Para manejar animaciones y transiciones en los componentes de la aplicación.
- **React Icons**: Para incluir iconos personalizables y atractivos en la interfaz.

Además, se implementó un pequeño backend utilizando **Firebase** para almacenar datos ficticios. Los datos se cargan a través de un componente llamado `Vacas`, ubicado en la carpeta `utils`.

## Diseño

El diseño de la aplicación se realizó siguiendo los lineamientos proporcionados en Figma, con algunos ajustes menores para mejorar la experiencia del usuario. Aunque el CSS se diseñó principalmente para la versión de escritorio, varios elementos son responsivos gracias al uso de CSS Grid.

## Variables de Entorno

El proyecto utiliza variables de entorno para controlar las versiones y facilitar el proceso de despliegue. Se empleó **GitHub** y **GitHub Pages** para la gestión del código y la implementación de la aplicación en línea.

## Instalación

Para instalar el proyecto, clona el repositorio y ejecuta:

```bash
npm install
npm run dev