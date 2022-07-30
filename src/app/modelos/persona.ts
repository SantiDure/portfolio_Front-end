export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    presentacion: string;
    telefono: string;
    urlFoto: string;
    tituloProfesional: string;

    constructor(nombre: string, apellido: string, email: string, presentacion: string, telefono: string, urlFoto: string, tituloProfesional: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.presentacion = presentacion;
        this.telefono = telefono;
        this.urlFoto = urlFoto;
        this.tituloProfesional = tituloProfesional;
    }
}

