import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TournamentListItemComponent } from '../tournament-list-item/tournament-list-item.component';
import tournament_data from '../../../data/tournament-data';

@Component({
  selector: 'app-tournament-list-area',
  imports: [RouterModule,CommonModule,TournamentListItemComponent],
  templateUrl: './tournament-list-area.component.html',
  styleUrl: './tournament-list-area.component.scss'
})
export class TournamentListAreaComponent {

  tournament_data = [...tournament_data];
}
