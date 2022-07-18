import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiUrl = environment.apiUrl;

  constructor(private HttpClient: HttpClient) { }

  public verExperiencias(): Observable<Experiencia[]> {
    return this.HttpClient.get<Experiencia[]>(`${this.apiUrl}/ver/experiencias`);
  }

  public agregarExperiencia(): Observable<Experiencia>  {
    return this.HttpClient.post<Experiencia>(`${this.apiUrl}/new/experiencia`, Experiencia);
  }

  public borrarExperiencia(id: number): Observable<Experiencia> {
    return this.HttpClient.delete<Experiencia>(`${this.apiUrl}/delete/experiencia/${id}`);
  }

}
