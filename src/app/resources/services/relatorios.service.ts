import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RelatoriosService {
  apiURL: string = environment.apiURLBase;

  constructor(private http: HttpClient) {}

  // salvar(socio: Socio): Observable<Socio>{
  //   return this.http.post<Socio>(`${this.apiURL}`, socio)
  // }
  // atualizar(socio: Socio): Observable<any>{
  //   return this.http.put<Socio>(`${this.apiURL}/${socio.id}`, socio)
  // }

  public downloadPDF(url: string): any {
    var mediaType = "application/pdf";
    return this.http.get(this.apiURL + "/api/export-pdf/" + url, {
      responseType: "blob",
    });
  }
  // getRelatorioSocios(): Observable<any> {
  //   return this.http.get<any>(this.apiURL + '/api/export-pdf/socio' { headers: });
  // }
  // getSocioById(id: number) : Observable<Socio>{
  //   return this.http.get<any>(`${this.apiURL}/${id}`);
  // }
  // deletar(socio: Socio): Observable<any>{
  //   return this.http.delete<Socio>(`${this.apiURL}/${socio.id}`)
  // }
}
