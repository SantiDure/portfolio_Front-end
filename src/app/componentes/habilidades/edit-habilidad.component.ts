import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {

  hab: Habilidad = null;

  constructor(private habiService: HabilidadService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habiService.detail(id).subscribe(
      data =>{
        this.hab = data;
      }, err =>{
        alert("Error al modificar habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.habiService.update(id, this.hab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar habilidad");
         this.router.navigate(['']);
      }
    )
  }

}
