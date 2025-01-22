import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-testimonial-area',
  imports: [CommonModule],
  templateUrl: './testimonial-area.component.html',
  styleUrl: './testimonial-area.component.scss',
})
export class TestimonialAreaComponent {
  
  testimonialData = [
    {
      id: 1,
      thumb: '/assets/img/others/testimonial-thumb.png',
      content: `“Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, orci nulla nam est facilisi pretium class curae rutrum, tempus curabitur ante sociis dui erat vivamus. Porta massa volutpat in vulputate ad congue taciti ligula scelerisque urna, tincidunt odio gravida felis”`,
      name: 'Moolin Lexo',
      designation: 'SUPPORT',
    },
    {
      id: 2,
      thumb: '/assets/img/others/testimonial-thumb.png',
      content: `“Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, orci nulla nam est facilisi pretium class curae rutrum, tempus curabitur ante sociis dui erat vivamus. Porta massa volutpat in vulputate ad congue taciti ligula scelerisque urna, tincidunt odio gravida felis”`,
      name: 'Moolin Lexo',
      designation: 'SUPPORT',
    },
  ];

  public swiperInstance: Swiper | undefined;

  ngOnInit() {
    // swiper slider activation
    this.swiperInstance = new Swiper('.testimonial-active', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      observer: true,
      observeParents: true,
    });
  }
}
