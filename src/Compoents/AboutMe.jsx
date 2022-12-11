import React from 'react';
import "./AboutMe.css";
import { Link } from 'react-router-dom';

const AboutMe = () => {

    return (
        <div className='fondo'>
            <div className="fondo-color-am">
                <div className="header-picture">

                    <div className="header-color">
                        <div className="title">
                            <p>
                                Eduardo Contreras Programador Jr.
                            </p>
                        </div>
                        <p className="text">
                            Hola! soy Eduardo Contreras, Ingeniero en Sistemas Computacionales, apasionado por la programación, actualmente enfocado a la creación o desarrollo de sitios web, tanto en  Frontend y Backend. Si tienes una idea en mente,      contactame, con gusto te ayudaré.
                        </p>
                        <p className="text">
                            A continuación, puedes revisar algunos de los proyectos que he realizado.
                        </p>
                        <Link to="/Proyectos">
                            <button className='btn btn-outline-light'>
                                Proyectos
                            </button> 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
