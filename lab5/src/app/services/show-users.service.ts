import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ShowUsersService {

  selectedUser: User;
  users: User[]
  private showUsersURL = "http://localhost:8080/api/admin/users"
  constructor(private _http:HttpClient) { }

  getUsers() {
    return this._http.get(this.showUsersURL);
  }
}
