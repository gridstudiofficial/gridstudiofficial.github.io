
import { useTranslation } from 'react-i18next';
import './Programming.css';


export default function Programming() {
    const { t } = useTranslation('pages');

    const codePlayer = `public abstract class Player
{
    public string Id { get; }
    public Team Team { get; internal set; } = null!;
    public bool IsDefeated { get; internal set; }
    public int Funds { get; internal set; }
    public UnitSpriteSet SpritePack { get; set; } = null!;

    public abstract Task<IAction> ChooseAction(Unit unit, IEnumerable<IAction> options, GameState state);
}

public sealed class HumanPlayer : Player { }
public sealed class AIPlayer : Player { }`;

    const codeEntity = `Entity
{
public interface IPositioned { Vector2Int Position { get; } }


public interface IDamageable
{
    int CurrentHP { get; }
    int MaxHP { get; }
    void TakeDamage(int amount, GameState state, Unit? attacker = null);
}

public interface IHealable : IDamageable
{
    void Heal(int amount, GameState state);
}

public interface ISchedulable
{
    string Id { get; }
    Player Owner { get; }
    int Fatigue { get; }
}
    }`;

    const codeAction=`Action

public sealed record ActionContext(Unit Actor, GameState State, Vector2Int? Target = null, string? TargetUnitId = null);

public interface IAction
{
    string Label { get; }
    string AnimationKey { get; }
    bool CanExecute(ActionContext ctx);
    void Execute(ActionContext ctx);
    int GetFatigueCost(Unit unit);
}`;

    const codeProperties=`Properties
    
public interface IPropertyComponent { }

public sealed class Property : ICapturable, ISchedulable
{
    public string Id { get; }
    public Player? Owner { get; set; } // null = neutral, cant schedule
    public Vector2Int Position { get; internal set; }
    public int Fatigue { get; internal set; }
    public PropertyDefinition Definition { get; }
    public int CaptureProgress { get; private set; }
    public int MaxCaptureProgress => Definition.MaxCaptureProgress;

    private readonly List<IPropertyComponent> _components = new();
    public T? GetComponent<T>() where T : class, IPropertyComponent => _components.OfType<T>().FirstOrDefault();
    public void AddComponent(IPropertyComponent c) => _components.Add(c);

    public void ReduceCaptureProgress(int amount, Player capturer) => CaptureProgress = Math.Max(0, CaptureProgress - amount);
    public void CompleteCapture(Player newOwner, GameState state)
    {
        var previous = Owner;
        Owner = newOwner;
        CaptureProgress = Definition.MaxCaptureProgress;
        state.Events.Publish(new PropertyCaptured(this, newOwner, previous));
    }
}`;

    const codeFactory=`Factory

public interface IProductionFilter { bool Allows(UnitDefinition def); }

public sealed class CategoryProductionFilter : IProductionFilter
{
    private readonly HashSet<UnitCategory> _allowed;
    public CategoryProductionFilter(params UnitCategory[] allowed) => _allowed = allowed.ToHashSet();
    public bool Allows(UnitDefinition def) => _allowed.Contains(def.Category);
}

public sealed class WhitelistProductionFilter : IProductionFilter
{
    private readonly HashSet<string> _ids;
    public WhitelistProductionFilter(params string[] unitDefIds) => _ids = unitDefIds.ToHashSet();
    public bool Allows(UnitDefinition def) => _ids.Contains(def.Id);
}



public interface IBuildTimeStrategy { int GetBuildTime(UnitDefinition def); }

public sealed class DefaultBuildTimeStrategy : IBuildTimeStrategy
{
    public int GetBuildTime(UnitDefinition def) => def.BuildTime;
}

public sealed class OverrideBuildTimeStrategy : IBuildTimeStrategy
{
    private readonly Dictionary<string, int> _overrides;
    private readonly IBuildTimeStrategy _fallback;
    public OverrideBuildTimeStrategy(Dictionary<string, int> overrides, IBuildTimeStrategy? fallback = null)
    { _overrides = overrides; _fallback = fallback ?? new DefaultBuildTimeStrategy(); }
    public int GetBuildTime(UnitDefinition def) => _overrides.TryGetValue(def.Id, out var t) ? t : _fallback.GetBuildTime(def);
}

public sealed record ProductionOrder(UnitDefinition Definition, int TurnsRemaining);

public sealed class ProductionBay : IPropertyComponent
{
    public IProductionFilter Filter { get; }
    public IBuildTimeStrategy TimeStrategy { get; set; }
    public ProductionOrder? CurrentOrder { get; private set; }
    private readonly Queue<UnitDefinition> _pending = new();

    public ProductionBay(IProductionFilter filter, IBuildTimeStrategy? timeStrategy = null)
    { Filter = filter; TimeStrategy = timeStrategy ?? new DefaultBuildTimeStrategy(); }

    public bool CanBuild(UnitDefinition def) => Filter.Allows(def);
    public void StartOrder(UnitDefinition def) => CurrentOrder = new ProductionOrder(def, TimeStrategy.GetBuildTime(def));
    public void Enqueue(UnitDefinition def) => _pending.Enqueue(def);

    public void Advance(GameState state, Property property)
    {
        if (CurrentOrder is null)
        {
            var choice = state.UI.PromptProduction(property.Owner!, Filter, state);
            if (choice is not null) StartOrder(choice);
            property.Fatigue += property.Definition.IdleProductionFatigue;
            return;
        }

        var order = CurrentOrder with { TurnsRemaining = CurrentOrder.TurnsRemaining - 1 };
        if (order.TurnsRemaining > 0) { CurrentOrder = order; property.Fatigue += property.Definition.ProductionTickFatigue; return; }

        var unit = UnitFactory.Create(order.Definition);
        CurrentOrder = null;
        if (_pending.Count > 0) StartOrder(_pending.Dequeue());

        var spot = state.Board.FindFreeAdjacentTile(property.Position, unit);
        if (spot is not null) { state.Board.PlaceUnit(unit, spot.Value); state.Scheduler.Register(unit); }
        else Enqueue(unit.Definition);

        property.Fatigue += property.Definition.ProductionTickFatigue;
    }
}`;

    return (
        <div id="programming" className="page">
            <h1>{t('programming.title')}</h1>
            <p>{t('programming.intro')}</p>

            <h2>1. Programación del jugador.</h2>
            <p>La clase "Player" es la base para todos los jugadores en el juego. Define las propiedades y 
               métodos comunes que deben tener todos los jugadores. Las variables que esta clase tiene son su ID,
               el equipo al que pertenece, la cantidad de fondos o dinero que posee y su estado de derrota. Por otro lado cuenta con una propiedad para 
               almacenar el conjunto de sprites del jugador y el metodo abstracto de elección de acción.</p>
            <pre className="code-block">
                <code>{codePlayer}</code>
            </pre>
            <h2>2. Entidades del juego.</h2>
            <p>Las entidades del juego son los elementos que componen el juego y que interactúan entre sí. 
               Estas entidades son todo aquello que pueda ser colocado en el mapa y pueda ser dañado
               o curado como se ve en el bloque de codigo con las interfaces de IDamageable e IHealable.
               Por su propio lado, como se dice en el GDD la fatiga es algo que todavía sigue en debate,
               aun así hemos considerado poner el bloque de codigo relacionado con la fatiga en ISchedulable.</p>
            <pre className="code-block">
                <code>{codeEntity}</code>
            </pre>
            <h2>3. Acciones.</h2>
            <p>Las acciones son las operaciones que el jugador dicta a las unidades para que estas las realicen.
               Las acciones disponibles son las de moverse y atacar. Como se ve en el bloque de código,
               este es una interfaz que define las acciones, su animación, que puede hacer en ese momento y la propia ejecución de la misma</p>
            <pre className="code-block">
                <code>{codeAction}</code>
            </pre>
            <h2>4. Propiedades.</h2>
            <p>La interfaz IPropertyComponent actúa como marcador para los componentes que pueden añadirse a las propiedades del juego. 
               La clase Property representa una propiedad del mapa, implementando las interfaces ICapturable e ISchedulable 
               y contiene información como su identificador, propietario, posición, fatiga y definición. 
               Además, permite gestionar componentes adicionales mediante métodos como GetComponent y AddComponent, 
               proporcionando flexibilidad para ampliar su funcionalidad. 
               Por último, incorpora la lógica de captura de propiedades, permitiendo reducir el progreso de captura o completar una captura, 
               actualizando al propietario y notificando el evento correspondiente al sistema de eventos de la partida.</p>
            <pre className="code-block">
                <code>{codeProperties}</code>
            </pre>
            <h2>5. Fábrica.</h2>
            <p>El sistema de producción permite definir qué unidades pueden fabricarse en cada propiedad y cuánto tiempo requiere su construcción. 
               Para ello, IProductionFilter establece un filtro de producción, que puede limitar las unidades disponibles por categoría 
               mediante CategoryProductionFilter o mediante una lista específica de identificadores con WhitelistProductionFilter. 
               Por otro lado, IBuildTimeStrategy permite determinar el tiempo de construcción de las unidades, 
               ya sea utilizando el valor predeterminado de su definición o aplicando modificaciones específicas. 
               Finalmente, ProductionBay integra estos sistemas para gestionar las órdenes de producción, 
               mantener una cola de unidades pendientes y avanzar la construcción durante los turnos. 
               Cuando una unidad termina de fabricarse, intenta colocarla en una casilla adyacente libre a la propiedad y registrarla en el sistema de turnos, 
               dejando pendiente su despliegue si no existe espacio disponible.</p>
            <pre className="code-block">
                <code>{codeFactory}</code>
            </pre>
        </div>
    );
}
