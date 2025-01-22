import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-area',
  imports: [CommonModule,RouterModule],
  templateUrl: './service-area.component.html',
  styleUrl: './service-area.component.scss',
})
export class ServiceAreaComponent {
  
  serviceData = [
    {
      id: 1,
      img: '/assets/img/service/service3-1.png',
      date: '25th March, 2024',
      time: '18:00',
      match: 'HU v/s Lm',
      title: 'Daniel Barna Klark',
      views: '280k',
      game: 'CK (vs) UO',
      groups: '2 Groups',
    },
    {
      id: 2,
      img: '/assets/img/service/service3-2.png',
      date: '25th March, 2024',
      time: '18:00',
      match: 'HU v/s Lm',
      title: 'Daniel Barna Klark',
      views: '280k',
      game: 'CK (vs) UO',
      groups: '2 Groups',
    },
    {
      id: 3,
      img: '/assets/img/service/service3-3.png',
      date: '25th March, 2024',
      time: '18:00',
      match: 'HU v/s Lm',
      title: 'Daniel Barna Klark',
      views: '280k',
      game: 'CK (vs) UO',
      groups: '2 Groups',
    }
  ];
}
