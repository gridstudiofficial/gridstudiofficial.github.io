# Introducción

## Sobre este document

Este es el **Documento de Diseño de Juego** de **Grid Tactics**. El control de versiones de este documento tiene rama
propia en el repositorio de la web del juego.

El control de versiones de la web sigue el siguiente esquema:

```mermaid
gitGraph
    commit
    branch dev
    checkout dev
    commit
    branch gdd
    commit
    checkout dev
    commit
    branch feature
    commit
    checkout main
    merge dev
    checkout dev
    commit
    checkout feature
    commit
    checkout dev
    merge feature
    checkout gdd
    commit
    commit
    checkout dev
    merge gdd
    checkout main
    merge dev
    checkout dev
    commit
    checkout gdd
    commit
    checkout dev
    merge gdd
    checkout main
    merge dev
```

> La rama `main` contiene únicamente lanzamientos completos. Esta rama se sube automáticamente a github pages.
>
> La rama `dev` es la rama de desarrollo. De esta salen las ramas `gdd` y `feature`.
>
> La carpeta `feature` contiene las ramas de nuevas características de la web.
>
> El GDD se modifica únicamente en la rama `gdd`.

# Grid Tactics

## Descripción general

Grid Tactics es un juego de estrategia en cuadrícula donde el o los jugadores se enfrentan a otros o al entorno para
cumplir uno o vários objetivos. Se rige por un sistema de _fatiga_ que determina la próxima entidad en actuar.

El jugador puede avanzar por una serie de niveles que enseñan a jugar y demuestran diversas mecánicas y situaciones de
juego.

## Ciclo de juego

```mermaid
flowchart TB
    A(["Inicio de ronda"]) --> B["Reducir fatiga de las unidades"]
    B --> C{"¿Alguna unidad<br>tiene fatiga = 0?"}
    C -- No --> B
    C -- Sí --> D["Jugador activo elige<br>una unidad disponible"]
    D --> E{"¿Qué acción realiza?"}
    E --> F["Atacar"] & G["Moverse"] & H["Otros"] & I["Esperar / Nada"]
    F --> J["Resolver acción"]
    G --> J
    H --> J
    I --> J
    J --> K["La unidad vuelve a ganar fatiga"]
    K --> L{"¿Se cumple una<br>condición de victoria?"}
    L -- Sí --> M{"¿Hay varios<br>jugadores ganadores?"}
    M -- No --> N(["Victoria del jugador"])
    M -- Sí --> O(["Victoria compartida / Empate"])
    L -- No --> P{"¿Quedan unidades<br>con fatiga = 0?"}
    P -- Sí --> D
    P -- No --> Q["Final de ronda"]
    Q --> R["Aplicar efectos de fin de ronda"]
    R --> S["Avanzar al siguiente jugador"]
    S --> B
```
## Diagrama de navegación de usuario

