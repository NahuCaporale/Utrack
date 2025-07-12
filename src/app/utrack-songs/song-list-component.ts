import { Component, OnInit } from '@angular/core';
import { Song } from './Song';
import { PlaylistService } from '../playlist.service';
import { Playlists } from '../utrack-playlist/playlists';
import { SongsService } from '../songs.service';
import { Router } from '@angular/router';
@Component({
  selector: 'UTrackSongsComponent',
  standalone: false,
  templateUrl: './song-list-component.html',
  styleUrls: ['./song-list-component.scss'],
})
export class SongsListComponent implements OnInit {
  constructor(
    private songsData: SongsService,
    private playlistService: PlaylistService,
    private router: Router
  ) {}
  songs: Song[] = [];
  playlists: Playlists[] = [];
  selectedSongId: number | null = null; // Usamos null como valor inicial
  selectedPlaylistId: number | null = null; // Para almacenar el ID seleccionado
  nombre: string = '';
  ngOnInit() {
    this.getNombre();
    this.songsData.getAllSongs().subscribe((songs) => (this.songs = songs));
    this.playlistService
      .getAllPlaylist()
      .subscribe((playlists) => (this.playlists = playlists));
  }

  showSelect(songId: number): void {
    this.songs.forEach((s) => {
      if (s.id === songId) {
        s.showSelect = !s.showSelect;
      } else {
        s.showSelect = false;
      }
    });
    this.selectedSongId = songId;
    // Reseteo la playlist elegida
    this.selectedPlaylistId = null;
  }

  addSongToPlaylist() {
    if (this.selectedPlaylistId != null && this.selectedSongId != null) {
      this.playlistService.addSongToPlaylist(
        this.selectedPlaylistId!,
        this.selectedSongId!
      );
      this.showSelect(this.selectedSongId);
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

  redirectTo() {
    if (this.selectedPlaylistId === -1) {
      this.router.navigate(['/playlist']);
    }
  }
  public getNombre(): void {
    // Intentar obtener el nombre guardado
    const nombreGuardado = localStorage.getItem('nombreUsuario');

    if (nombreGuardado) {
      this.nombre = nombreGuardado;
    } else {
      // Si no hay nombre guardado, pedirlo
      const nombreIngresado = prompt('Ingresa tu nombre');
      if (nombreIngresado && nombreIngresado.trim() !== '') {
        this.nombre = nombreIngresado.trim();
        // Guardar en localStorage para futuras visitas
        localStorage.setItem('nombreUsuario', this.nombre);
      }
    }
  }
  public cambiarNombre(): void {
    const nuevo = prompt('Nuevo nombre');
    if (nuevo && nuevo.trim() !== '') {
      this.nombre = nuevo;
    }
    localStorage.setItem('nombreUsuario', this.nombre);
  }
}
