import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { HttpService } from '../../../services/http.service';
import { Song } from '../../../models/song';

@Component({
  selector: 'app-open-home',
  templateUrl: './open-home.component.html',
  styleUrls: ['./open-home.component.css'],
 
})
export class OpenHomeComponent implements OnInit {

  searchData = {}
  constructor(private _authService:AuthService, private _http:HttpService) { }

  ngOnInit() {
  }

  findSong(){
    this._http.findTheSong(this.searchData["song"]).subscribe(
      res => {
        this._http.songs = res as Song[];
        console.log(res)
      },
      err => console.log(err)
      
    )
  }

}
