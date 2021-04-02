import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Song } from '../models/Song';
import { Observable , BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getSongs() {
    return this.http.get(`${this.API_URI}/music`);
  }

  getSong(id_song: string) {
    return this.http.get(`${this.API_URI}/music/${id_song}`);
  }

  deleteSong(id_song: string) {
    return this.http.delete(`${this.API_URI}/music/${id_song}`);
  }

  saveSong(song: Song) {
    return this.http.post(`${this.API_URI}/music`, song);
  }

  updateSong(id_song: string, updatedSong: Song): Observable<Song> {
    return this.http.put(`${this.API_URI}/music/${id_song}`, updatedSong);
  }


  //Cambia la ruta de la canción en el reproductor
  songSource = new Subject();
  currentSong = this.songSource.asObservable();

  changeClickedSong(route:any) {
    this.songSource.next(route);
  }


  getSongsOfCustomPlaylist(id_customPlaylist: string) {
    return this.http.get(`${this.API_URI}/music/${id_customPlaylist}`);
  }



  options = {
    headers: new HttpHeaders({
      //'Content-Type': 'application/json',
    }),
    body: {
      id_FromCustomPlaylist: '',
      id_FromSong: ''
    },
  }

  deleteSongOfCustomPlaylist() {
    return this.http.delete(`${this.API_URI}/music/`, this.options);
  }

}
