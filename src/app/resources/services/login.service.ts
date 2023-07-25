import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL: string = environment.apiURLBase ;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  // salvar(user: User): Observable<any>{
  //   return this.http.post<any>(this.apiURL + '/api/register', user);
  // }
  login(requestLogin: RequestLogin):Observable<ResponseLogin>{
    return this.http.post<ResponseLogin>
    (
      this.apiURL, requestLogin
    )
    .pipe(
      tap((loginResponse) => {
        console.log(loginResponse);
        this.authService.loginResponse = loginResponse} )
    );
  }
}
