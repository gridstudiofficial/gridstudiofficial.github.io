
import './Marketing.css';
import twitterLogo from '../../public/projects/new-twitter-x-logo-twitter-icon-x-social-media-icon-free-png.webp';
import redditLogo from '../../public/projects/reddit-logo-reddit-icon-transparent-free-png.webp';
import steamLogo from '../../public/projects/Steam_icon_logo.svg.webp';
import companyLogo from '../../public/grid_studio_logo/Grid Studio Icon White.svg';
const kickstarterLogo = '/projects/kickstarter_logo.png';
const discordLogo = '/projects/discord-logo-discord-icon-transparent-free-png.png';

export default function Marketing() {
    return (
        <div id="Marketing" className="marketing-page">

            {/* CABECERA */}
            <section className="marketing-hero">
                <span className="marketing-eyebrow">CAPITAL & STEEL</span>

                <h1>Marketing</h1>

                <p className="marketing-hero-description">
                    Construyendo una comunidad. Dando a conocer nuestro juego.
                </p>

                <p className="marketing-hero-intro">
                    Nuestra estrategia busca dar visibilidad a Capital & Steel,
                    atraer a jugadores interesados en los juegos de estrategia
                    y construir una comunidad que acompañe al proyecto durante
                    su desarrollo.
                </p>
            </section>

            {/* ESTRATEGIA PRINCIPAL */}
            <section className="marketing-strategy">
                <div className="marketing-section-heading">
                    <span className="marketing-eyebrow">01 — ESTRATEGIA</span>
                    <h2>Un proyecto, una comunidad</h2>
                </div>

                <div className="marketing-strategy-grid">

                    <article className="marketing-card marketing-card-primary">
                        <div className="marketing-card-number">
                            <img src={kickstarterLogo} alt="Kickstarter" />
                        </div>

                        <h3>Kickstarter</h3>

                        <p>
                            Nuestra estrategia principal se basará en una campaña
                            de Kickstarter que permita conseguir apoyo económico
                            para el desarrollo y, al mismo tiempo, reunir una
                            comunidad de jugadores interesados en Capital & Steel.
                        </p>

                        <span className="marketing-card-tag">
                            Financiación y comunidad
                        </span>
                    </article>

                    <article className="marketing-card">
                        <div className="marketing-card-number">
                            <img src={discordLogo} alt="Discord" />
                        </div>

                        <h3>Discord</h3>

                        <p>
                            Los seguidores del proyecto podrán reunirse en un
                            servidor de Discord para relacionarse, compartir
                            opiniones y seguir de cerca el desarrollo del juego.
                        </p>

                        <span className="marketing-card-tag">
                            Comunidad
                        </span>
                    </article>

                </div>
            </section>

            {/* PÚBLICO OBJETIVO */}
            <section className="marketing-audience">
                <div className="marketing-section-heading">
                    <span className="marketing-eyebrow">02 — PÚBLICO OBJETIVO</span>
                    <h2>¿A quién queremos llegar?</h2>

                    <p>
                        Capital & Steel está dirigido principalmente a jugadores
                        que disfrutan de los juegos de estrategia por turnos.
                    </p>
                </div>

                <div className="marketing-audience-grid">

                    <article className="marketing-audience-card">
                        <span className="marketing-audience-symbol">♟</span>

                        <h3>Fans de la estrategia</h3>

                        <p>
                            Jugadores que disfrutan planificando sus movimientos,
                            tomando decisiones tácticas y enfrentándose a otros
                            rivales.
                        </p>
                    </article>

                    <article className="marketing-audience-card">
                        <span className="marketing-audience-symbol">⚔</span>

                        <h3>Fans de los clásicos</h3>

                        <p>
                            Personas que hayan disfrutado de sagas como
                            Fire Emblem o Advance Wars.
                        </p>
                    </article>

                    <article className="marketing-audience-card">
                        <span className="marketing-audience-symbol">▦</span>

                        <h3>Amantes del indie y pixel art</h3>

                        <p>
                            Jugadores interesados en proyectos independientes
                            y juegos con una estética pixel art.
                        </p>
                    </article>

                </div>
            </section>

            {/* CANALES DE DIFUSIÓN */}
            <section className="marketing-channels">
                <div className="marketing-section-heading">
                    <span className="marketing-eyebrow">03 — DIFUSIÓN</span>
                    <h2>Dar a conocer el proyecto</h2>

                    <p>
                        Utilizaremos diferentes canales para llegar a nuestro
                        público objetivo y aumentar la visibilidad del juego.
                    </p>
                </div>

                <div className="marketing-channel-list">

                    <article className="marketing-channel">
                        <div className="marketing-channel-icon">
                            <img src={twitterLogo} alt="Twitter" />
                        </div>
                        <div className="marketing-channel-content">
                            <h3>Redes sociales</h3>

                            <p>
                                Publicaciones periódicas en las redes sociales
                                del estudio para mostrar el proyecto, compartir
                                novedades y atraer nuevos seguidores.
                            </p>
                        </div>

                        <span className="marketing-channel-label">
                            Comunicación
                        </span>
                    </article>

                    <article className="marketing-channel">
                        <div className="marketing-channel-icon">
                            <img src={redditLogo} alt="Reddit" />
                        </div>
                        <div className="marketing-channel-content">
                            <h3>Reddit y comunidades</h3>

                            <p>
                                Participación en comunidades relacionadas con
                                juegos indie, pixel art y estrategia, donde
                                podremos dar a conocer Capital & Steel.
                            </p>
                        </div>

                        <span className="marketing-channel-label">
                            Descubrimiento
                        </span>
                    </article>

                    <article className="marketing-channel">
                        <div className="marketing-channel-icon">
                            <img src={steamLogo} alt="Steam" />
                        </div>
                        <div className="marketing-channel-content">
                            <h3>Steam</h3>

                            <p>
                                La publicación de una página en Steam permitirá
                                aumentar la visibilidad del proyecto y facilitar
                                que los jugadores interesados puedan seguirlo.
                            </p>
                        </div>

                        <span className="marketing-channel-label">
                            Visibilidad
                        </span>
                    </article>

                    <article className="marketing-channel">
                        <div className="marketing-channel-icon">
                            <img src={companyLogo} alt="Logo del estudio" />
                        </div>
                        <div className="marketing-channel-content">
                            <h3>Devlog</h3>

                            <p>
                                Compartiremos periódicamente novedades sobre
                                el desarrollo del juego en nuestra página web,
                                creando expectación y manteniendo el interés
                                de la comunidad.
                            </p>
                        </div>

                        <span className="marketing-channel-label">
                            Desarrollo
                        </span>
                    </article>

                </div>
            </section>



        </div>
    );
}
