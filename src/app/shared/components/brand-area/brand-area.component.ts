import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-brand-area',
  imports: [CommonModule],
  templateUrl: './brand-area.component.html',
  styleUrl: './brand-area.component.scss'
})
export class BrandAreaComponent {

  @Input() top_cls: string = 'brand-area';
  @Input() hideTitle: boolean = false;

  public brand_images = [
    '/assets/img/brand/brand01.png',
    '/assets/img/brand/brand02.png',
    '/assets/img/brand/brand03.png',
    '/assets/img/brand/brand04.png',
    '/assets/img/brand/brand05.png',
    '/assets/img/brand/brand06.png',
    '/assets/img/brand/brand07.png',
  ];


  hoveredIndex:number | null = null;

  handleHoverIndex(index: number | null) {
    this.hoveredIndex = index;
  }

  public swiperInstance: Swiper | undefined;

  ngOnInit() {
    // swiper slider activation
    this.swiperInstance = new Swiper('.brand-active', {
      slidesPerView: 6,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        '1200': {
          slidesPerView: 6,
        },
        '992': {
          slidesPerView: 5,
        },
        '576': {
          slidesPerView: 3,
        },
        '0': {
          slidesPerView: 2,
        },
      },
    });
  }
}
