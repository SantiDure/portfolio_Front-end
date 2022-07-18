import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudio } from '../modelos/estudio';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  private apiUrl = environment.apiUrl;

  constructor(private HttpClient: HttpClient) { }

  public verEstudios(): Observable<Estudio[]> {
    return this.HttpClient.get<Estudio[]>(`${this.apiUrl}/ver/estudios`);
  }

  public agregarEstudio(): Observable<Estudio>  {
    return this.HttpClient.post<Estudio>(`${this.apiUrl}/new/estudio`, Estudio);
  }

  public borrarEstudio(id: number): Observable<Estudio> {
    return this.HttpClient.delete<Estudio>(`${this.apiUrl}/delete/estudio/${id}`);
  }
}
