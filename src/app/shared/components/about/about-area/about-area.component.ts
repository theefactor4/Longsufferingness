import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextAnimationComponent } from '../../text-animation/text-animation.component';
import { RouterModule } from '@angular/router';
import { BtnBgTwoComponent } from '../../svg/btn-bg-two.component';
import { BtnBgThreeComponent } from '../../svg/btn-bg-three.component';

@Component({
  selector: 'app-about-area',
  standalone: true,
  imports: [CommonModule,RouterModule,TextAnimationComponent,BtnBgTwoComponent,BtnBgThreeComponent],
  templateUrl: './about-area.component.html',
  styleUrl: './about-area.component.scss'
})
export class AboutAreaComponent {

  navData = [
    { id: '01', img: '/assets/img/others/about_tab01.png', isActive: true },
    { id: '02', img: '/assets/img/others/about_tab02.png', isActive: false },
    { id: '03', img: '/assets/img/others/about_tab03.png', isActive: false },
    { id: '04', img: '/assets/img/others/about_tab04.png', isActive: false },
    { id: '05', img: '/assets/img/others/about_tab05.png', isActive: false },
    { id: '06', img: '/assets/img/others/about_tab06.png', isActive: false }
  ];

  tabItemData = [
    {
      id: '01',
      img: '/assets/img/others/about_img01.jpg',
      title: 'Human Game',
      rate: '50%',
      isActive: true
    },
    {
      id: '02',
      img: '/assets/img/others/about_img02.jpg',
      title: 'Axie Infinity',
      rate: '60%',
      isActive: false
    },
    {
      id: '03',
      img: '/assets/img/others/about_img03.jpg',
      title: 'The Walking Dead',
      rate: '75%',
      isActive: false
    },
    {
      id: '04',
      img: '/assets/img/others/about_img04.jpg',
      title: 'The Dogami',
      rate: '65%',
      isActive: false
    },
    {
      id: '05',
      img: '/assets/img/others/about_img05.jpg',
      title: 'The Sandbox',
      rate: '85%',
      isActive: false
    },
    {
      id: '06',
      img: '/assets/img/others/about_img06.jpg',
      title: 'Pegaxy Horses',
      rate: '90%',
      isActive: false
    }
  ];

  playSound(audioPath: string): void {
    const audio = new Audio(audioPath);
    audio.play();
  }
}
