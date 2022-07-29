export class Habilidad {
  id?: number;
  nombre: string;
  tiempoDeExperiencia: string;
  porcentaje: number;

  constructor(nombre: string, tiempoDeExperiencia: string, porcentaje: number){
      this.nombre = nombre;
      this.tiempoDeExperiencia = tiempoDeExperiencia;
      this.porcentaje = porcentaje;
      }
}
