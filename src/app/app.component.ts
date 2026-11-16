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
    this.showNavigation = !router.url.startsWith('/dashboard');
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.showNavigation = !(event as NavigationEnd).urlAfterRedirects.startsWith('/dashboard');
    });
  }
}
