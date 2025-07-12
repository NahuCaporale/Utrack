import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from './utrack-songs/Song';
import { tap } from 'rxjs/operators';
const url = 'https://666f05b4f1e1da2be521c3af.mockapi.io/song';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(private http: HttpClient) {}

  public getAllSongs() {
    return this.http
      .get<Song[]>(url)
      .pipe(
        tap((songs: Song[]) =>
          songs.forEach((song) => (song.showSelect = false))
        )
      );
  }
  

}
