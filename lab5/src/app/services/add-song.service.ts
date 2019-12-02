import { Injectable } from '@angular/core';
import { Song } from '../models/song';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddSongService {

  selectedSong: Song | {}={};
  songs: Song[];
  private addSongURL = "http://localhost:8080/api/authUser/add-song"
  private allSongsURL = "http://localhost:8080/api/open/allSongs"
  constructor(private _http:HttpClient) { }

  addNewSong(song: Song) {
    return this._http.post(this.addSongURL, song)
  }

  getNumberOfSongs() {
    return this._http.get<any>(this.allSongsURL);
  }
}
