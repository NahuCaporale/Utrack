import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Playlists } from './utrack-playlist/playlists';
import { find } from "rxjs";
const url = 'https://666f05b4f1e1da2be521c3af.mockapi.io/playlist';
@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  showForm: boolean = false;
  constructor(private http: HttpClient) {}
  playlists: Playlists[] = [];

  public getAllPlaylist() {
    return this.http.get<Playlists[]>(url);
  }
  public addPlaylist(name: string) {
    let id: number = this.playlists.length + 1;
    this.http
      .post(url, { id, name, songs: [] })
      .subscribe(() => {
      });
      
  }
  public addSongToPlaylist(playlistId: number, songId: number) {
    this.http.get<Playlists>(`${url}/${playlistId}`).subscribe(playlist => {
      // Agregamos el ID de la canción al array de canciones
      if (playlist.songs.includes(songId.toString())) {
        console.log('La canción ya está en la playlist');
        return; // Salir si ya existe
      }
      
      const updatedPlaylist = {
        ...playlist,
        songs: [...playlist.songs, songId.toString()]
        
      };
      
      // Hacemos PUT para actualizar la playlist completa
      this.http.put(`${url}/${playlistId}`, updatedPlaylist).subscribe();
    });
  }
}
