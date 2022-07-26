import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/modelos/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-new-estudios',
  templateUrl: './new-estudios.component.html',
  styleUrls: ['./new-estudios.component.css']
})
export class NewEstudiosComponent implements OnInit {
  nombreEst: string = '';
  especializacion: string = '';

  constructor(private estudioService: EstudioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const est = new Estudio(this.nombreEst, this.especializacion);
    this.estudioService.save(est).subscribe(
      data => {
        alert("Estudio añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
