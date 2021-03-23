import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const rutas: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'playlists/:id', component: PlaylistComponent }
];

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VerticalNavbarComponent } from './components/vertical-navbar/vertical-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { LibraryComponent } from './components/library/library.component';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { FooterComponent } from './components/footer/footer.component';

import {SongsService} from './servicio/songs.service';
import {PlaylistService} from './servicio/playlists.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VerticalNavbarComponent,
    MainComponent,
    SearchComponent,
    LibraryComponent,
    NavbarMobileComponent,
    PlaylistComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SongsService,
    PlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
