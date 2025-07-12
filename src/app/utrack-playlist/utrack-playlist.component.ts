import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlists } from './playlists';
import { Song } from '../utrack-songs/Song';
import { SongsService } from '../songs.service';
@Component({
  selector: 'app-utrack-playlist',
  standalone: false,
  templateUrl: './utrack-playlist.component.html',
  styleUrl: './utrack-playlist.component.scss',
})
export class PlaylistComponent implements OnInit {
  constructor(
    private playlistService: PlaylistService,
    private songsService: SongsService
  ) {}

  showForm: boolean = false;
  nombrePlaylist: string = '';
  playlists: Playlists[] = [];
  songs: Song[] = [];
  ngOnInit() {
    this.playlistService
      .getAllPlaylist()
      .subscribe((playlist) => (this.playlists = playlist));
    this.songsService.getAllSongs().subscribe((songs) => (this.songs = songs));
  }
  showFormu() {
    this.showForm = !this.showForm;
  }
  addPlaylist(nombrePlaylist: string) {
    if (this.nombrePlaylist != '') {
      this.playlistService.addPlaylist(this.nombrePlaylist);
    }
  }
  getSongNombre(id: number | string): string {
    const buscado = this.songs.find((song) => song.id === +id);
    if (buscado) {
      return buscado.nombre;
    } else {
      return 'Desconocida';
    }
  }
}
