import { Component, Input } from '@angular/core';
import { ITournament } from '../../../types/tournament-type';
import { CountdownTimerComponent } from '../../countdown-timer/countdown-timer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tournament-box',
  imports: [
    CommonModule,
    RouterModule,
    CountdownTimerComponent
  ],
  templateUrl: './tournament-box.component.html',
  styleUrl: './tournament-box.component.scss'
})
export class TournamentBoxComponent {

  @Input() tournament!:ITournament;
}
