import sal from 'sal.js';
import { Component } from '@angular/core';
import { HeaderThreeComponent } from '../../shared/layout/header/header-three/header-three.component';
import { HeroFourComponent } from '../../shared/components/hero-banner/hero-four/hero-four.component';
import { BrandAreaComponent } from '../../shared/components/brand-area/brand-area.component';
import { NftAreaTwoComponent } from '../../shared/components/nft/nft-area-two/nft-area-two.component';
import { AboutAreaFourComponent } from '../../shared/components/about/about-area-four/about-area-four.component';
import { TeamAreaTwoComponent } from '../../shared/components/team/team-area-two/team-area-two.component';
import { VideoPopupComponent } from '../../shared/components/video/video-popup/video-popup.component';
import { VideoAreaThreeComponent } from '../../shared/components/video/video-area-three/video-area-three.component';
import { ContactAreaComponent } from '../../shared/components/contact/contact-area/contact-area.component';
import { TestimonialAreaComponent } from '../../shared/components/testimonial-area/testimonial-area.component';
import { BlogAreaComponent } from '../../shared/components/blog/blog-area/blog-area.component';
import { FooterFourComponent } from '../../shared/layout/footer/footer-four/footer-four.component';

@Component({
  selector: 'app-home-four',
  imports: [
    HeaderThreeComponent,
    HeroFourComponent,
    BrandAreaComponent,
    NftAreaTwoComponent,
    AboutAreaFourComponent,
    TeamAreaTwoComponent,
    VideoAreaThreeComponent,
    VideoPopupComponent,
    ContactAreaComponent,
    TestimonialAreaComponent,
    BlogAreaComponent,
    FooterFourComponent,
  ],
  templateUrl: './home-four.component.html',
  styleUrl: './home-four.component.scss',
})
export class HomeFourComponent {

  ngAfterViewInit() {
    setTimeout(() => {
      sal({ threshold: 0.1, once: true, root: null });
    }, 500)
  }
}
