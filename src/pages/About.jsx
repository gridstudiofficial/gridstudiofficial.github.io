import {useTranslation} from 'react-i18next';
import {ProjectGrid} from "../components/Project/ProjectGrid.jsx";
import {projects} from "../data/Projects.js";

export default function About() {
    const {t} = useTranslation('pages');

    return (
        <div id="about">
            <h1>Capital and steel</h1>
            <p> Capital and steel es un juego de estrategia por turnos en el que los jugadores luchan
                contra otras personas o la IA para conquistar un planeta deshabitado y construir su imperio.
            </p>
            <p>El juego se desarrolla en un futuro lejano donde la tierra apenas es apta para la vida.
                Tú formas parte del 1% más rico y te marchaste de la tierra en busca de otro planeta. Sin embargo,
                no eras el único y ahora te tocará luchar contra otros por el derecho a destruir el siguiente planeta.
            </p>
        </div>
    );
}