```mermaid
flowchart TB
    subgraph SG_LEVELS["🗺️ Modo Campaña"]
        LEVEL_LIST["Lista secuenciada de niveles"]
        LEVELS["Selector de niveles"]
        SELECT_LEVEL["Seleccionar nivel"]
    end
    subgraph SG_CUSTOM["⚙️ Partida personalizada"]
        CUSTOM_MENU["Menú de partida personalizada"]
        CUSTOM["Partida personalizada"]
        CREATE_GAME["Crear partida"]
        LOAD_GAME["Cargar partida"]
        SAVED_GAME["Usar partida guardada"]
        CONFIG_GAME["Configurar partida"]
        SELECT_MAP["Seleccionar mapa"]
    end
    subgraph SG_MAPS["🧩 Gestión de mapas"]
        CREATE_MAP["Crear mapa"]
        EXPORT_MAP["Exportar mapa"]
        IMPORT_MAP["Importar mapa"]
        MAP_MENU["Gestionar mapas"]
        MAP_EDITOR["Editor de mapas"]
        SAVE_MAP["Guardar mapa"]
    end
    subgraph SG_GALLERY["📖 Compendio de unidades"]
        ALL_UNITS["Unidades del juego"]
        MATCH_UNITS["Unidades de una partida jugada"]
        GALLERY_MENU["Compendio de unidades"]
        UNIT_INFO["Ficha de unidad"]
    end
    subgraph SG_SETTINGS["🔧 Ajustes"]
        AUDIO["Audio"]
        VIDEO["Vídeo"]
        CONTROLS["Controles"]
        GAMEPLAY["Opciones de juego"]
        SETTINGS_MENU["Ajustes"]
    end
    subgraph SG_PAUSE["⏸️ Pausa"]
        SAVE["Guardar partida"]
        PAUSE["Partida pausada"]
    end
    subgraph SG_GAMEPLAY["🎮 Partida en curso"]
        TURN["Turno / estado actual"]
        GAME["Partida iniciada"]
        PLAY_TURN["Jugar turno"]
        CHECK_WIN{"¿Condición de victoria o derrota?"}
        VICTORY["Pantalla de resultados"]
        DEFEAT["Pantalla de derrota"]
        SG_PAUSE
    end
    START(["Entrada al juego"]) --> MENU["Menú principal"]
    LEVELS --> LEVEL_LIST
    LEVEL_LIST --> SELECT_LEVEL
    SELECT_LEVEL --> LEVEL_INFO["Ver información de partida"]
    SELECT_LEVEL -- Atrás --> LEVEL_LIST
    CUSTOM --> CUSTOM_MENU
    CUSTOM_MENU --> CREATE_GAME & LOAD_GAME & SAVED_GAME & MAP_MENU
    CREATE_GAME --> CONFIG_GAME
    CONFIG_GAME --> SELECT_MAP
    SELECT_MAP -- Atrás --> CONFIG_GAME
    LOAD_GAME -- Atrás --> CUSTOM_MENU
    SAVED_GAME -- Atrás --> CUSTOM_MENU
    MAP_MENU --> CREATE_MAP & EXPORT_MAP & IMPORT_MAP
    CREATE_MAP --> MAP_EDITOR
    MAP_EDITOR --> SAVE_MAP
    SAVE_MAP --> MAP_MENU
    EXPORT_MAP --> MAP_MENU
    IMPORT_MAP --> MAP_MENU
    GALLERY_MENU --> ALL_UNITS & MATCH_UNITS
    ALL_UNITS --> UNIT_INFO
    MATCH_UNITS --> UNIT_INFO
    UNIT_INFO --> GALLERY_MENU
    SETTINGS_MENU --> AUDIO & VIDEO & CONTROLS & GAMEPLAY
    AUDIO -- Volver --> SETTINGS_MENU
    VIDEO -- Volver --> SETTINGS_MENU
    CONTROLS -- Volver --> SETTINGS_MENU
    GAMEPLAY -- Volver --> SETTINGS_MENU
    GAME --> TURN
    TURN --> PLAY_TURN & GALLERY_MENU & PAUSE
    PLAY_TURN --> CHECK_WIN
    CHECK_WIN -- Continúa --> TURN
    CHECK_WIN -- Victoria --> VICTORY
    CHECK_WIN -- Derrota --> DEFEAT
    PAUSE --> SAVE & SETTINGS_MENU & EXIT["Salir de la partida"]
    SAVE --> PAUSE
    PAUSE -- Atrás --> TURN
    MENU --> LEVELS & CUSTOM & SETTINGS_MENU & GALLERY_MENU
    LEVEL_LIST -- Atrás --> MENU
    LEVEL_INFO -- Atrás --> LEVEL_LIST
    LEVEL_INFO --> GAME
    GAME -- Atrás --> LEVEL_INFO
    CUSTOM_MENU -- Atrás --> MENU
    MAP_MENU -- Atrás --> CUSTOM_MENU
    SELECT_MAP --> LEVEL_INFO
    LOAD_GAME --> LEVEL_INFO
    SAVED_GAME --> LEVEL_INFO
    CONFIG_GAME -- Cancelar --> CUSTOM_MENU
    GALLERY_MENU -- Si viene del menú --> MENU
    GALLERY_MENU -- Si viene de partida --> TURN
    SETTINGS_MENU -- Si viene del menú --> MENU
    SETTINGS_MENU -- Si viene de pausa --> PAUSE
    EXIT --> MENU
    VICTORY --> EXIT
    DEFEAT --> EXIT
```

## Elementos de juego

# Monetización

# Recursos del documento

* [Mermaid visual editor](https://mermaid.ai/products/visual-editor)
* [Mermaid online editor](https://www.mermaideditor.io/)
