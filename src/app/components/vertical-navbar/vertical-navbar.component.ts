import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { CustomPlaylistService } from '../../servicio/custom-playlists.service';

import { CustomPlaylist } from '../../models/CustomPlaylist';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css']
})
export class VerticalNavbarComponent implements OnInit {

  constructor(private customPlaylistService: CustomPlaylistService) { }

  faHome = faHome;
  faSearch = faSearch;
  faBookOpen = faBookOpen;
  faPlusSquare = faPlusSquare;
  faHeart = faHeart;

  ngOnInit(): void {
  }


  customPlaylist: CustomPlaylist = {
    id_customPlaylist: 0,
    title_customPlaylist: '',
    description_customPlaylist: '',
    image_customPlaylist: '',
    created_at_customPlaylist: new Date()
  }

  createNewCustomPlaylist() {

    this.customPlaylist.title_customPlaylist = 'Mi playlist n.º ' + this.customPlaylist.id_customPlaylist;

    delete this.customPlaylist.created_at_customPlaylist;
    delete this.customPlaylist.id_customPlaylist;

    this.customPlaylistService.saveCustomPlaylists(this.customPlaylist)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }
  

}
