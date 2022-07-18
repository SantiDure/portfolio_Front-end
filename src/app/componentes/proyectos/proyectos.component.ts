import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectos!: Proyecto[];

  constructor(private proService: ProyectoService) { }

  ngOnInit(): void {
  this.traerProyectos();
  }


  public traerProyectos(){
    this.proService.verProyectos().subscribe(
  (response: Proyecto[]) =>{
    this.proyectos = response;
  },
  (error: HttpErrorResponse) =>{
    alert(error.message);
  }
  );
  }
}
