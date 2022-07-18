import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/interfaces/iexperiencia';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencias!: Experiencia[];

  constructor(private expService: ExperienciaService) { }

  ngOnInit(): void {
  this.traerExperiencias();
  }


  public traerExperiencias(){
    this.expService.verExperiencias().subscribe(
  (response: Experiencia[]) =>{
    this.experiencias = response;
  },
  (error: HttpErrorResponse) =>{
    alert(error.message);
  }
  );
  }
}
