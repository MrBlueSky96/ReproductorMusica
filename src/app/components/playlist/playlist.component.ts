import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SongsService } from '../../servicio/songs.service';
import { PlaylistService } from '../../servicio/playlists.service';
import { Song } from 'src/app/models/Song';
import { ActivatedRoute, Router } from '@angular/router';
import { Playlist } from 'src/app/models/Playlist'; 

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  songsOfPlaylist: any = [];

  playlistTitle: any;
  playlistAutor: any;
  playlistImage: any;


  constructor(private songsService: SongsService, private playlistService: PlaylistService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.playlistService.getSongsOfPlaylist(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.songsOfPlaylist = res;
          this.playlistTitle = this.songsOfPlaylist[0].title_playlist;
          this.playlistAutor = this.songsOfPlaylist[0].autor_playlist;
          this.playlistImage = this.songsOfPlaylist[0].image_playlist;          
        },
        err => console.error(err)
      )

    }

  }
  
  clicked: any;
  i: any;

  currentDatesSong: any = [];

  clickEvent(i: any){
    this.clicked = i;

    this.currentDatesSong = this.songsOfPlaylist[this.clicked];
    
    
    this.songsService.currentSong.subscribe(route => {
      this.currentDatesSong = route;
    })

    this.songsService.changeClickedSong(this.currentDatesSong);
    
  }

  

}
