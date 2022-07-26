import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private expUrl = environment.expUrl;

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.HttpClient.get<Experiencia[]>(this.expUrl + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.HttpClient.get<Experiencia>(this.expUrl + `detail/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.HttpClient.post<any>(this.expUrl + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.HttpClient.put<any>(this.expUrl + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.expUrl + `delete/${id}`);
  }

}
