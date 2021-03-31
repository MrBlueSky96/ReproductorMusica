import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { CustomPlaylistService } from '../../servicio/custom-playlists.service';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css']
})
export class VerticalNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faHome = faHome;
  faSearch = faSearch;
  faBookOpen = faBookOpen;
  faPlusSquare = faPlusSquare;
  faHeart = faHeart;

}
