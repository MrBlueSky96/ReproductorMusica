import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { CustomPlaylistService } from '../../servicio/custom-playlists.service';
import { SearchService } from '../../servicio/search.service';
import { SongsService } from '../../servicio/songs.service';


@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.css']
})
export class EditPlaylistComponent implements OnInit {

  customPlaylist: any;

  playlistTitle: any;
  playlistDescription: any;
  playlistImage: any;

  searchControl = new FormControl("");

  searchedSongs: any = [];
  songsOfCustomPlaylist: any = [];

  constructor(private customPlaylistService: CustomPlaylistService, private searchService: SearchService, private songsService: SongsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;

    if (params.id) {
      this.customPlaylistService.getCustomPlaylist(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.customPlaylist = res;
            this.playlistTitle = this.customPlaylist.title_customPlaylist;
            this.playlistDescription = this.customPlaylist.description_customPlaylist;
            this.playlistImage = this.customPlaylist.image_customPlaylist;
          },
          err => console.error(err)
        )


        


    }

    this.songsService.getSongsOfCustomPlaylist(params.id)
    .subscribe(
      res => {
        console.log(res);
        this.songsOfCustomPlaylist = res;
      },
      err => console.error(err)
    )


    this.searchControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(500)
      )
      .subscribe((res: string) => {

        if (res.length > 0) {
          this.searchService.searchSongsAndPlaylists(res)
            .subscribe(
              res => {
                this.searchedSongs = res;
                console.log(res);
              },
              err => console.error(err)
            )
        }

      });



  }


  clicked: any;
  i: any;

  currentDatesSong: any = [];

  selectSong(i: any) {
    this.clicked = i;

    this.currentDatesSong = this.searchedSongs[this.clicked];
    console.log(this.currentDatesSong);

    this.songsService.currentSong.subscribe(route => {
      this.currentDatesSong = route;
    })

    this.songsService.changeClickedSong(this.currentDatesSong);

  }


  idFromsong_CustomPlaylist: any = {
    id_FromSong: 0,
    id_FromCustomPlaylist: 0
  }

  addSong(i: any) {

    this.selectSong(i);

    const params = this.activatedRoute.snapshot.params;

    this.idFromsong_CustomPlaylist.id_FromSong = this.currentDatesSong.id_song;
    this.idFromsong_CustomPlaylist.id_FromCustomPlaylist = parseInt(params.id);

    this.customPlaylistService.saveSongInCustomPlaylist(params.id,this.idFromsong_CustomPlaylist)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )


  }





}
