import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const rutas: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent }
];

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VerticalNavbarComponent } from './components/vertical-navbar/vertical-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { LibraryComponent } from './components/library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VerticalNavbarComponent,
    MainComponent,
    SearchComponent,
    LibraryComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
