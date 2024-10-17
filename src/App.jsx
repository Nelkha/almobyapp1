import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Elementos/Copyright';
import Genetica from './Components/Genetica/Genetica';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { subirVacas } from './Utils/Vacas';
import React, { useEffect, useRef } from 'react';
import VacaPage from './Components/VacaPage/VacaPage';

function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null); 

  useEffect(() => {
    const uploadVacas = async () => {
        await subirVacas();
    };

    uploadVacas();
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
        nodeRef={nodeRef} // Pasar el ref al componente CSSTransition
      >
        <div ref={nodeRef}> {/* Asignar el ref al elemento DOM */}
          <Routes location={location}>
            <Route path="/almobyapp1/" element={<Home />} />
            <Route path="/almobyapp1/genetica" element={<Genetica />} />
            <Route path="/vaca/:id" element={<VacaPage />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
      <Copyright />
    </Router>
  );
}

export default App;