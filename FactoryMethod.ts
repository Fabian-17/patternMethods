interface Equipo {
    nombre: string;
    ram: string;
    procesador: string;
    detalles(): string;
};

class TipoEquipo implements Equipo {
    nombre: string;
    ram: string;
    procesador: string;
    tipo: string;

    constructor(tipo: string, nombre: string, ram: string, procesador: string) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    };

    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    };
};

class Notebook extends TipoEquipo {
    constructor(nombre: string, ram: string, procesador: string) {
        super("Notebook", nombre, ram, procesador);
    };
};

class Desktop extends TipoEquipo {
    constructor(nombre: string, ram: string, procesador: string) {
        super("Desktop", nombre, ram, procesador);
    };
};

class Servidor extends TipoEquipo {
    constructor(nombre: string, ram: string, procesador: string) {
        super("Servidor", nombre, ram, procesador);
    };
};

class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo {
        switch (tipo.toLowerCase()) {
            case "notebook":
                return new Notebook(nombre, ram, procesador);
            case "desktop":
                return new Desktop(nombre, ram, procesador);
            case "servidor":
                return new Servidor(nombre, ram, procesador);
                default:
                    throw new Error("Tipo de equipo no válido");
        };
    };
};

const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());