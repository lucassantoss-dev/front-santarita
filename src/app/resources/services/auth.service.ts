import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginResponse: ResponseLogin;

  constructor(
    private router: Router
  ) { }
  // resolve(route: ActivatedRouteSnapshot) {
  //   return this.loginResponse.user;
  // }

  // clear(): void{
  //   this.loginResponse = undefined;
  // }

  // saveToken(token: string) {
  //   this.loginResponse.token = token
  // }

  isAuthenticated(): boolean {
    return Boolean(this.loginResponse?.token);
  }
}
