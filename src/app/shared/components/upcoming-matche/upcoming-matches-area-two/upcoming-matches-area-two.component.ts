import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-upcoming-matches-area-two',
  imports: [CommonModule,RouterModule],
  templateUrl: './upcoming-matches-area-two.component.html',
  styleUrl: './upcoming-matches-area-two.component.scss'
})
export class UpcomingMatchesAreaTwoComponent {

  upcomingMatchData = [
    {
      id: 1,
      leftTeamLogo: '/assets/img/others/match-logo3-1.png',
      streamOn: ["facebook-f", "discord", "vimeo", "youtube"],
      leftTeamName: "MARVEL STADIUM",
      gameName: "CALL OF DUTY Live Stream",
      rightTeamLogo: '/assets/img/others/match-logo3-2.png',
      rightTeamName: "MARVEL STADIUM",
      time: "7:00 Pm - 4:00 Am Cet",
      day: "Monday",
    },
    {
      id: 2,
      leftTeamLogo: '/assets/img/others/match-logo3-3.png',
      streamOn: ["facebook-f", "discord", "vimeo", "youtube"],
      leftTeamName: "MARVEL STADIUM",
      gameName: "CALL OF DUTY Live Stream",
      rightTeamLogo: '/assets/img/others/match-logo3-4.png',
      rightTeamName: "MARVEL STADIUM",
      time: "7:00 Pm - 4:00 Am Cet",
      day: "Tuesday",
    },
    {
      id: 3,
      leftTeamLogo: '/assets/img/others/match-logo3-5.png',
      streamOn: ["facebook-f", "discord", "vimeo", "youtube"],
      leftTeamName: "MARVEL STADIUM",
      gameName: "CALL OF DUTY Live Stream",
      rightTeamLogo: '/assets/img/others/match-logo3-6.png',
      rightTeamName: "MARVEL STADIUM",
      time: "7:00 Pm - 4:00 Am Cet",
      day: "Friday",
    }
  ]
}
