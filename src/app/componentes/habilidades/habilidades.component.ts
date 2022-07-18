import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  public habilidades!: Habilidad[];

  constructor(private habiService: HabilidadService) { }

  ngOnInit(): void {
  this.traerHabilidades();
  }


  public traerHabilidades(){
    this.habiService.verHabilidades().subscribe(
  (response: Habilidad[]) =>{
    this.habilidades = response;
  },
  (error: HttpErrorResponse) =>{
    alert(error.message);
  }
  );
  }
}
