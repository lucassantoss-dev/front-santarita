import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagamentos } from 'src/app/components/pagamentos/pagamentos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  apiURL: string = environment.apiURLBase + '/api/pagamentos';

  constructor(
    private http: HttpClient
  ) { }

  salvar(pagamentos: Pagamentos): Observable<Pagamentos>{
    return this.http.post<Pagamentos>(`${this.apiURL}`, pagamentos)
  }
  atualizar(pagamentos: Pagamentos): Observable<any>{
    return this.http.put<Pagamentos>(`${this.apiURL}/${pagamentos.id}`, pagamentos)
  }
  getPag(): Observable<Pagamentos[]> {
    return this.http.get<Pagamentos[]>(this.apiURL);
  }
  getPagById(id: number) : Observable<Pagamentos>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  deletar(pagamentos: Pagamentos): Observable<any>{
    return this.http.delete<Pagamentos>(`${this.apiURL}/${pagamentos.id}`)
  }
}
