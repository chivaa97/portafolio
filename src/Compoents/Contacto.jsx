import React from 'react';
import "./Contacto.css";


const Contacto = () => {
    return (
        <>
    
            <div className="contacto-fondo">
                <div className="contacto-fondo-color">
                    <div className="contactos-links">
                        <div className="item-cv">
                            <a 
                            className='botonC' target="_blank" 
                            href="./Jose_Eduardo_Contreras_Romero_Resume.pdf">
                                VISITAR</a>
                        </div>
                        <div className="item-in">
                            <a rel="noreferrer"
                             className='botonC' target="_blank"
                              href="https://www.linkedin.com/in/eduardo-contreras-chivaa97/">VISITAR</a>
                        </div>
                        <div className="item-git">
                            <a rel="noreferrer"
                            className='botonC' target="_blank" 
                            href="https://github.com/chivaa97">VISITAR</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacto;