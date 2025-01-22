import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextAnimationComponent } from '../../text-animation/text-animation.component';
import { TournamentBoxComponent } from '../tournament-box/tournament-box.component';
import tournament_data from '../../../data/tournament-data';

@Component({
  selector: 'app-tournament-area',
  imports: [
    CommonModule,
    TextAnimationComponent,
    TournamentBoxComponent,
  ],
  templateUrl: './tournament-area.component.html',
  styleUrl: './tournament-area.component.scss'
})
export class TournamentAreaComponent {

  tournament_data = [...tournament_data];
}
