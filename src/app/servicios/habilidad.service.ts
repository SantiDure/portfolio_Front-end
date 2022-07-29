import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../modelos/habilidad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  private habUrl = environment.habUrl;

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]>{
    return this.HttpClient.get<Habilidad[]>(this.habUrl + 'lista');
  }

  public detail(id: number): Observable<Habilidad>{
    return this.HttpClient.get<Habilidad>(this.habUrl + `detail/${id}`);
  }

  public save(habilidad: Habilidad): Observable<any>{
    return this.HttpClient.post<any>(this.habUrl + 'create', habilidad);
  }

  public update(id: number, habilidad: Habilidad): Observable<any>{
    return this.HttpClient.put<any>(this.habUrl + `update/${id}`, habilidad);
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.habUrl + `delete/${id}`);
  }

}
