import { Component, OnInit } from '@angular/core';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { Estudio } from 'src/app/interfaces/iestudio';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {

  public estudios!: Estudio[];

  constructor(private estService: EstudioService) { }

  ngOnInit(): void {
  this.traerEstudios();
  }


  public traerEstudios(){
    this.estService.verEstudios().subscribe(
  (response: Estudio[]) =>{
    this.estudios = response;
  },
  (error: HttpErrorResponse) =>{
    alert(error.message);
  }
  );
  }
}
