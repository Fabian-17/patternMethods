class Inventario {
    private static instancia: Inventario;
    private equipo: { nombre: string, tipo: string, estado: "disponible" | "en reparación" }[] = [];

    constructor() {};

    public static obtenerInstancia(): Inventario {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    };

    agregarEquipo( nombre: string, tipo: string, estado: "disponible" | "en reparación" ): void {
        this.equipo.push({ nombre, tipo, estado });
    };

    listarEquipos(): {} {
        return this.equipo;
    };
};

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos()); 