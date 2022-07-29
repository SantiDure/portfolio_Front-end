import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditConocimientosComponent } from './componentes/conocimientos/edit-conocimientos.component';
import { NewConocimientosComponent } from './componentes/conocimientos/new-conocimientos.component';
import { EditEstudiosComponent } from './componentes/educacion/edit-estudios.component';
import { NewEstudiosComponent } from './componentes/educacion/new-estudios.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditHabilidadComponent } from './componentes/habilidades/edit-habilidad.component';
import { NewHabilidadComponent } from './componentes/habilidades/new-habilidad.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { EditPresentacionComponent } from './componentes/presentacion/edit-presentacion.component';
import { NewPresentacionComponent } from './componentes/presentacion/new-presentacion.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path: 'login', component:LoginComponent},
  {path:'', redirectTo:'portfolio', pathMatch:'full'},
  {path: 'nuevaexp', component:NewExperienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevoest', component:NewEstudiosComponent},
  {path: 'editest/:id', component:EditEstudiosComponent},
  {path: 'nuevocono', component:NewConocimientosComponent},
  {path: 'editcono/:id', component:EditConocimientosComponent},
  {path: 'nuevoper', component:NewPresentacionComponent},
  {path: 'editper/:id', component:EditPresentacionComponent},
  {path: 'nuevoproy', component:NewProyectoComponent},
  {path: 'editproy/:id', component:EditProyectoComponent},
  {path: 'nuevahab', component:NewHabilidadComponent},
  {path: 'edithab/:id', component:EditHabilidadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
