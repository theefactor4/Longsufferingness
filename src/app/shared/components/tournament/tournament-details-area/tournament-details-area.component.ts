import { Component } from '@angular/core';
import { UtilsService } from '../../../../service/utils.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tournament-details-area',
  imports: [CommonModule,RouterModule],
  templateUrl: './tournament-details-area.component.html',
  styleUrl: './tournament-details-area.component.scss'
})
export class TournamentDetailsAreaComponent {

  constructor(public utilsService:UtilsService) { };


  trendingMatchesData = [
    {
      id: 1,
      image: '/assets/img/others/trend_match01.png',
      title: 'FoxTie Max',
      price: 7500,
      videoId: 'a3_o4SpV1vI'
    },
    {
      id: 2,
      image: '/assets/img/others/trend_match02.png',
      title: 'hatax ninja',
      price: 5500,
      videoId: 'a3_o4SpV1vI'
    },
    {
      id: 3,
      image: '/assets/img/others/trend_match03.png',
      title: 'spartan ii',
      price: 3500,
      videoId: 'a3_o4SpV1vI'
    }
  ];
}
