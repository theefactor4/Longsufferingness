import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIconAnimComponent } from '../svg-icon-anim/svg-icon-anim.component';
import { RouterModule } from '@angular/router';
import { TextAnimationComponent } from '../text-animation/text-animation.component';

@Component({
  selector: 'app-match-result-area',
  imports: [CommonModule,RouterModule,TextAnimationComponent,SvgIconAnimComponent],
  templateUrl: './match-result-area.component.html',
  styleUrl: './match-result-area.component.scss'
})
export class MatchResultAreaComponent {

  matchResultData = {
    title: 'Premier league',
    winners: [
      {
        name: 'Black Hunt',
        price: '500,000',
        image: '/assets/img/others/win01.png',
        svgId: 'svg-3',
        svgIcon: '/assets/img/icons/win_shape.svg',
        place: 'win'
      },
      {
        name: 'Sky Hunter',
        price: '300,000',
        image: '/assets/img/others/win02.png',
        svgId: 'svg-4',
        svgIcon: '/assets/img/icons/win_shape.svg',
        place: '2nd'
      }
    ],
    finalDate: 'December 19, 2024 | 9:50 am',
    finalPlace: 'grand dubai'
  };
}
