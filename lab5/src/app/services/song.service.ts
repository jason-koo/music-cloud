import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Song } from '../models/song';



@Injectable({
  providedIn: 'root'
})
export class SongService {
  songs: Song[];


  private songsURL = "http://localhost:8080/api/open/songs"
  

  constructor(private http: HttpClient) { }

  getAllSongs() {
    return this.http.get(this.songsURL);
  }

  

}
