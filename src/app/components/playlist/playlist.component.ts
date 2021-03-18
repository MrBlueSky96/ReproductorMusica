import { Component, OnInit, HostBinding } from '@angular/core';

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

}
