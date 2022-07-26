import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudio } from '../modelos/estudio';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  private estUrl = environment.estUrl;

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Estudio[]>{
    return this.HttpClient.get<Estudio[]>(this.estUrl + 'lista');
  }

  public detail(id: number): Observable<Estudio>{
    return this.HttpClient.get<Estudio>(this.estUrl + `detail/${id}`);
  }

  public save(estudio: Estudio): Observable<any>{
    return this.HttpClient.post<any>(this.estUrl + 'create', estudio);
  }

  public update(id: number, estudio: Estudio): Observable<any>{
    return this.HttpClient.put<any>(this.estUrl + `update/${id}`, estudio);
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.estUrl + `delete/${id}`);
  }

}
