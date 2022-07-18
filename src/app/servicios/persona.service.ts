import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {


  private apiUrl = environment.apiUrl;

  constructor(private HttpClient: HttpClient) { }

  public verPersonas(): Observable<Persona[]> {
    return this.HttpClient.get<Persona[]>(`${this.apiUrl}/ver/personas`);
  }

  public agregarPersona(): Observable<Persona>  {
    return this.HttpClient.post<Persona>(`${this.apiUrl}/new/persona`, Persona);
  }

  public verPersonaId(id: number): Observable<Persona[]> {
    return this.HttpClient.get<Persona[]>(`${this.apiUrl}/ver/persona/${id}`);
  }

  public borrarPersona(id: number): Observable<Persona> {
    return this.HttpClient.delete<Persona>(`${this.apiUrl}/delete/persona/${id}`);
  }
}
