interface Observador {
    actualizar(equipo: Equipo, estado: string): void;
};


class Soporte implements Observador {
    actualizar(equipo: Equipo, estado: string): void {
        console.log(`Soporte notificado: ${equipo.getNombre()} ha cambiado su estado a ${estado}`);
    };
};


class Equipo {
    private observadores: Observador[] = [];
    private estado: string;

    constructor(private nombre: string, private tipo: string, estadoInicial: string) {
        this.estado = estadoInicial;
    };


    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    };


    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    };


    private notificarObservadores(): void {
        this.observadores.forEach(observador => observador.actualizar(this, this.estado));
    };


    getNombre(): string {
        return this.nombre;
    };
};


const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
// Resultado: Soporte notificado: Notebook HP ha cambiado su estado a en reparación.