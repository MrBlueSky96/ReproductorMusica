import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Song } from '../models/Song';
import { Observable , BehaviorSubject} from 'rxjs';

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


  songSource = new BehaviorSubject('');
  currentSong = this.songSource.asObservable();

  getCurrentSong(song:any) {
    
    this.songSource.next(song);
  }

}
