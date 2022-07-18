import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Persona } from 'src/app/interfaces/ipersona';
import { PersonaService } from 'src/app/servicios/persona.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
