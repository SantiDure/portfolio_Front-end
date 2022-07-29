import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  isLogged = false;
  public habilidades: Habilidad[] = [];

  constructor(private habiService: HabilidadService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarHabilidad();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void {
    this.habiService.lista().subscribe(data => { this.habilidades = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.habiService.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }
}

