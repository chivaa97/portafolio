
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import AboutMe from './Compoents/AboutMe';
import Proyectos from './Compoents/Proyectos';
import Contacto from './Compoents/Contacto';

function App() {
  const [background, setbackground] = useState("transparent");
  const divRef = useRef();


  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();
      console.log(y);
      const backgroundcolor = y <=-640 ? 'transparent' : 'transparent';
      setbackground(backgroundcolor);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <BrowserRouter>
        <div ref={divRef} className="container-nav">
          <nav  style={{ background }} id="nav">
            <ul>
              <li>
                <NavLink className="nav-active" to="/AboutMe">About Me</NavLink>
                <NavLink className="nav-active" to="/Proyectos">Proyectos</NavLink>
                <NavLink className="nav-active" to="/Contacto">Contácto</NavLink>

              </li>
            </ul>
          </nav>
        </div>


        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/" element={<AboutMe />} />
          <Route path="/Contacto" element={<Contacto />} />
          {/* <Route path="*" element={<Header />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
