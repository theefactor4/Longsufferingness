import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { teamDataTwo } from '../../../data/team-data';

@Component({
  selector: 'app-team-area-two',
  imports: [CommonModule,RouterModule],
  templateUrl: './team-area-two.component.html',
  styleUrl: './team-area-two.component.scss'
})
export class TeamAreaTwoComponent {
  
  @Input() style_2: boolean = false;

  teamData = teamDataTwo
}
