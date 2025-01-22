import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-video-area-two',
  imports: [CommonModule,RouterModule],
  templateUrl: './video-area-two.component.html',
  styleUrl: './video-area-two.component.scss',
})
export class VideoAreaTwoComponent {
  // nav data
  navData = [
    { id: 'about01', title: 'CSGO' },
    { id: 'about02', title: 'Dota-2' },
    { id: 'about03', title: 'Pubg' },
    { id: 'about04', title: 'Freefire' },
    { id: 'about05', title: 'Clash of clan' },
  ];
  // active tab
  activeTab = this.navData[0].id;

  handleActiveTab(id:string){
    this.activeTab = id;
  }
  // tab content data
  tabContentData = [
    {
      id: 'about01',
      imgSrc: '/assets/img/gallery/video3-1.jpg',
      title: 'Daniel Barna Klark',
    },
    {
      id: 'about02',
      imgSrc: '/assets/img/gallery/video3-2.png',
      title: 'Daniel Barna Klark',
    },
    {
      id: 'about03',
      imgSrc: '/assets/img/gallery/video3-3.png',
      title: 'Daniel Barna Klark',
    },
    {
      id: 'about04',
      imgSrc: '/assets/img/gallery/video3-4.jpg',
      title: 'Daniel Barna Klark',
    },
    {
      id: 'about05',
      imgSrc: '/assets/img/gallery/video3-5.jpg',
      title: 'Daniel Barna Klark',
    },
  ];
}
