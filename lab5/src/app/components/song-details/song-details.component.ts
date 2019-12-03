import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ShowSongDetailsService } from '../../services/show-song-details.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Song } from '../../models/song';


@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  constructor(private _authService:AuthService, private _showSongDetailsService:ShowSongDetailsService,
    private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.showSongDetails();
  }

  showSongDetails() {
    var objID = this.route.snapshot.paramMap.get('objID')
    this._showSongDetailsService.getSongDetails(objID).subscribe((res)=> {
      this._showSongDetailsService.songs = res as Song[]
    })
  }

}
