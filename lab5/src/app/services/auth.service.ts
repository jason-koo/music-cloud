import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  selectedUser: User|{}={};
  users: User[];
  private registerURL = "http://localhost:8080/api/open/register";
  private loginURL =  "http://localhost:8080/api/open/login";
  private makeAdminURL = "http://localhost:8080/api/admin/makeAdmin"


  constructor(private http: HttpClient, private _router:Router) { }


  registerUser(user) {
    return this.http.post<any>(this.registerURL, user)
  }

  loginNewUser(user:User) {
    return this.http.post<any>(this.loginURL, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  adminLoggedIn() {
    return !!localStorage.getItem('adminToken')
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/api/open'])
  }
  
  logoutAdmin() {
    localStorage.removeItem('adminToken')
    this._router.navigate(['/api/open'])
  }

  giveAdminPriv(_id) {
    return this.http.post(this.makeAdminURL + `/${_id}`, null)
  }
}
