import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import sal from 'sal.js';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { HeroOneComponent } from '../../shared/components/hero-banner/hero-one/hero-one.component';
import { NftAreaComponent } from '../../shared/components/nft/nft-area/nft-area.component';
import { AboutAreaComponent } from '../../shared/components/about/about-area/about-area.component';
import { GalleryAreaComponent } from '../../shared/components/gallery/gallery-area/gallery-area.component';
import { TeamAreaComponent } from '../../shared/components/team/team-area/team-area.component';
import { VideoAreaComponent } from '../../shared/components/video/video-area/video-area.component';
import { RoadMapAreaComponent } from '../../shared/components/road-map/road-map-area/road-map-area.component';
import { TrendingNftItemsComponent } from '../../shared/components/nft/trending-nft-items/trending-nft-items.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { VideoPopupComponent } from '../../shared/components/video/video-popup/video-popup.component';

@Component({
  selector: 'app-home-one',
  standalone: true,
  imports: [
    CommonModule,
    HeaderOneComponent,
    HeroOneComponent,
    NftAreaComponent,
    AboutAreaComponent,
    GalleryAreaComponent,
    TeamAreaComponent,
    VideoAreaComponent,
    RoadMapAreaComponent,
    TrendingNftItemsComponent,
    FooterOneComponent,
    VideoPopupComponent,
  ],
  templateUrl: './home-one.component.html',
  styleUrl: './home-one.component.scss',
})
export class HomeOneComponent {

  ngAfterViewInit() {
    setTimeout(() => {
      sal({ threshold: 0.1, once: true, root: null });
    }, 500)
  }
}
