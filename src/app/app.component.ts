import { Component } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs/operators';

// declare var gtag;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor() {}
  /**
  constructor(private router: Router) {

     * Filtramos los eventos del router
     * solo obteniendo la navegación

    const navEndEvents$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    /**
     * Se suscribe a los eventos de navefgación
     * y a Analytics le pasamos la pagina a la que navegó

    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-33SF90G8PD', {
        page_path: event.urlAfterRedirects,
      });
    });
    }
    */
}
