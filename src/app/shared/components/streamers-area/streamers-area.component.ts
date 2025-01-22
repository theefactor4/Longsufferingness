import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

@Component({
  selector: 'app-streamers-area',
  imports: [CommonModule,RouterModule],
  templateUrl: './streamers-area.component.html',
  styleUrl: './streamers-area.component.scss',
})
export class StreamersAreaComponent {

  // streamers_data
  streamers_data = [
    {
      id: 1,
      img: '/assets/img/team/streamers01.png',
      title: 'sky hunter',
    },
    {
      id: 2,
      img: '/assets/img/team/streamers02.png',
      title: 'Phoenix',
    },
    {
      id: 3,
      img: '/assets/img/team/streamers03.png',
      title: 'Max Jett',
    },
    {
      id: 4,
      img: '/assets/img/team/streamers04.png',
      title: 'Brimstone',
    },
    {
      id: 5,
      img: '/assets/img/team/streamers05.png',
      title: 'Mad Raze',
    },
    {
      id: 6,
      img: '/assets/img/team/streamers06.png',
      title: 'Jackie Welles',
    },
    {
      id: 7,
      img: '/assets/img/team/streamers07.png',
      title: 'Yorinobu Ara',
    },
  ];

  public swiperInstance: Swiper | undefined;

  ngOnInit() {
    // swiper slider activation
    this.swiperInstance = new Swiper('.streamers-active', {
      observer: true,
      observeParents: true,
      loop: false,
      slidesPerView: 5,
      spaceBetween: 20,
      modules: [
        Pagination
      ],
      breakpoints: {
        '1500': {
          slidesPerView: 5,
        },
        '1200': {
          slidesPerView: 4,
        },
        '992': {
          slidesPerView: 4,
        },
        '768': {
          slidesPerView: 3,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1.5,
          centeredSlides: true,
          centeredSlidesBounds: true,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }
}
