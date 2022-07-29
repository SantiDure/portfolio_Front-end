import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {

  nombre: string = '';
  tiempoDeExperiencia: string = '';
  porcentaje: number = 0;

    constructor(private habiService: HabilidadService, private router: Router) { }

    ngOnInit(): void {
    }

    onCreate(): void {
      const hab = new Habilidad(this.nombre, this.tiempoDeExperiencia, this.porcentaje);
      this.habiService.save(hab).subscribe(
        data => {
          alert("Habilidad añadida");
          this.router.navigate(['']);
        }, err => {
          alert("Falló");
          this.router.navigate(['']);
        }
      )
    }

  }
