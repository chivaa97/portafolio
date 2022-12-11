import React from 'react';
import "./Proyectos.css";
import pc from "../img/climate-pc.png";
import marvel from "../img/marvelpc.png";
import peliculas from "../img/movies-pc.png";
import Tasks from '../img/task-pc.png';

const Proyectos = () => {
     
    return ( 
       <>
       <div className="container-links">
                <div className="container-links-color">
                <div className="containerp">
                    <div className="containerp-proyect">
                        <div className="proyect-card">
                            <div className="item1">
                                <img src={pc} alt="" />
                            </div>
                            <div className="item2">
                                <div className="item2-2">
                                <p>
                                    Sitio web con la funcionalidad de dar información climática de algun lugar, dependiendo que ciudad ingresemos en el campo de texto.
                                </p>
                                
                                <a target="_blank" href='https://react-climatee.netlify.app/' className='boton btn btn-light'>
                                    Ver Proyecto
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="proyect-card">
                            <div className="item1">
                                <img src={marvel} alt="" />
                            </div>
                            <div className="item2">
                               <div className="item2-2">
                               <p>
                                    Página web dedicada al universo cinematográfico de marvel, que nos muestra las series y pelicualas más importantes, así como también los próximos estrenos.
                                </p>
                                <a target="_blank" href='https://marve-site.netlify.app/' className='boton btn  btn-light'>
                                    Ver Proyecto
                                </a>
                               </div>
                            </div>
                        </div>
                        <div className="proyect-card">
                            <div className="item1">
                                <img src={Tasks} alt="" />
                            </div>
                            <div className="item2">
                                <div className="item2-2">
                                <p>
                                    Sitio donde podemos agregar nuestras tareas pendientes, marcar cuando hayamos terminado y posteriormente, eliminarlas.
                                </p>
                                <a target="_blank" href='https://tasks-mannager.netlify.app/' className='boton btn btn-light'>
                                    Ver Proyecto
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="proyect-card">
                            <div className="item1">
                                <img src={peliculas} alt="" />
                            </div>
                            <div className="item2">
                               <div className="item2-2">
                               <p>
                                    Buscador de peliculas, donde encontraremos la informaciónmás importante, como su calificación, fecha de lanzamiento y puntaje o calificación.
                                </p>
                                <a target="_blank" href='https://react-chiva97-movie.netlify.app/' className='boton btn btn-light'>
                                    Ver Proyecto
                                </a>
                               </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
       </>
     );
}
 
export default Proyectos;