import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../modelos/habilidad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  private apiUrl = environment.apiUrl;

  constructor(private HttpClient: HttpClient) { }

  public verHabilidades(): Observable<Habilidad[]> {
    return this.HttpClient.get<Habilidad[]>(`${this.apiUrl}/ver/habilidades`);
  }

  public agregarHabilidad(): Observable<Habilidad>  {
    return this.HttpClient.post<Habilidad>(`${this.apiUrl}/new/habilidad`, Habilidad);
  }

  public borrarHabilidad(id: number): Observable<Habilidad> {
    return this.HttpClient.delete<Habilidad>(`${this.apiUrl}/delete/habilidad/${id}`);
  }
}
