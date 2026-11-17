import {useTranslation} from 'react-i18next';
import {ProjectGrid} from "../components/Project/ProjectGrid.jsx";
import {projects} from "../data/Projects.js";

export default function Marketing() {
    const {t} = useTranslation('pages');

    return (
        <div id="Marketing">
            <h1>Estrategia de marketing</h1>

            <p> La estrategia principal de marketing que se va a seguir para Capital & Steel se basará en un kickstarter para atraer
                no solo un apoyo económico para el desarrollo sino también para crear una comunidad de fans del juego. A su vez,
                estos fans podrán reunirse y relacionarse en un canal de discord.
            </p>
            <p>Para atraer al público objetivo de Capital & Steel se realizará una campaña en redes, realizando publicaciones
                periódicamente en comunidades de juegos inide, pixel art o juegos de estrategia en reddit, así como en las 
                redes sociales del estudio.
            </p>
            <p>Así mismo, se publicará una página en Steam para aumentar la visibilidad del proyecto y se realizará un dev blog
                en la página web con el fin de crear expectativa con el juego y mantener la atención de los fans y el público 
                objetivo ya interesado en nuestro juego.
            </p>
            <h1>Público objetivo</h1>
            <p>El público objetivo de Capital & Steel es fans de los juegos de estrategia por turnos. Jugadores que
                hayan jugado juegos como las sagas Fire Emblem o Advance Wars disfrutarán de nuestro juego

            </p>
        </div>
    );
}