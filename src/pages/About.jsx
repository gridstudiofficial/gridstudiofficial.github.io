
import { useEffect, useState } from 'react';
import pantallaInicio from '../assets/socials/PantallaInicio.png';
import './About.css';
import AboutSprites from '../components/AboutSprites/AboutSprites';

export default function About() {
    const [mostrarSecreto, setMostrarSecreto] = useState(false);

    useEffect(() => {
        const codigo = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

        let pos = 0;

        function detectarTecla(event) {
            const tecla = event.key.length === 1
                ? event.key.toLowerCase()
                : event.key;

            pos = tecla === codigo[pos]
                ? pos + 1
                : (tecla === codigo[0] ? 1 : 0);

            if (pos === codigo.length) {
                setMostrarSecreto(true);
                pos = 0;
            }
        }

        window.addEventListener('keydown', detectarTecla);

        return () => window.removeEventListener('keydown', detectarTecla);
    }, []);

    return (
        <>
        <AboutSprites />

    <div id="about" className="about-page">

            {/* INTRODUCCIÓN */}
            <section className="about-hero">
                <span className="about-eyebrow">EL JUEGO</span>

                <h1>Capital &amp; Steel</h1>

                <p className="about-hero-description">
                    Construye tu imperio. Conquista el planeta.
                    Sobrevive a tus rivales.
                </p>

                <p className="about-intro">
                    Capital &amp; Steel es un juego de estrategia por turnos
                    en el que lucharás contra otros jugadores o contra la IA
                    para conquistar un planeta deshabitado y construir tu imperio.
                </p>
            </section>

            {/* HISTORIA */}
            <section className="about-lore">
                <div className="about-section-heading">
                    <span className="about-eyebrow">EL CONTEXTO</span>
                    <h2>Un nuevo mundo. Una nueva oportunidad.</h2>
                </div>

                <div className="about-lore-content">
                    <p>
                        En un futuro lejano, la Tierra apenas es apta para la vida.
                        Tú y otros miembros del 1% solo queríais ver cómo el valor
                        de vuestras empresas subía, muy arriba.
                    </p>

                    <p>
                        Pero mientras las bolsas ascendían, los recursos naturales
                        de la Tierra desaparecían cada vez más rápido.
                    </p>

                    <p>
                        Ahora, tras abandonar vuestro planeta, os toca enfrentaros
                        a otros ricachones en un mundo nuevo. Expande tus ejércitos,
                        conquista territorios y lucha hasta que solo quede uno.
                    </p>

                    <p className="about-lore-ending">
                        ¿Podrás batir a todos y aguantar hasta ser el último en pie?
                    </p>
                </div>
            </section>

            {/* CARACTERÍSTICAS */}
            <section className="about-features">
                <div className="about-section-heading">
                    <span className="about-eyebrow">LA EXPERIENCIA</span>
                    <h2>¿Qué te espera?</h2>
                </div>

                <div className="about-feature-grid">

                    <article className="about-feature-card">
                        <span className="about-feature-number">01</span>
                        <h3>Estrategia por turnos</h3>
                        <p>
                            Planifica tus movimientos, toma decisiones
                            y prepara tu siguiente jugada.
                        </p>
                    </article>

                    <article className="about-feature-card">
                        <span className="about-feature-number">02</span>
                        <h3>Contra la IA</h3>
                        <p>
                            Pon a prueba
                            tus estrategias contra la inteligencia artificial.
                        </p>
                    </article>

                    <article className="about-feature-card">
                        <span className="about-feature-number">03</span>
                        <h3>Construye tu imperio</h3>
                        <p>
                            Expande tus dominios por un nuevo planeta
                            y lucha por convertirte en el último superviviente.
                        </p>
                    </article>

                </div>
            </section>

            {/* CAPTURA DEL JUEGO */}
            <section className="about-game-preview">
                <div className="about-section-heading">
                    <span className="about-eyebrow">UNA VISTA AL JUEGO</span>
                    <h2>Tu imperio comienza aquí</h2>
                </div>

                <div className="about-screenshot-container">
                    <a
                        href="https://gridstudio.itch.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-screenshot-link"
                    >
                        <img
                            className="about-screenshot"
                            src={pantallaInicio}
                            alt="Jugar a Capital & Steel en itch.io"
                        />
                    </a>
                </div>
            </section>

            {/* EASTER EGG */}
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
                                <path
                                    className="about-secret-arrowhead"
                                    d="M 0 0 L 10 5 L 0 10 Z"
                                />
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
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ¡Has encontrado el secreto!
                        Haz clic aquí para saber mucho más del juego.
                    </a>

                </div>
            )}

        </div>

        </>

    );
}
