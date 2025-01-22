import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';

@Component({
  selector: 'app-shop-deal-area',
  imports: [CommonModule,RouterModule],
  templateUrl: './shop-deal-area.component.html',
  styleUrl: './shop-deal-area.component.scss'
})
export class ShopDealAreaComponent {

  shopDealData = [
    {
      id: 1,
      img: '/assets/img/products/product-01.png',
      title: "Streaming Microphone",
      price: 59.99,
      rating: 4.8,
    },
    {
      id: 2,
      img: '/assets/img/products/product-02.png',
      title: "Wired Headphone With Mic",
      price: 89.99,
      rating: 4.8,
    },
    {
      id: 3,
      img: '/assets/img/products/product-03.png',
      title: "Xbox Wireless Controller",
      price: 39.99,
      rating: 4.8,
    },
    {
      id: 4,
      img: '/assets/img/products/product-04.png',
      title: "Mini Portable Speaker 2.0",
      price: 29.99,
      rating: 4.8,
    },
    {
      id: 5,
      img: '/assets/img/products/product-05.png',
      title: "Logitech G502 X PLUS Mouse",
      price: 69.99,
      rating: 4.8,
    },
    {
      id: 6,
      img: '/assets/img/products/product-06.png',
      title: "Microsoft Xbox Series S 10GB",
      price: 149.99,
      rating: 4.8,
    }
  ];

  public swiperInstance: Swiper | undefined;

  ngOnInit() {
    // swiper slider activation
    this.swiperInstance = new Swiper('.deal-active', {
      loop: false,
      centeredSlides: true,
      spaceBetween: 24,
      observer: true,
      observeParents: true,
      modules: [Scrollbar],
      breakpoints: {
        1920: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 3
        },
        320: {
          slidesPerView: 1
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 200
      }
    });
  }
}
