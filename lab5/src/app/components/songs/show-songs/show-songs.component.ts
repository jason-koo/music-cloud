import { Component, OnInit } from '@angular/core';
import { SongService} from '../../../services/song.service';
import { Song } from '../../../models/song'

@Component({
  selector: 'app-show-songs',
  templateUrl: './show-songs.component.html',
  styleUrls: ['./show-songs.component.css']
})
export class ShowSongsComponent implements OnInit {
  songs:Song[]

  constructor(public songService: SongService) { }

  ngOnInit() {
    this.getSongList();
   
  }

  getSongList() {
    this.songService.getAllSongs().subscribe((res) => {
      this.songService.songs = res as Song[];
    })
  }

}