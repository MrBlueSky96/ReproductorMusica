import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CustomPlaylist } from '../models/CustomPlaylist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPlaylistService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getCustomPlaylists() {
    return this.http.get(`${this.API_URI}/customPlaylist`);
  }

  getCustomPlaylist(id_customPlaylist: string) {
    return this.http.get(`${this.API_URI}/customPlaylist/${id_customPlaylist}`);
  }

  deleteCustomPlaylists(id_customPlaylist: string) {
    return this.http.delete(`${this.API_URI}/customPlaylist/${id_customPlaylist}`);
  }

  saveCustomPlaylists(customPlaylist: CustomPlaylist) {
    return this.http.post(`${this.API_URI}/customPlaylist`, customPlaylist);
  }

  updateCustomPlaylists(id_customPlaylist: string, updatedCustomPlaylist: CustomPlaylist): Observable<CustomPlaylist> {
    return this.http.put(`${this.API_URI}/customPlaylist/${id_customPlaylist}`, updatedCustomPlaylist);
  }


  getSongsOfCustomPlaylist(id_customPlaylist: string) {
    return this.http.get(`${this.API_URI}/customPlaylist/${id_customPlaylist}`);
  }

}
