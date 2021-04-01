import { Component, OnInit } from '@angular/core';

import { CustomPlaylistService } from '../../servicio/custom-playlists.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  customPlaylists: any = [];

  constructor(private customPlaylistService: CustomPlaylistService) { }

  ngOnInit(): void {

    this.customPlaylistService.getCustomPlaylists()
      .subscribe(
        res => {
          this.customPlaylists = res;
          console.log(res);
        },
        err => console.error(err)
      )


  }

}
