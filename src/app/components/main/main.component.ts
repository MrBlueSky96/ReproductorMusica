import { Component, OnInit,  } from '@angular/core';

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

  playlists: any = [];

  constructor(private songsService: SongsService, private playlistService: PlaylistService) { }

  ngOnInit(): void {

    this.playlistService.getPlaylists().subscribe(
      res => {
        this.playlists = res;
        console.log(res);
      },
      err => console.log(err)
    )
    
  }

}
