import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-new-presentacion',
  templateUrl: './new-presentacion.component.html',
  styleUrls: ['./new-presentacion.component.css']
})
export class NewPresentacionComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  presentacion: string = '';
  telefono: string = '';
  urlFoto: string = '';
  tituloProfesional: string = '';

  constructor(private persoServ: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const per = new Persona (this.nombre, this.apellido, this.email, this.urlFoto, this.presentacion, this.telefono, this.tituloProfesional);
    this.persoServ.save(per).subscribe(
      data => {
        alert("Presentacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
