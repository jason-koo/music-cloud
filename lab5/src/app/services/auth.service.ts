import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerURL = "http://localhost:8080/api/open/register";
  private loginURL =  "http://localhost:8080/api/open/login";

  constructor(private http: HttpClient, private _router:Router) { }


  registerUser(user) {
    return this.http.post<any>(this.registerURL, user)
  }

  loginNewUser(user) {
    return this.http.post<any>(this.loginURL, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/api/open'])
  }
}
