import { Component, OnInit } from '@angular/core';
import { SongService} from '../../../services/song.service';
import { Song } from '../../../models/song'
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router'
import { AddSongService } from '../../../services/add-song.service';
import { ShowReviewsService } from '../../../services/show-reviews.service';
import { Review } from '../../../models/review';


@Component({
  selector: 'app-show-songs',
  templateUrl: './show-songs.component.html',
  styleUrls: ['./show-songs.component.css']
})
export class ShowSongsComponent implements OnInit {
  songs:Song[]

  constructor(public songService: SongService, private _authService:AuthService, private _router:Router, private _addSongService: AddSongService
    , private _showReviewsService:ShowReviewsService) { }

  ngOnInit() {
    this.getSongList();
    
   
  }


  getSongList() {
    this.songService.getAllSongs().subscribe((res) => {
      this.songService.songs = res as Song[];
    })
  }


  showReviews(objID) {
    this._showReviewsService.getReviews(objID).subscribe((res) => {
      this._showReviewsService.reviews = res as Review[];
    })
  }

  addReview(objID) {
    this._router.navigate(['/api/authUser/add-review', objID])
  }

  showSongDetails(objID) {
    this._router.navigate(['/api/open/song-details', objID])
  }


}
