import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ThumbnailsPosition,
  ImageSize,
} from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-project-area',
  imports: [CommonModule],
  templateUrl: './project-area.component.html',
  styleUrl: './project-area.component.scss',
})
export class ProjectAreaComponent {
  public project_images = [
    '/assets/img/gallery/project_01.jpg',
    '/assets/img/gallery/project_02.jpg',
    '/assets/img/gallery/project_03.jpg',
    '/assets/img/gallery/project_04.jpg',
    '/assets/img/gallery/project_05.jpg',
    '/assets/img/gallery/project_06.jpg',
    '/assets/img/gallery/project_07.jpg',
    '/assets/img/gallery/project_08.jpg',
  ];

  public items: GalleryItem[] | undefined;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  public swiperInstance: Swiper | undefined;

  ngOnInit() {
    // gallery popup image
    this.items = this.project_images.map(
      (item) => new ImageItem({ src: item, thumb: item })
    );

    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }

  ngAfterViewInit() {
    // swiper slider activation
    this.swiperInstance = new Swiper('.project-active', {
      slidesPerView: 4,
      spaceBetween: 15,
      modules: [Scrollbar], 
      loop: false,
      breakpoints: {
        '1500': {
          slidesPerView: 4,
        },
        '1200': {
          slidesPerView: 4,
        },
        '992': {
          slidesPerView: 3,
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
      scrollbar: {
        el: '.swiper-scrollbar-project',
        draggable: true,
        dragClass:'swiper-scrollbar-drag',
        dragSize: 24,
      },
    });
  }
}
