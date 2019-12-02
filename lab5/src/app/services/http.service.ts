import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  songs:Song[];
  private _authUserURL = 'http://localhost:8080/api/authUser';
  private _searchURL = "http://localhost:8080/api/open/song/search"
  
  constructor(private http:HttpClient) { }

  getAuthUserPage() {
    return this.http.get<any>(this._authUserURL);
  }

  findTheSong(searchValue) {
    return this.http.get(this._searchURL + `/${searchValue}`)
  }

  
}
