import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lofi-music';
  showNavigation = true;

  constructor(router: Router) {
    this.showNavigation = !this.isImmersiveRoute(router.url);
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.showNavigation = !this.isImmersiveRoute((event as NavigationEnd).urlAfterRedirects);
    });
  }

  private isImmersiveRoute(url: string): boolean { return url === '/' || url.startsWith('/dashboard'); }
}
