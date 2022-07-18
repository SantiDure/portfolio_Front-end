export class Habilidad {
  id?: number;
  nombre: string;
  tiempoDeExperiencia: string;

  constructor(nombre: string, tiempoDeExperiencia: string){
      this.nombre = nombre;
      this.tiempoDeExperiencia = tiempoDeExperiencia;
      }
}
