import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery-area',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery-area.component.html',
  styleUrl: './gallery-area.component.scss',
})
export class GalleryAreaComponent {

  gallery_data = [
    {
      id: 1,
      img: '/assets/img/gallery/gallery01.jpg',
      title: 'Pubg tournament',
      rate: '50%',
    },
    {
      id: 2,
      img: '/assets/img/gallery/gallery02.jpg',
      title: 'Assassins Creed',
      rate: '65%',
    },
    {
      id: 3,
      img: '/assets/img/gallery/gallery03.jpg',
      title: 'World of Warcraft',
      rate: '60%',
    },
    {
      id: 4,
      img: '/assets/img/gallery/gallery04.jpg',
      title: 'The Chant s.2',
      rate: '70%',
    },
    {
      id: 5,
      img: '/assets/img/gallery/gallery05.jpg',
      title: 'Dota 2 tournament',
      rate: '85%',
    },
  ];

  public items: GalleryItem[] | undefined;

  constructor(public gallery: Gallery, public lightbox: Lightbox) { };

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
      modules:[Scrollbar],
      loop: false,
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    });


    // gallery popup image
    this.items = this.gallery_data.map((item) => new ImageItem({ src: item.img, thumb: item.img }));

    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}
