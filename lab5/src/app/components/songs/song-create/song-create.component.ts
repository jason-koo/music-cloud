import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../../../services/http.service';
import { AuthService } from '../../../services/auth.service'

import { Song } from '../../../models/song'
import { NgForm } from '@angular/forms';
import { AddSongService } from '../../../services/add-song.service';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css'],
  providers: [AddSongService]
})
export class SongCreateComponent implements OnInit {


  constructor(private _http:HttpService, private _authService:AuthService, private _addSongService:AddSongService) { }

  ngOnInit() {
    this.getAllSongs()
  }

  
  getAllSongs() {
    this._addSongService.getNumberOfSongs().subscribe((res) => {
      this._addSongService.songs = res as Song[]
    })
  }


  addSong(form : NgForm) {
    form.value.objectID = this._addSongService.songs.length + 1;
    console.log(form.value)
    this._addSongService.addNewSong(form.value).subscribe(
      res => {
      console.log(res);
    },
      err => alert("Missing/Incorrect Field")
    
    )
  }

  
}
