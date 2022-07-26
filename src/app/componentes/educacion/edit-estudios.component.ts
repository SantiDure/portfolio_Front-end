import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/modelos/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-edit-estudios',
  templateUrl: './edit-estudios.component.html',
  styleUrls: ['./edit-estudios.component.css']
})
export class EditEstudiosComponent implements OnInit {

  est: Estudio = null;

  constructor(private estService: EstudioService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.estService.detail(id).subscribe(
      data =>{
        this.est = data;
      }, err =>{
        alert("Error al modificar estudio");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.estService.update(id, this.est).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar estudio");
         this.router.navigate(['']);
      }
    )
  }

}
