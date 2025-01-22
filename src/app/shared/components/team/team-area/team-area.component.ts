import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import team_data from '../../../data/team-data';
import { TextAnimationComponent } from '../../text-animation/text-animation.component';

@Component({
    selector: 'app-team-area',
    standalone: true,
    imports: [CommonModule, RouterModule, TextAnimationComponent],
    templateUrl: './team-area.component.html',
    styleUrl: './team-area.component.scss'
})
export class TeamAreaComponent {

  teamData = team_data;
}
