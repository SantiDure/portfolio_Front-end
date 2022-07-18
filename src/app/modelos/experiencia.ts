export class Experiencia {
  id?: number;
  nombreEmpresa: string;
  descripcion: string;
  fechaInicio: Date;
  fechaFin: Date;

  constructor(nombreEmpresa: string, descripcion: string, fechaInicio: Date, fechaFin: Date){
      this.nombreEmpresa = nombreEmpresa;
      this.descripcion = descripcion;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
  }
}
