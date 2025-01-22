import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilsService } from '../../../../service/utils.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-video-area-three',
  imports: [CommonModule, RouterModule],
  templateUrl: './video-area-three.component.html',
  styleUrl: './video-area-three.component.scss',
})
export class VideoAreaThreeComponent {
  constructor(public utilsService: UtilsService) {}

  videoItemData = [
    {
      id: 1,
      imgSrc: '/assets/img/gallery/video3-1.jpg',
      videoId: 'ssrNcwxALS4',
      cardTitle: 'Daniel Barna Klark',
    },
    {
      id: 2,
      imgSrc: '/assets/img/gallery/video3-2.png',
      videoId: 'ssrNcwxALS4',
      cardTitle: 'Daniel Barna Klark',
    },
    {
      id: 3,
      imgSrc: '/assets/img/gallery/video3-3.png',
      videoId: 'ssrNcwxALS4',
      cardTitle: 'Daniel Barna Klark',
    },
    {
      id: 4,
      imgSrc: '/assets/img/gallery/video3-4.jpg',
      videoId: 'ssrNcwxALS4',
      cardTitle: 'Daniel Barna Klark',
    },
    {
      id: 5,
      imgSrc: '/assets/img/gallery/video3-5.jpg',
      videoId: 'ssrNcwxALS4',
      cardTitle: 'Daniel Barna Klark',
    },
  ];

  public swiperInstance: Swiper | undefined;

  ngOnInit() {
    // swiper slider activation
    this.swiperInstance = new Swiper('.gallery-active', {
      centeredSlides: true,
      centeredSlidesBounds: true,
      spaceBetween: 30,
      freeMode: false,
      observer: true,
      observeParents: true,
      loop: true,
      breakpoints: {
        1920: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        },
      },
    });
  }
}
