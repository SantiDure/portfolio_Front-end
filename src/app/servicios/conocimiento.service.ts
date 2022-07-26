import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Conocimiento } from '../modelos/conocimiento';

@Injectable({
  providedIn: 'root'
})
export class ConocimientoService {

  private conoUrl = environment.conoUrl;

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Conocimiento[]>{
    return this.HttpClient.get<Conocimiento[]>(this.conoUrl + 'lista');
  }

  public detail(id: number): Observable<Conocimiento>{
    return this.HttpClient.get<Conocimiento>(this.conoUrl + `detail/${id}`);
  }

  public save(conocimiento: Conocimiento): Observable<any>{
    return this.HttpClient.post<any>(this.conoUrl + 'create', conocimiento);
  }

  public update(id: number, conocimiento: Conocimiento): Observable<any>{
    return this.HttpClient.put<any>(this.conoUrl + `update/${id}`, conocimiento);
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.conoUrl + `delete/${id}`);
  }

}

