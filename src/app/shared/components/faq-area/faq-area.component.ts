import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq-area',
  imports: [CommonModule,RouterModule],
  templateUrl: './faq-area.component.html',
  styleUrl: './faq-area.component.scss'
})
export class FaqAreaComponent {

  service_images = [
    '/assets/img/others/services_img01.jpg',
    '/assets/img/others/services_img02.jpg',
    '/assets/img/others/services_img03.jpg',
    '/assets/img/others/services_img04.jpg'
  ];

  faq_data = [
    {
      id: 'one',
      active: true,
      title: 'Best NFT Game',
      desc: 'Been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley'
    },
    {
      id: 'two',
      title: 'Where can I get some?',
      desc: 'Been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley'
    },
    {
      id: 'three',
      title: 'Does it come from?',
      desc: 'Been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley'
    }
  ];

  activeIndex: number | null = 0;

  handleMouseOver(index: number): void {
    this.activeIndex = index;
  }
}
