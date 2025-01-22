import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BackToTopComponent } from './shared/components/back-to-top/back-to-top.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BackToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MYKD - eSports and Gaming NFT Angular Template';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
