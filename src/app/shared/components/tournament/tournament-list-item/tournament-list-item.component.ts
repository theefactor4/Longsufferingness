import { Component, Input } from '@angular/core';
import { ITournament } from '../../../types/tournament-type';
import { CountdownTimerComponent } from '../../countdown-timer/countdown-timer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tournament-list-item',
  imports: [
    RouterModule,
    CommonModule,
    CountdownTimerComponent,
  ],
  templateUrl: './tournament-list-item.component.html',
  styleUrl: './tournament-list-item.component.scss'
})
export class TournamentListItemComponent {

  @Input() tournament!:ITournament;
  @Input() index: number = 0;
}
