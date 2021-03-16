import { Component, OnInit } from '@angular/core';

import { Song } from 'src/app/models/Song';
import { SongsService } from '../../servicio/songs.service';

import { Playlist } from 'src/app/models/Playlist';
import { PlaylistService } from '../../servicio/playlists.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  songs: any = [];
  playlists: any = [];

  playlist: any;

  constructor(private songsService: SongsService, private playlistService: PlaylistService) { }

  ngOnInit(): void {

    this.songsService.getSongs().subscribe(
      res => {
        this.songs = res;
      },
      err => console.log(err)
    )

    this.playlistService.getSongsOfPlaylist('2').subscribe(
      res => {
        this.playlists = res;
      },
      err => console.log(err)
    )

    /*this.playlistService.getPlaylist('2').subscribe(
      res => {
        this.playlist = res;
      },
      err => console.log(err)
    )*/
    
  }

}
