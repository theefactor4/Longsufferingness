import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIconAnimComponent } from '../../svg-icon-anim/svg-icon-anim.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-upcoming-matches-area',
  imports: [CommonModule,SvgIconAnimComponent,RouterModule],
  templateUrl: './upcoming-matches-area.component.html',
  styleUrl: './upcoming-matches-area.component.scss'
})
export class UpcomingMatchesAreaComponent {

  upcomingMatchData = [
    {
      id: 1,
      game: "Dota2",
      teamLeft: {
        name: "Sky Hunter",
        img: "/assets/img/others/team_vs01.png"
      },
      teamRight: {
        name: "The Tadium",
        img: "/assets/img/others/team_vs02.png"
      },
      time: "08:30",
      date: "October 7, 2024, 8:30 pm",
      svgId: "svg-7"
    },
    {
      id: 2,
      game: "Valorant",
      teamLeft: {
        name: "Killer 7",
        img: "/assets/img/others/team_vs03.png"
      },
      teamRight: {
        name: "Black mx",
        img: "/assets/img/others/team_vs04.png"
      },
      time: "05:30",
      date: "October 9, 2024, 5:30 pm",
      svgId: "svg-8"
    },
    {
      id: 3,
      game: "PUBG PC",
      teamLeft: {
        name: "Killer 7",
        img: "/assets/img/others/team_vs05.png"
      },
      teamRight: {
        name: "Black mx",
        img: "/assets/img/others/team_vs06.png"
      },
      time: "09:30",
      date: "October 10, 2024, 9:30 pm",
      svgId: "svg-9"
    }
  ];
}
