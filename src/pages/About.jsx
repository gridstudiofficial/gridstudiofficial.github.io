import {useEffect, useState} from 'react';
import pantallaInicio from '../assets/socials/PantallaInicio.png';
import './About.css';

export default function About() {
    const [mostrarSecreto, setMostrarSecreto] = useState(false);

    useEffect(() => {
        const codigo = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let pos = 0;

        function detectarTecla(event) {
            const tecla = event.key.length === 1 ? event.key.toLowerCase() : event.key;
            pos = tecla === codigo[pos] ? pos + 1 : (tecla === codigo[0] ? 1 : 0);

            if (pos === codigo.length) {
                setMostrarSecreto(true);
                pos = 0;
            }
        }

        window.addEventListener('keydown', detectarTecla);
        return () => window.removeEventListener('keydown', detectarTecla);
    }, []);

    return (
        <div id="about">
            <h1>Capital and steel</h1>
            <p> Capital and steel es un juego de estrategia por turnos en el que los jugadores luchan
                contra otras personas o la IA para conquistar un planeta deshabitado y construir su imperio.
            </p>
            <p>El juego se desarrolla en un futuro lejano donde la tierra apenas es apta para la vida.
                Tú y otros miembros del 1% solo querían ver como su valor de bolsa de sus empresas iba hacia Arriba, muy Arriba, pero ninguno
                se dio cuenta de que los recursos naturales de la Tierra iban cada vez más Abajo y Abajo. Ahora, tras haberte
                marchado del planeta, te tocará enfrentarte a otros ricachones mientras expandís vuestros ejercitos de Izquierda a Derecha.
                Hasta que al final solo quede uno. ¿Podrás Batir a todos y Aguantar hasta ser el último en pie?
            </p>
            <img
                className="about-screenshot"
                src={pantallaInicio}
                alt="Pantalla de inicio de Capital and Steel"
            />
            {mostrarSecreto && (
                <div className="about-secret-overlay" role="status">
                    <svg
                        className="about-secret-arrow"
                        viewBox="0 0 1000 1000"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <defs>
                            <marker
                                id="about-secret-arrowhead"
                                viewBox="0 0 10 10"
                                refX="8"
                                refY="5"
                                markerWidth="12"
                                markerHeight="12"
                                orient="auto"
                                markerUnits="userSpaceOnUse"
                            >
                                <path className="about-secret-arrowhead" d="M 0 0 L 10 5 L 0 10 Z"/>
                            </marker>
                        </defs>
                        <path
                            className="about-secret-arrow-line"
                            d="M 0 1000 L 180 880 L 300 790 L 400 650 L 500 500"
                            pathLength="1"
                            markerEnd="url(#about-secret-arrowhead)"
                        />
                    </svg>
                    <a
                        className="about-secret-link"
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ¡Has encontrado el secreto! Haz clic aquí para saber mucho más del juego.
                    </a>
                </div>
            )}
        </div>
    );
}