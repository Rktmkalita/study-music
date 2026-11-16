import { ChillhopComponent } from './Channels/chillhop/chillhop.component';
import { AnimevibeComponent } from './Channels/animevibe/animevibe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LofigirlComponent } from './Channels/lofigirl/lofigirl.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'lofi-girl',
    component: LofigirlComponent,
  },
  {
    path: 'anime-vibe',
    component: AnimevibeComponent,
  },
  {
    path: 'chillhop',
    component: ChillhopComponent,
  },
  { path: 'my-playlist', component: MyPlaylistComponent },
  { path: 'about', component: NotFoundComponent },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
