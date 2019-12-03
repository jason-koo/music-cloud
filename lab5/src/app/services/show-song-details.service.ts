import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Song } from '../models/song'

@Injectable({
  providedIn: 'root'
})
export class ShowSongDetailsService {

  selectedSong: Song;
  songs: Song[];
  private showSongDetailsURL = "http://localhost:8080/api/open/song-details/"
  constructor(private _http:HttpClient) { }


}
