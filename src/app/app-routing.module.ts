import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsListComponent } from './utrack-songs/song-list-component';
import { PlaylistComponent } from './utrack-playlist/utrack-playlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/songs',
    pathMatch: 'full',
  },
  {
    path: 'songs',
    component: SongsListComponent,
  },

  {
    path: 'playlist',
    component: PlaylistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
