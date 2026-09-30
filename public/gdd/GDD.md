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

Grid Tactics es un juego de estrategia en cuadrícula donde el o los jugadores se enfrentan a otros equipos o al entorno
para cumplir uno o vários objetivos. Se rige por un sistema de _fatiga_ que determina la próxima entidad en actuar.

Es un juego 2D con vista _top-down_.

El jugador puede avanzar por una serie de niveles que enseñan a jugar y demuestran diversas mecánicas y situaciones de
juego.

### Público objetivo

Jugadores que han jugado videojuegos anteriormente, pero no sean ávidos consumidores (jugadores casuales).

Adultos y jóvenes.

## Objetivo del producto

### MVP

El **Producto Mínimo Viable** debe permitir al usuario jugar una `partida`. La escena partida de Unity debe poder
recibir los
datos indispensables de una partida e iniciarla. Los elementos indispensables de una partida son:

* `Mapa`.
* `Reglas de juego`.
* `Condición de victoria`.
* `Equipos` con sus respectivos `jugadores`.

### MMP

El **Producto Mínimo Comercializable** debe contener:

* Una lista de niveles jugables que enseñen al usuario a jugar.
* Todas las herramientas de interfaz y navegación necesarias para jugar una partida y seleccionar un nivel. Esto incluye
  los ajustes del juego y elementos de accesibilidad.

### MAP

El **Producto Mínimo Asombroso** debe permitir lo siguiente:

* `Pass and Play` en un solo dispositivo.
* Creador de `partidas personalizadas`.
* Creador de `mapas`.
* Exportar e `importar partidas` con o sin guardado.
* Exportar e `importar mapas`.

## Especificaciones técnicas

El juego utiliza el motor de juego Unity.

