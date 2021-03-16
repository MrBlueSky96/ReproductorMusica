import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Song } from '../models/Song';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getSongs() {
    return this.http.get(`${this.API_URI}/music`);
  }

  getSong(id: string) {
    return this.http.get(`${this.API_URI}/music/${id}`);
  }

  deleteSong(id: string) {
    return this.http.delete(`${this.API_URI}/music/${id}`);
  }

  saveSong(song: Song) {
    return this.http.post(`${this.API_URI}/music`, song);
  }

  updateSong(id: string, updatedSong: Song): Observable<Song> {
    return this.http.put(`${this.API_URI}/music/${id}`, updatedSong);
  }

}
