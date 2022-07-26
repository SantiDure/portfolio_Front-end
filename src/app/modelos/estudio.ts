export class Estudio {
  id?: number;
  nombreEst: string;
  especializacion: string;

  constructor(nombreEst: string, especializacion: string){
      this.nombreEst = nombreEst;
      this.especializacion = especializacion;
    }
}
