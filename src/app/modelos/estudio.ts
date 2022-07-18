export class Estudio {
  id?: number;
  nombreInstitucion: string;
  especializacion: string;
  fechaInicio: Date;
  fechaFin: Date;

  constructor(nombreInstitucion: string, especializacion: string, fechaInicio: Date, fechaFin: Date){
      this.nombreInstitucion = nombreInstitucion;
      this.especializacion = especializacion;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
  }
}
