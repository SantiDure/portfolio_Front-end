import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conocimiento } from 'src/app/modelos/conocimiento';
import { ConocimientoService } from 'src/app/servicios/conocimiento.service';

@Component({
  selector: 'app-edit-conocimientos',
  templateUrl: './edit-conocimientos.component.html',
  styleUrls: ['./edit-conocimientos.component.css']
})
export class EditConocimientosComponent implements OnInit {

  cono: Conocimiento = null;

  constructor(private conoService: ConocimientoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.conoService.detail(id).subscribe(
      data =>{
        this.cono = data;
      }, err =>{
        alert("Error al modificar conocimiento");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.conoService.update(id, this.cono).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar conocimiento");
         this.router.navigate(['']);
      }
    )
  }

}

