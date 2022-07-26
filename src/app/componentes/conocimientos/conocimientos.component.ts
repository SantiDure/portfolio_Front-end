import { Component, OnInit } from '@angular/core';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { Estudio } from 'src/app/interfaces/iestudio';
import { HttpErrorResponse } from '@angular/common/http';
import { Conocimiento } from 'src/app/modelos/conocimiento';
import { TokenService } from 'src/app/servicios/token.service';
import { ConocimientoService } from 'src/app/servicios/conocimiento.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {

  isLogged = false;
  public conocimientos: Conocimiento[];

    constructor(private conoService: ConocimientoService, private tokenService: TokenService) { }


    ngOnInit(): void {
      this.cargarConocimiento();
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }

    cargarConocimiento(): void {
      this.conoService.lista().subscribe(data => { this.conocimientos = data; })
    }

    delete(id?: number){
      if(id != undefined){
        this.conoService.delete(id).subscribe(
          data => {
            this.cargarConocimiento();
          }, err => {
            alert("No se pudo borrar el conocimiento");
          }
        )
      }
    }
  }
