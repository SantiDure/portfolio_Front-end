import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conocimiento } from 'src/app/modelos/conocimiento';
import { ConocimientoService } from 'src/app/servicios/conocimiento.service';

@Component({
  selector: 'app-new-conocimientos',
  templateUrl: './new-conocimientos.component.html',
  styleUrls: ['./new-conocimientos.component.css']
})
export class NewConocimientosComponent implements OnInit {

  nombreC: string = '' ;

  constructor(private conoService: ConocimientoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const cono = new Conocimiento(this.nombreC);
    this.conoService.save(cono).subscribe(
      data => {
        alert("Conocimiento añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
