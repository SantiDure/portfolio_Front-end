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
