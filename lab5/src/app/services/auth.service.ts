import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerURL = "http://localhost:8080/api/open/register";
  private loginURL =  "http://localhost:8080/api/open/login";

  constructor(private http: HttpClient) { }


  registerUser(user) {
    return this.http.post<any>(this.registerURL, user)
  }

  loginNewUser(user) {
    return this.http.post<any>(this.loginURL, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
