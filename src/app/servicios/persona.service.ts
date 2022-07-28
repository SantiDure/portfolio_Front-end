import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private persoUrl = environment.persoUrl;

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.HttpClient.get<Persona[]>(this.persoUrl + 'lista');
  }

  public detail(id: number): Observable<Persona>{
    return this.HttpClient.get<Persona>(this.persoUrl + `detail/${id}`);
  }

  public save(persona: Persona): Observable<any>{
    return this.HttpClient.post<any>(this.persoUrl + 'create', persona);
  }

  public update(id: number, persona: Persona): Observable<any>{
    return this.HttpClient.put<any>(this.persoUrl + `update/${id}`, persona);
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.persoUrl + `delete/${id}`);
  }

}
