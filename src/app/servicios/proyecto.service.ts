import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelos/proyecto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private apiUrl = environment.apiUrl;

  constructor(private HttpClient: HttpClient) { }

  public verProyectos(): Observable<Proyecto[]> {
    return this.HttpClient.get<Proyecto[]>(`${this.apiUrl}/ver/proyectos`);
  }

  public agregarProyecto(): Observable<Proyecto>  {
    return this.HttpClient.post<Proyecto>(`${this.apiUrl}/new/proyecto`, Proyecto);
  }

  public borrarProyecto(id: number): Observable<Proyecto> {
    return this.HttpClient.delete<Proyecto>(`${this.apiUrl}/delete/proyecto/${id}`);
  }
}
