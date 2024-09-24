class InventarioViejo {
    private items: { nombre: string, tipo: string, estado: string }[] = [];

    constructor() {};

    agregarItem(nombre: string, tipo: string, estado: string) {
        this.items.push({ nombre, tipo, estado });
    };

    listarItems() {
        return this.items;
    };
};

class AdaptadorInventario {
    constructor(private inventarioViejo: InventarioViejo) {};

    agregarEquipo(nombre: string, tipo: string, estado: string) {
        return this.inventarioViejo.agregarItem(nombre, tipo, estado);
    };

    listarEquipos() {
        return this.inventarioViejo.listarItems();
    };
};


const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]