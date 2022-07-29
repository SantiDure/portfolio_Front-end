import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombre: string = '';
  descripcion: string = '';

    constructor(private proyService: ProyectoService, private router: Router) { }

    ngOnInit(): void {
    }

    onCreate(): void {
      const proy = new Proyecto(this.nombre, this.descripcion);
      this.proyService.save(proy).subscribe(
        data => {
          alert("Proyecto añadido");
          this.router.navigate(['']);
        }, err => {
          alert("Falló");
          this.router.navigate(['']);
        }
      )
    }

  }
