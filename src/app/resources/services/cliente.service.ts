import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/components/cliente/Cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiURL}`, cliente)
  }
  atualizar(cliente: Cliente): Observable<any>{
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente)
  }
  getCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }
  getClienteById(id: number) : Observable<Cliente>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  getClienteByName(name: string) : Observable<Cliente[]>{
    return this.http.get<any>(`${this.apiURL}/search/${name}`);
  }
  deletar(cliente: Cliente): Observable<any>{
    return this.http.delete<Cliente>(`${this.apiURL}/${cliente.id}`)
  }
  getQuadra () {
    return [
      {nome: 'a', desc: 'A'},
      {nome: 'b', desc: 'B'},
      {nome: 'c', desc: 'C'},
      {nome: 'e', desc: 'E'},
      {nome: 'f', desc: 'F'},
      {nome: 'g', desc: 'G'}
    ];
  }
  getTipo() {
    return [
      {nome: 'canteiro', desc: 'Canteiro'},
      {nome: 'tumulo 1 gaveta', desc: 'Túmulo 1 Gaveta'},
      {nome: 'tumulo 2 Gaveta', desc: 'Túmulo 2 Gaveta'},
      {nome: 'tumulo 3 Gaveta', desc: 'Túmulo 3 Gaveta'},
    ]
  }
}
