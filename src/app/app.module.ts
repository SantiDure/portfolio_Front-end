import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ConocimientosComponent } from './componentes/conocimientos/conocimientos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component'
import { ReactiveFormsModule } from '@angular/forms';
import { PersonaService } from './servicios/persona.service';
import { ExperienciaService } from './servicios/experiencia.service';
import { EstudioService } from './servicios/estudio.service';
import { HabilidadService } from './servicios/habilidad.service';
import { ProyectoService } from './servicios/proyecto.service';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EditEstudiosComponent } from './componentes/educacion/edit-estudios.component';
import { NewEstudiosComponent } from './componentes/educacion/new-estudios.component';
import { NewConocimientosComponent } from './componentes/conocimientos/new-conocimientos.component';
import { EditConocimientosComponent } from './componentes/conocimientos/edit-conocimientos.component';
import { NewPresentacionComponent } from './componentes/presentacion/new-presentacion.component';
import { EditPresentacionComponent } from './componentes/presentacion/edit-presentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcercaDeComponent,
    PresentacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    ConocimientosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditEstudiosComponent,
    NewEstudiosComponent,
    NewConocimientosComponent,
    EditConocimientosComponent,
    NewPresentacionComponent,
    EditPresentacionComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PersonaService, ExperienciaService, EstudioService, HabilidadService, ProyectoService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
