import { Component, OnInit } from '@angular/core';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { Estudio } from 'src/app/interfaces/iestudio';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

isLogged = false;
public estudios: Estudio[];

  constructor(private estService: EstudioService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarEstudio();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEstudio(): void {
    this.estService.lista().subscribe(data => { this.estudios = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.estService.delete(id).subscribe(
        data => {
          this.cargarEstudio();
        }, err => {
          alert("No se pudo borrar es estudio");
        }
      )
    }
  }
}
