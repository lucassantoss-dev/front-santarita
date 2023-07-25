import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestLogin } from '../models/RequestLogin';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiURL: string = environment.apiURLBase;

  constructor(private http: HttpClient) { }
  async login(user: RequestLogin) {
    let formData = new FormData();
    formData.append("name", user.name);
    formData.append("password", user.password);
    const result = await this.http.post<any>(`${this.apiURL}/api/login`, formData).toPromise();
    if (result) {
      window.localStorage.setItem('token', result.token);
      return true;
    }
    return false;
  }

  async createAccount(account: any) {
    const result = await this.http.post<any>(`${this.apiURL}/users`, account).toPromise();
    return result;
  }

}
