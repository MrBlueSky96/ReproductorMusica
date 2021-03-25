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

  //@HostBinding('class') classes = 'row';

  /*song: Song = {
    id_song: 0,
    title_song: '',
    autor_song: '',
    route_song: '',
    duration_song: '',
    created_at_song: new Date()
  };

  playlist: Playlist = {
    id_playlist: 0,
    title_playlist: '',
    autor_playlist: '',
    image_playlist: '',
    created_at_playlist: new Date()
  };*/

  songsOfPlaylist: any = [];

  playlistTitle: any;
  playlistAutor: any;
  playlistImage: any;

  songRoute: any;
  imageRoute: any;

  clicked: any;
  i: any;

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

    

    
    
    //this.songRoute = this.songsOfPlaylist[this.clicked].route_song;  /*'../../../assets/songs/N3ÜRØ - ERROR404/ERROR404 N3ÜRØ DUBSTEP.mp3';*/

    

  }

  /*audio = new Audio();

  loadAudio(audio: any){
    //let audio = new Audio();
    audio.src = this.songsOfPlaylist[this.clicked].route_song;
    audio.load();
    //audio.play();
  }

  playAudio(audio: any){
    audio.play();
  }*/
  

  rutaSong: any;
  
  clickEvent(i: any){
    this.clicked = i;
    this.songRoute = this.songsOfPlaylist[this.clicked].route_song;  /*'../../../assets/songs/N3ÜRØ - ERROR404/ERROR404 N3ÜRØ DUBSTEP.mp3';*/
    this.imageRoute = this.songsOfPlaylist[this.clicked].image_playlist;
    //this.loadAudio(this.audio); 
    

    this.songsService.currentSong.subscribe(song => {
      this.rutaSong = song;
    })

    this.songsService.getCurrentSong(this.songRoute);
    
  }

  

}
