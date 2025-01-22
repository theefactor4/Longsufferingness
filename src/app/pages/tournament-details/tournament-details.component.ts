import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbTwoComponent } from '../../shared/components/breadcrumb/breadcrumb-two/breadcrumb-two.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { TournamentDetailsAreaComponent } from '../../shared/components/tournament/tournament-details-area/tournament-details-area.component';
import { VideoPopupComponent } from '../../shared/components/video/video-popup/video-popup.component';

@Component({
  selector: 'app-tournament-details',
  imports: [
    HeaderOneComponent,
    BreadcrumbTwoComponent,
    TournamentDetailsAreaComponent,
    FooterOneComponent,
    VideoPopupComponent
  ],
  templateUrl: './tournament-details.component.html',
  styleUrl: './tournament-details.component.scss'
})
export class TournamentDetailsComponent {


  
}
