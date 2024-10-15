import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Elementos/Copyright';
import Genetica from './Components/Genetica/Genetica';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function AnimatedRoutes() {
  const location = useLocation(); 

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Routes location={location}>
          <Route path="/almobyapp1/" element={<Home />} />
          <Route path="/almobyapp1/genetica" element={<Genetica />} />
        </Routes>
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