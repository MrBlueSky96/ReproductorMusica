import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/Song';

import { SongsService } from '../../songs.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  songs: any = [];

  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.songsService.getSongs().subscribe(
      res => {
        this.songs = res;
      },
      err => console.log(err)
    )
  }

}