* Idioma primario inglés con el uso
  del [Package Localization](https://docs.unity3d.com/Packages/com.unity.localization@2.0/manual/index.html) y se
  extiende al castellano en las fases finales de desarrollo.
* La interacción se hace a través del
  nuevo [Package Input System](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.20/manual/index.html) the Unity
  para simplificar la interacción con ratón y pantalla táctil.
* El sistema de carpetas de Unity es semántico.

## Arte

El juego es 2D con pixel art a baja resolución (16px de ancho, orientativo).

Vista superior como los juegos de Game Boy Advance _Pokemon Esmeralda_ o _Advance Wars_.

## Estéticas y contexto de juego

El jugador y sus rivales encarnan corporaciones cuyo objetivo es la explotación de recursos.

No existe un estado tradicional. Las corporaciones son las potencias soberanas gracias a su enorme capital y potencia
militar. Las batallas militares sustituyen a la competencia de mercado convencional. La **_guerra corporativa_** es
literal.

> Propuesta de título de juego siguiendo esta narrativa:
> * Corp Wars
> * Corp Conflict
> * Capital & Steel

La explotación de recursos y control de rutas comerciales estratégicas es el motivador principal del conflicto.

Además de las corporaciones, existen grupos de mercenarios independientes. Ciertos niveles pueden contar con distintos
equipos formados por mercenarios independientes. Narrativamente, en futuros niveles estos pueden hacer equipo con
corporaciones rivales o el usuario para mostrar su falta de fidelidad a un bando.

Otras entidades posibles son vida salvaje o monstruos mutantes. La guerra corporativa resulta en el uso de energía y
armas nucleares que alteran el entorno.

### Papel del usuario

El usuario toma el papel de líder de su propia empresa/grupo mercenario y lucha por sus propios intereses aliándose con
aquellos grupos que comparten un objetivo común.

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

> Para una mejor lectura, copia y pega el código `mermaid` en [esta web](https://mermaid.live/).

## Mecánicas

### Ciclo de juego

Ciclo de juego de un jugador en un turno.

```mermaid
flowchart TB
    START(["Inicio de ronda"]) --> B["Reducir fatiga de las unidades"]
    B --> C{"¿Alguna unidad<br>tiene fatiga = 0?"}
    C -- No --> B
    C -- Sí --> D["Jugador activo elige<br>una unidad disponible"]
    D --> WHAT_ACTION?{"¿Qué acción realiza?"}
    WHAT_ACTION? --> ATTACK["Atacar"] & MOVE["Moverse"] & OTHER["Otros"] & WAIT["Esperar / Nada"] --> SOLVE_ACTION["Resolver acción"]
    SOLVE_ACTION --> OTHER_ACTION?{"¿Puede hacer<br>otra acción?"}
    OTHER_ACTION? -- No --> GAIN_FATIGUE["La unidad vuelve a<br>ganar fatiga"]
    OTHER_ACTION? -- Si --> WHAT_ACTION?
    GAIN_FATIGUE --> L{"¿Se cumple una<br>condición de victoria?"}
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

### Fatiga

Todas las entidades capaces de actuar se rigen por el sistema de fatiga. Cuando una entidad tiene fatiga 0 puede actuar.
Tanto las `unidades` como las `propiedades` se rigen por este sistema. Tras una acción, se le añadirá fatiga a la
entidad que actuó.

Caso de uso extremo: Si se quiere que un volcán erupcione de vez en cuando, este debe ser una `propiedad` que forma su
propio `equipo`. Se encola en la lista de entidades con fatiga y su IA de juego realiza la acción de erupción cada vez
que
tiene la oportunidad. Esta acción le puede añadir una cantidad de fatiga aleatória en un rango.

### Movimiento por resistencia

Las `unidades` tienen una capacidad de movimiento numérica. Las `tiles` tienen una capacidad de resistencia numérica.
Una unidad avanza menos casillas con más resistencia (ej. una montaña) que una con poca (ej. una carretera).

### Orientación de unidad

> <span style=color:red>Esta mecánica está en duda. Debe probarse y discutirse más a fondo</span>

El jugador decide a qué dirección (Arriba, Abajo, Derecha, Izquierda), mira una `unidad` cuando termina su turno.

Girar una unidad consume su recurso de capacidad de movimiento.

Una unidad puede tener restricción de ataque. Véase, un tanque que solo puede atacar hacia las casillas que mira.

La visibilidad de una unidad puede corresponder con la dirección que mira. Véase, un tanque que solo puede mirar una
casilla en todas direcciones y dos más hacia su frente.

### Niebla de guerra

Una `tile` puede o no ser visible. Las unidades y propiedades de un jugador aportan visibilidad. Las unidades o color
del propietario de una propiedad no son visibles si no se tienen unidades que tengan visibilidad en esos `tiles`.

## Elementos de juego

El juego se rige por `partidas`. Un nivel es una partida.

Los distintos elementos siguen la siguiente relación

```mermaid
erDiagram
    MATCH ||--|| GAME_RULES: has
    MATCH ||--|{ VICTORY_CONDITION: has
    MATCH ||--|| MAP: has
    MATCH ||--|{ TEAM: has
    TEAM ||--|{ PLAYER: has
    PLAYER |o--o{ UNIT: owns
    PLAYER |o--o{ PROPERTY: owns
    MAP ||--o{ UNIT: contains
    MAP ||--o{ PROPERTY: contains
    MAP ||--|{ TILE: "is made of"
    TILE ||--|| BASE: has
    TILE ||--o| TERRAIN: "may have"
    TILE ||--o| PROPERTY: "may have"
    PROPERTY ||--o| FACTORY: "can be"
    VICTORY_CONDITION }o--o{ TEAM: "applies to"
    VICTORY_CONDITION }o--o{ PLAYER: "applies to"
    VICTORY_CONDITION |o--o{ VICTORY_CONDITION: "composed of (AND/OR)"
```

### Partida

Una partida está compuesta por un `mapa`, `equipos`, `reglas` y al menos una `condición de victoria`.

### Equipo

Una `partida` debe tener al menos un equipo. Un equipo está compuesto por al menos un `Jugador`.

Este esquema permite crear partidas en las que varios jugadores hacen equipo.

En la lógica del juego, si se quiere tener un grupo de mónstruos ajenos hostiles al resto de equipos, estos forman su
propio equipo y son controlados por un `jugador de IA`.

### Jugador

Un `Jugador` siempre es miembro de un `equipo`. Puede ser humano o IA.

Un usuario interactúa con el juego a través de esta clase.

### Unidad

Una `unidad` es una entidad controlable por un `jugador` en el `mapa`.

Un `jugador` puede tener `unidades`. Un jugador puede comenzar con unidades en el tablero si lo determina la partida o
puede crearlas en `fábricas`.

Diagrama de clase preliminar de `Unit`.

```mermaid
classDiagram
    class Unit {
        <<abstract>>
        +string Id
        +Player? Owner
        +UnitDefinition Definition
        +int CurrentHP
        +int Fatigue
        +UnitStatus Status
        +IMovementProfile Movement
        +List~IWeapon~ Weapons
        +Vector2Int Position*(solo lectura)
        +GetAvailableActions(GameState) List~IAction~
        +TakeDamage(int, GameState, Unit?)
        +Heal(int, GameState)
        +GetComponent~T~() T
        +RemoveComponent~T~()
        #OnActivationStart()
        #OnActivationEnd()
    }
    class Infantry
    class Mech
    class Vehicle {
        <<abstract>>
    }
    class Tank
    class APC
    class Artillery
    class AntiAir
    class Aircraft {
        <<abstract>>
    }
    class Fighter
    class Helicopter
    class Glider
    class Ship {
        <<abstract>>
    }
    class Battleship
    class Lander
    class Submarine

    Unit <|-- Infantry
    Unit <|-- Mech
    Unit <|-- Vehicle
    Unit <|-- Aircraft
    Unit <|-- Ship
    Vehicle <|-- Tank
    Vehicle <|-- APC
    Vehicle <|-- Artillery
    Vehicle <|-- AntiAir
    Aircraft <|-- Fighter
    Aircraft <|-- Helicopter
    Aircraft <|-- Glider
    Ship <|-- Battleship
    Ship <|-- Lander
    Ship <|-- Submarine
    Unit --> "1" IMovementProfile
    Unit --> "0..*" IWeapon
    Unit --> "0..*" IUnitComponent
```

### Propiedad

Una `propiedad` es una construcción desplegada en un `mapa`. Esta puede pertenecer o no a un `jugador`.

#### Fábrica

Una `fábrica` es una entidad en el `mapa`.

Un `jugador` puede ser dueño de una `fábrica`. El jugador que la controle, puede crear unidades.

Al igual que una `unidad`, una `fábrica` se pone en la cola de fatiga para actual.

```mermaid
classDiagram
    class ICapturable {
        <<interface>>
        +ReduceCaptureProgress(amount, capturer)
        +CompleteCapture(newOwner, state)
    }

    class ISchedulable {
        <<interface>>
    }

    class IPropertyComponent {
        <<interface>>
    }

    class Property {
        +string Id
        +Player Owner
        +Vector2Int Position
        +int Fatigue
        +PropertyDefinition Definition
        +int CaptureProgress
        +int MaxCaptureProgress
        +GetComponent~T~()
        +AddComponent(component)
        +ReduceCaptureProgress(amount, capturer)
        +CompleteCapture(newOwner, state)
    }

    class PropertyDefinition {
        +string Id
        +int MaxCaptureProgress
        +int IdleProductionFatigue
        +int ProductionTickFatigue
    }

    class ProductionBay {
        +IProductionFilter Filter
        +IBuildTimeStrategy TimeStrategy
        +ProductionOrder CurrentOrder
        -Queue~UnitDefinition~ _pending
        +CanBuild(def)
        +StartOrder(def)
        +Enqueue(def)
        +Advance(state, property)
    }

    class ProductionOrder {
        <<record>>
        +UnitDefinition Definition
        +int TurnsRemaining
    }

    class IProductionFilter {
        <<interface>>
        +Allows(def)
    }

    class CategoryProductionFilter {
        -HashSet~UnitCategory~ _allowed
        +Allows(def)
    }

    class WhitelistProductionFilter {
        -HashSet~string~ _ids
        +Allows(def)
    }

    class IBuildTimeStrategy {
        <<interface>>
        +GetBuildTime(def)
    }

    class DefaultBuildTimeStrategy {
        +GetBuildTime(def)
    }

    class OverrideBuildTimeStrategy {
        -Dictionary~string,int~ _overrides
        -IBuildTimeStrategy _fallback
        +GetBuildTime(def)
    }

    class UnitDefinition {
        +string Id
        +UnitCategory Category
        +int MaxHP
        +int Cost
        +int BuildTime
        +int FuelCapacity
    }

    class UnitCategory {
        <<enumeration>>
        LightVehicle
        HeavyVehicle
        Naval
        Infantry
        Artillery
    }

    class Unit {
        +Vector2Int Position
    }

    class Scheduler {
        +Register(schedulable)
        +ActivateNext()
    }

    class Player

    ICapturable <|.. Property
    ISchedulable <|.. Property
    Property *-- PropertyDefinition
    Property o-- IPropertyComponent
    IPropertyComponent <|.. ProductionBay
    ProductionBay *-- ProductionOrder
    ProductionBay --> IProductionFilter
    ProductionBay --> IBuildTimeStrategy
    ProductionOrder --> UnitDefinition
    IProductionFilter <|.. CategoryProductionFilter
    IProductionFilter <|.. WhitelistProductionFilter
    IBuildTimeStrategy <|.. DefaultBuildTimeStrategy
    IBuildTimeStrategy <|.. OverrideBuildTimeStrategy
    OverrideBuildTimeStrategy --> IBuildTimeStrategy
    UnitDefinition --> UnitCategory
    Board o-- Property
    Board o-- Unit
    Scheduler --> ISchedulable
    Property --> Player

```

### Mapa

Un `mapa` está compuesto de `tiles` y contiene todas las `entidades` (`unidades` y `propiedades`).

Una `partida` tiene un mapa de juego. Todos los mapas son una cuadrícula rectangular.

#### Tile

Una `tile` se compone de la `base` y adicionalmente puede tener `terreno` y `propiedad`.

```mermaid
flowchart TD
    TILE["TILE"]
    TILE --> BASE["Base<br/>Siempre presente"]
    TILE -.-> TERRAIN["Terreno<br/>Opcional"]
    TILE -.-> PROPERTY["Propiedad<br/>Opcional"]
    TILE -.-> PATH["Propiedad de camino"]
    PATH --> TYPE["Tipo de camino"]
    PATH --> DIRECTION["Dirección / conexiones"]
    TYPE --> ROAD["Carretera"]
    TYPE --> RAIL["Rail"]
    TYPE --> BRIDGE["Puente"]
    TYPE --> OTHER["..."]
    DIRECTION --> SPRITE["Sprite según dirección"]
    SPRITE --> S1["Norte"]
    SPRITE --> S2["Sur"]
    SPRITE --> S3["Este"]
    SPRITE --> S4["Oeste"]
    SPRITE --> S5["Curva / conexiones"]
    SPRITE --> S6["Cruce / múltiples conexiones"]
    style TILE fill: #4f46e5, color: #fff, stroke: #312e81
    style BASE fill: #94a3b8, color: #fff, stroke: #64748b
    style TERRAIN fill: #65a30d, color: #fff, stroke: #3f6212
    style PROPERTY fill: #d97706, color: #fff, stroke: #92400e
    style PATH fill: #dc2626, color: #fff
    style TYPE fill: #ef4444, color: #fff
    style DIRECTION fill: #ef4444, color: #fff
    style SPRITE fill: #7c3aed, color: #fff
```

### Reglas de juego

Una `partida` tiene `reglas de juego`. Estas especifican ciertos comportamientos de la partida.

Algunas de las reglas de juego tienen que ver con la _niebla de guerra_ y las interacciones de un jugador con otros de
su equipo.

| Regla                        | Opción 1                                                                                                   | Opción 2                                                                          |
|------------------------------|------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| Niebla de guerra             | Si                                                                                                         | No                                                                                |
| Niebla de guerra compartida  | Si<br>La visibilidad de un equipo es común a todos sus miembros.                                           | No                                                                                |
| Atravesar unidades aliadas   | Si<br>Las unidades pueden caminar a través de casillas ocupadas por unidades de ese jugador.               | No                                                                                |
| Atravesar unidades de equipo | Si<br>Las unidades pueden caminar a través de casillas ocupadas por unidades de otros miembros del equipo. | No                                                                                |
| Fondos iniciales             | Por defecto                                                                                                | Personalizados<br>Común a todos los jugadores o específicos por equipo o jugador. |

#### Condición de victoria

Una partida necesita al menos una `condición de victoria`.

Las condiciones de victoria pueden seguir reglas booleanas `AND` y `OR`. Una partida puede tener varias condiciones de
victoria.

Las condiciones de victoria pueden ser comunes a todos los `equipos` y `jugadores` o diferentes.

Ejemplos de condiciones de victoria:

* Eliminar todas las unidades del `equipo [NOMBRE DE EQUIPO]`.
* Eliminar todas las unidades del `jugador [NOMBRE DE JUGADOR]`.
* Controlar cierta `propiedad`.
* Tener más de `n` unidades.
* No tener menos de `n` unidades.
* Llevar a cierta `unidad` a una cierta `tile`.
* Realizar `otra/s condición/es de victoria` antes de `n turnos/tiempo`.

El sistema permite realizar condiciones de victoria asimétricas como estas:

* Equipo 1 (Jugador Humano 1)
* Equipo 2 (Jugador IA 2)

Condición OR de victoria `Equipo 1`:

* Controlar cierta `propiedad`: Cuartel General `Jugador IA 2`.
* Eliminar todas las unidades del `Equipo 2`.

Condiciones OR de victoria `Equipo 2`:

* Controlar cierta `propiedad`: Cuartel General `Jugador Humano 1`.
* Llevar a cierta `unidad` a una cierta `tile`.

## Monetización

Uso de modelo _Shareware_ / _Try Before You Buy_ igual que **DOOM** en su lanzamiento original.

Versión limitada del juego que permite jugar ciertos niveles iniciales. Las partidas personalizadas tienen limitaciones,
pero no impiden que puedan jugar hasta dos personas con pass and play. No es posible crear mapas ni importar o exportar
partidas.

Pago único para acceso completo a todas las características del juego.

Se abre la posibilidad a expandir el juego con expansiones que se compongan de nuevos sets de niveles.

El objetivo es que la mayor cantidad de usuarios prueben el juego y, con las funciones pass and play, puedan jugar con
otras personas sin que tengan que instalar el juego. Los niveles iniciales deben enseñar al primero a jugar para poder
explicar brevemente al segundo.

# Recursos del documento

* [Mermaid visual editor](https://mermaid.ai/products/visual-editor)
* [Mermaid online editor](https://www.mermaideditor.io/)
