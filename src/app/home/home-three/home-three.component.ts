import { Component } from '@angular/core';
import sal from 'sal.js';
import { HeaderTwoComponent } from '../../shared/layout/header/header-two/header-two.component';
import { HeroThreeComponent } from '../../shared/components/hero-banner/hero-three/hero-three.component';
import { AboutAreaThreeComponent } from '../../shared/components/about/about-area-three/about-area-three.component';
import { VideoAreaTwoComponent } from '../../shared/components/video/video-area-two/video-area-two.component';
import { ServiceAreaComponent } from '../../shared/components/services/service-area/service-area.component';
import { UpcomingMatchesAreaTwoComponent } from '../../shared/components/upcoming-matche/upcoming-matches-area-two/upcoming-matches-area-two.component';
import { TeamAreaTwoComponent } from '../../shared/components/team/team-area-two/team-area-two.component';
import { BlogAreaComponent } from '../../shared/components/blog/blog-area/blog-area.component';
import { BrandAreaComponent } from '../../shared/components/brand-area/brand-area.component';
import { FooterThreeComponent } from '../../shared/layout/footer/footer-three/footer-three.component';

@Component({
  selector: 'app-home-three',
  imports: [
    HeaderTwoComponent,
    HeroThreeComponent,
    AboutAreaThreeComponent,
    VideoAreaTwoComponent,
    ServiceAreaComponent,
    UpcomingMatchesAreaTwoComponent,
    TeamAreaTwoComponent,
    BlogAreaComponent,
    BrandAreaComponent,
    FooterThreeComponent
  ],
  templateUrl: './home-three.component.html',
  styleUrl: './home-three.component.scss',
})
export class HomeThreeComponent {

  ngAfterViewInit() {
    setTimeout(() => {
      sal({ threshold: 0.1, once: true, root: null });
    }, 500)
  }
}
