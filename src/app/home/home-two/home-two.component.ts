import sal from 'sal.js';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { HeroTwoComponent } from '../../shared/components/hero-banner/hero-two/hero-two.component';
import { MatchResultAreaComponent } from '../../shared/components/match-result-area/match-result-area.component';
import { AboutAreaTwoComponent } from '../../shared/components/about/about-area-two/about-area-two.component';
import { StreamersAreaComponent } from '../../shared/components/streamers-area/streamers-area.component';
import { VideoPopupComponent } from '../../shared/components/video/video-popup/video-popup.component';
import { UpcomingMatchesAreaComponent } from '../../shared/components/upcoming-matche/upcoming-matches-area/upcoming-matches-area.component';
import { ProjectAreaComponent } from '../../shared/components/project-area/project-area.component';
import { SocialAreaComponent } from '../../shared/components/social-area/social-area.component';
import { BrandAreaComponent } from '../../shared/components/brand-area/brand-area.component';
import { FooterTwoComponent } from '../../shared/layout/footer/footer-two/footer-two.component';

@Component({
  selector: 'app-home-two',
  standalone: true,
  imports: [
    HeaderOneComponent,
    HeroTwoComponent,
    MatchResultAreaComponent,
    AboutAreaTwoComponent,
    StreamersAreaComponent,
    UpcomingMatchesAreaComponent,
    ProjectAreaComponent,
    SocialAreaComponent,
    BrandAreaComponent,
    FooterTwoComponent,
    VideoPopupComponent,
  ],
  templateUrl: './home-two.component.html',
  styleUrl: './home-two.component.scss'
})
export class HomeTwoComponent {

  ngAfterViewInit() {
    setTimeout(() => {
      sal({ threshold: 0.1, once: true, root: null });
    }, 500)
  }
}
