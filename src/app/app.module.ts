import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { LofigirlComponent } from './Channels/lofigirl/lofigirl.component';
import { AnimevibeComponent } from './Channels/animevibe/animevibe.component';
import { ChillhopComponent } from './Channels/chillhop/chillhop.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AmbientSoundsComponent } from './ambient-sounds/ambient-sounds.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, LofigirlComponent, AnimevibeComponent, ChillhopComponent, NotFoundComponent, YoutubePlayerComponent, MyPlaylistComponent, DashboardComponent, AmbientSoundsComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
