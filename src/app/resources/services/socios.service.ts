import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socio } from 'src/app/components/socios/Socio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SociosService {

  apiURL: string = environment.apiURLBase + '/api/socios';

  constructor(private http: HttpClient) { }

  salvar(socio: Socio): Observable<Socio>{
    return this.http.post<Socio>(`${this.apiURL}`, socio)
  }
  atualizar(socio: Socio): Observable<any>{
    return this.http.put<Socio>(`${this.apiURL}/${socio.id}`, socio)
  }
  getSocio(): Observable<Socio[]> {
    return this.http.get<Socio[]>(this.apiURL);
  }
  getSocioById(id: number) : Observable<Socio>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  getSocioByName(name: string) : Observable<Socio[]>{
    return this.http.get<any>(`${this.apiURL}/search/${name}`);
  }
  deletar(socio: Socio): Observable<any>{
    return this.http.delete<Socio>(`${this.apiURL}/${socio.id}`)
  }
}
