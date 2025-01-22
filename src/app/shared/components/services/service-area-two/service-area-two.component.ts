import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-area-two',
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './service-area-two.component.html',
  styleUrl: './service-area-two.component.scss'
})
export class ServiceAreaTwoComponent {

  serviceImages: string[] = [
    '/assets/img/others/services_img01.jpg',
    '/assets/img/others/services_img02.jpg',
    '/assets/img/others/services_img03.jpg',
    '/assets/img/others/services_img04.jpg'
  ];

  serviceItems = [
    {
      id: 1,
      icon: 'flaticon-diamond',
      title: 'Year Experience',
      desc: 'Lorem ipsum dolor sit amet const adipiscng Duis eletum sollicitudin is yaugue euismods'
    },
    {
      id: 2,
      icon: 'flaticon-user-profile',
      title: 'Expert Teams',
      desc: 'Lorem ipsum dolor sit amet const adipiscng Duis eletum sollicitudin is yaugue euismods'
    },
    {
      id: 3,
      icon: 'flaticon-ethereum',
      title: 'Best NFT Game',
      desc: 'Lorem ipsum dolor sit amet const adipiscng Duis eletum sollicitudin is yaugue euismods'
    },
    {
      id: 4,
      icon: 'flaticon-settings-1',
      title: 'Worldwide Client',
      desc: 'Lorem ipsum dolor sit amet const adipiscng Duis eletum sollicitudin is yaugue euismods'
    }
  ];

  activeIndex: number | null = 0;

  handleMouseOver(index: number): void {
    this.activeIndex = index;
  }

  handleMouseOut(index: number): void {
    this.activeIndex = index;
  }
}
