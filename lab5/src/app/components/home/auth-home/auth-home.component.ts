import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { AuthService } from '../../../services/auth.service'
import { Song } from '../../../models/song';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.css']
})
export class AuthHomeComponent implements OnInit {

  constructor(private _http:HttpService, private _authService:AuthService) { }

  searchData = {}
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
