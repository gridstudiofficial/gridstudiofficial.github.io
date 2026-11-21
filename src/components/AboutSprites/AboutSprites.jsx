import './AboutSprites.css';

const idleVerde = [
    '/Sprites/characters/normal/green/idle/idle_verde_1.png',
    '/Sprites/characters/normal/green/idle/idle_verde_2.png',
    '/Sprites/characters/normal/green/idle/idle_verde_3.png',
    '/Sprites/characters/normal/green/idle/idle_verde_4.png',
];

const idleRojo = [
    '/Sprites/characters/normal/red/idle/idle_rojo_1.png',
    '/Sprites/characters/normal/red/idle/idle_rojo_2.png',
    '/Sprites/characters/normal/red/idle/idle_rojo_3.png',
    '/Sprites/characters/normal/red/idle/idle_rojo_4.png',
];

const idleHeavyVerde = [
    '/Sprites/characters/heavy/green/idle/heavy_idle_verde_1.png',
    '/Sprites/characters/heavy/green/idle/heavy_idle_verde_2.png',
    '/Sprites/characters/heavy/green/idle/heavy_idle_verde_3.png',
    '/Sprites/characters/heavy/green/idle/heavy_idle_verde_4.png',
];

const idleHeavyRojo = [
    '/Sprites/characters/heavy/red/idle/heavy_idle_rojo_1.png',
    '/Sprites/characters/heavy/red/idle/heavy_idle_rojo_2.png',
    '/Sprites/characters/heavy/red/idle/heavy_idle_rojo_3.png',
    '/Sprites/characters/heavy/red/idle/heavy_idle_rojo_4.png',
];

const idleTanqueVerde = [
    '/Sprites/GreenTank/tank_idle_verde_1.png',
    '/Sprites/GreenTank/tank_idle_verde_2.png',
    '/Sprites/GreenTank/tank_idle_verde_3.png',
    '/Sprites/GreenTank/tank_idle_verde_4.png',
];

const idleTanqueRojo = [
    '/Sprites/RedTank/tank_idle_rojo_1.png',
    '/Sprites/RedTank/tank_idle_rojo_2.png',
    '/Sprites/RedTank/tank_idle_rojo_3.png',
    '/Sprites/RedTank/tank_idle_rojo_4.png',
];

function SpriteIdle({ frames, className }) {
    return (
        <div className={`about-sprite ${className}`}>
            {frames.map((sprite, index) => (
                <img
                    key={index}
                    src={sprite}
                    alt=""
                    className={`about-sprite-frame frame-${index + 1}`}
                />
            ))}
        </div>
    );
}

export default function AboutSprites() {
    return (
        <div className="about-sprites">

            {/* GRUPO ROJO */}
            <SpriteIdle
                frames={idleRojo}
                className="about-sprite-red"
            />

            <SpriteIdle
                frames={idleRojo}
                className="about-sprite-red red-soldier-2"
            />

            <SpriteIdle
                frames={idleRojo}
                className="about-sprite-red red-soldier-3"
            />

            {/* GRUPO VERDE */}
            <SpriteIdle
                frames={idleVerde}
                className="about-sprite-green"
            />

            <SpriteIdle
                frames={idleVerde}
                className="about-sprite-green green-soldier-2"
            />

            <SpriteIdle
                frames={idleVerde}
                className="about-sprite-green green-soldier-3"
            />

            {/* HEAVY:  */}
            <SpriteIdle
                frames={idleHeavyVerde}
                className="about-sprite-heavy-green"
            />

            <SpriteIdle
                frames={idleHeavyRojo}
                className="about-sprite-heavy-red"
            />

            <SpriteIdle
                frames={idleHeavyRojo}
                className="about-sprite-heavy-red heavy-red-extra"
            />

            <SpriteIdle
                frames={idleHeavyVerde}
                className="about-sprite-heavy-green heavy-green-extra"
            />

            {/* Tanques rojos */}
            <SpriteIdle
                frames={idleTanqueRojo}
                className="about-tank about-tank-red tank-red-1"
            />

            <SpriteIdle
                frames={idleTanqueRojo}
                className="about-tank about-tank-red tank-red-2"
            />

            <SpriteIdle
                frames={idleTanqueRojo}
                className="about-tank about-tank-red tank-red-3"
            />

            {/* Tanques verdes */}
            <SpriteIdle
                frames={idleTanqueVerde}
                className="about-tank about-tank-green tank-green-1"
            />

            <SpriteIdle
                frames={idleTanqueVerde}
                className="about-tank about-tank-green tank-green-2"
            />

            <SpriteIdle
                frames={idleTanqueVerde}
                className="about-tank about-tank-green tank-green-3"
            />

        </div>
    );

}