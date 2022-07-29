import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelos/proyecto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private proyUrl = environment.proyUrl;

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.HttpClient.get<Proyecto[]>(this.proyUrl + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.HttpClient.get<Proyecto>(this.proyUrl + `detail/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any>{
    return this.HttpClient.post<any>(this.proyUrl + 'create', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.HttpClient.put<any>(this.proyUrl + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.proyUrl + `delete/${id}`);
  }

}
