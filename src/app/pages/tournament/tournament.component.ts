import sal from 'sal.js';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbOneComponent } from '../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { TournamentAreaComponent } from '../../shared/components/tournament/tournament-area/tournament-area.component';
import { TournamentListAreaComponent } from '../../shared/components/tournament/tournament-list-area/tournament-list-area.component';

@Component({
  selector: 'app-tournament',
  imports: [
    HeaderOneComponent,
    BreadcrumbOneComponent,
    TournamentAreaComponent,
    TournamentListAreaComponent,
    FooterOneComponent,
  ],
  templateUrl: './tournament.component.html',
  styleUrl: './tournament.component.scss'
})
export class TournamentComponent {

  ngAfterViewInit() {
    setTimeout(() => {
      sal({ threshold: 0.1, once: true, root: null });
    }, 500)
  }
}
