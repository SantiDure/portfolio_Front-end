import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/ipersona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

 public personas!: Persona[];

  constructor(private peService : PersonaService) { }

  ngOnInit(): void {
      this.traerPersona();
  }

  public traerPersona(){
    this.peService.verPersonas().subscribe(
  (response: Persona[]) =>{
    this.personas = response;
  },
  (error: HttpErrorResponse) =>{
    alert(error.message);
  }
  );
  }
}
