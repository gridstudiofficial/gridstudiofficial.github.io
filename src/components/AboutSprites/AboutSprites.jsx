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
            <SpriteIdle
                frames={idleVerde}
                className="about-sprite-green"
            />

            <SpriteIdle
                frames={idleRojo}
                className="about-sprite-red"
            />
        </div>
    );
}