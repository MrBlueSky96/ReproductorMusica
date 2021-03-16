import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Playlist } from '../models/Playlist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getPlaylists() {
    return this.http.get(`${this.API_URI}/playlist`);
  }

  getPlaylist(id: string) {
    return this.http.get(`${this.API_URI}/playlist/${id}`);
  }

  deletePlaylists(id: string) {
    return this.http.delete(`${this.API_URI}/playlist/${id}`);
  }

  savePlaylists(playlist: Playlist) {
    return this.http.post(`${this.API_URI}/playlist`, playlist);
  }

  updatePlaylists(id: string, updatedPlaylist: Playlist): Observable<Playlist> {
    return this.http.put(`${this.API_URI}/playlist/${id}`, updatedPlaylist);
  }


  getSongsOfPlaylist(id: string) {
    return this.http.get(`${this.API_URI}/playlist/${id}`);
  }

}