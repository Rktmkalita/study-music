import { ChillhopComponent } from './Channels/chillhop/chillhop.component';
import { AnimevibeComponent } from './Channels/animevibe/animevibe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LofigirlComponent } from './Channels/lofigirl/lofigirl.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'lofi-girl',
    component: DashboardComponent,
  },
  {
    path: 'anime-vibe',
    component: DashboardComponent,
  },
  {
    path: 'chillhop',
    component: DashboardComponent,
  },
  { path: 'my-playlist', component: DashboardComponent },
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
