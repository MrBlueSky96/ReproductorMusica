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
  
  imageRoute: any;
  clicked: any;
  i: any;

  rutaSong: any;
  songRoute: any;

  clickEvent(i: any){
    this.clicked = i;
    this.songRoute = this.songsOfPlaylist[this.clicked].route_song;
    //this.imageRoute = this.songsOfPlaylist[this.clicked].image_playlist;
    
    this.songsService.currentSong.subscribe(route => {
      this.rutaSong = route;
      //this.songRoute = song;
    })

    this.songsService.changeClickedSong(this.songRoute);
    
  }

  

}
