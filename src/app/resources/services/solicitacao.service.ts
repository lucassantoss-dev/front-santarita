import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitacao } from 'src/app/components/solicitacao/solicitacao';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  apiURL: string = environment.apiURLBase + '/solicitacao';
  constructor(
    private http: HttpClient
  ) { }
  salvar(solicitacao: Solicitacao): Observable<Solicitacao>{
    return this.http.post<Solicitacao>(`${this.apiURL}`, solicitacao)
  }
  atualizar(solicitacao: Solicitacao): Observable<any>{
    return this.http.put<Solicitacao>(`${this.apiURL}/${solicitacao._id}`, solicitacao)
  }
  getsolicitacao(): Observable<Solicitacao[]> {
    return this.http.get<Solicitacao[]>(this.apiURL);
  }
  getsolicitacaoById(id: string) : Observable<Solicitacao>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  deletar(solicitacao: Solicitacao): Observable<any>{
    return this.http.delete<Solicitacao>(`${this.apiURL}/${solicitacao._id}`)
  }
}
