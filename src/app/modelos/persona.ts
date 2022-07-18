export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    presentacion: string;
    telefono: string;
    urlFoto: string;

    constructor(nombre: string, apellido: string, email: string, presentacion: string, telefono: string, urlFoto: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.presentacion = presentacion;
        this.telefono = telefono;
        this.urlFoto = urlFoto;
    }
}

