import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${this.API_URI}/search`);
  }

  searchSongsAndPlaylists(searchText: string) {
    return this.http.get(`${this.API_URI}/search/${searchText}`);
  }

}
