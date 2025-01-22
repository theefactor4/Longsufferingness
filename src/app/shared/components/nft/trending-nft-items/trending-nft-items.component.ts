import Swiper from 'swiper';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import nft_data from '../../../data/nft-data';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-trending-nft-items',
    imports: [CommonModule, RouterModule],
    templateUrl: './trending-nft-items.component.html',
    styleUrl: './trending-nft-items.component.scss'
})
export class TrendingNftItemsComponent {


  nft_items = [...nft_data.slice().reverse()];

  public swiperInstance: Swiper | undefined;

  ngOnInit() {
    this.swiperInstance = new Swiper('.trendingNft-active', {
      observer: true,
      observeParents: true,
      loop: false,
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        '1500': {
          slidesPerView: 3,
        },
        '1200': {
          slidesPerView: 3,
        },
        '992': {
          slidesPerView: 2,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });
  }
}
